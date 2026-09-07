#!/usr/bin/env bash
set -euo pipefail

# ====== CONFIG ======
# Folder containing your repos (each subfolder with a .git)
ROOT_DIR="${1:-$PWD}"               # pass a path as first arg, or defaults to current dir
AUTHOR_NAME="${AUTHOR_NAME:-}"      # optional: limit stats to you (set env var AUTHOR_NAME="Your Name")
SINCE="${SINCE:-1 year ago}"        # change to "6 months ago", "90 days ago", etc.
OUT_DIR="${OUT_DIR:-git-history-report}"

mkdir -p "$OUT_DIR/per_repo_monthly"

# CSV headers
SUMMARY_CSV="$OUT_DIR/summary.csv"
echo "repo,first_commit,last_commit,total_commits,commits_since,author_commits_since,added_lines,removed_lines,net_lines,top_extensions" > "$SUMMARY_CSV"

# Helper: run a git command safely in a given repo
git_in() {
  git -C "$1" "$@"
}

# Helper: sum added/removed LOC across history (optionally by author), skipping binary ('-') rows
sum_loc() {
  local repo="$1"
  local author_arg=()
  [[ -n "$2" ]] && author_arg=(--author="$2")
  git_in "$repo" log "${author_arg[@]}" --pretty=tformat: --numstat \
    | awk '($1 ~ /^[0-9]+$/ && $2 ~ /^[0-9]+$/) {add+=$1; sub+=$2} END {printf "%d,%d,%d\n", (add?add:0), (sub?sub:0), (add-sub)}'
}

# Helper: top 3 file extensions by count of tracked files (rough proxy for languages)
top_extensions() {
  local repo="$1"
  git_in "$repo" ls-files \
    | awk -F. 'NF>1 {print tolower($NF)}' \
    | sort | uniq -c | sort -nr | head -n 3 \
    | awk '{$1=""; sub(/^ /,""); print}' \
    | paste -sd'|' - \
    | sed 's/,//g'  # remove commas so CSV stays clean
}

# Iterate child directories that are git repos
while IFS= read -r -d '' repo; do
  name="$(basename "$repo")"

  # Ensure repo has at least one commit
  if ! git_in "$repo" rev-parse --verify HEAD >/dev/null 2>&1; then
    echo "Skipping empty repo: $name"
    continue
  fi

  # Dates
  first_commit="$(git_in "$repo" log --reverse --pretty=format:%ad --date=short | head -n1)"
  last_commit="$(git_in "$repo" log -1 --pretty=format:%ad --date=short)"

  # Totals
  total_commits="$(git_in "$repo" rev-list --count HEAD || echo 0)"
  commits_since="$(git_in "$repo" log --since="$SINCE" --pretty=oneline | wc -l | tr -d ' ')"

  # Author-scoped commits (optional)
  author_commits_since="N/A"
  if [[ -n "$AUTHOR_NAME" ]]; then
    author_commits_since="$(git_in "$repo" log --since="$SINCE" --pretty=oneline --author="$AUTHOR_NAME" | wc -l | tr -d ' ')"
  fi

  # LOC (added/removed/net) — optionally scoped to author if AUTHOR_NAME set
  if [[ -n "$AUTHOR_NAME" ]]; then
    IFS=',' read -r added removed net <<<"$(sum_loc "$repo" "$AUTHOR_NAME")"
  else
    IFS=',' read -r added removed net <<<"$(sum_loc "$repo" "")"
  fi

  # Top extensions
  exts="$(top_extensions "$repo")"
  [[ -z "$exts" ]] && exts="(none)"

  # Per-repo monthly breakdown (commits per month)
  monthly_csv="$OUT_DIR/per_repo_monthly/${name}_monthly.csv"
  echo "month,commits" > "$monthly_csv"
  git_in "$repo" log --date=format:'%Y-%m' --pretty='%ad' \
    | sort | uniq -c | sort \
    | awk '{printf "%s,%d\n", $2, $1}' >> "$monthly_csv"

  # Append to summary CSV
  echo "$name,$first_commit,$last_commit,$total_commits,$commits_since,$author_commits_since,$added,$removed,$net,$exts" >> "$SUMMARY_CSV"

  echo "Done: $name"
done < <(find "$ROOT_DIR" -mindepth 1 -maxdepth 1 -type d -print0 | xargs -0 -I{} bash -c 'test -d "{}/.git" && printf "%s\0" "{}"')

# A simple README snippet you can paste into a portfolio
README_MD="$OUT_DIR/README-snippet.md"
cat > "$README_MD" <<'MD'
## Code Contribution Metrics (from Git History)
- **Time window:** configurable (e.g., last 12 months)
- **Outputs:**
  - `summary.csv`: per-repo totals (first/last commit, commits since window, lines added/removed/net, top file extensions)
  - `per_repo_monthly/*.csv`: commits per month per repo (for charts)

> Tip: Feed these CSVs into your site to render charts like "Commits per month", "Top languages by repo", etc.
MD

echo
echo "✅ Report complete!"
echo "Summary: $SUMMARY_CSV"
echo "Monthly per repo: $OUT_DIR/per_repo_monthly/*.csv"
echo "Portfolio snippet: $README_MD"
echo
echo "Usage examples:"
echo "  AUTHOR_NAME='Your Name' SINCE='1 year ago' bash git-history-report.sh /path/to/repos"
echo "  SINCE='6 months ago' bash git-history-report.sh ~/code"
