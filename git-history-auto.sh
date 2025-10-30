#!/usr/bin/env bash
set -euo pipefail

# ----- CONFIG -----
ROOT_DIR="${1:-$PWD}"                 # pass your root, e.g. ~/Development
AUTHOR_NAME="${AUTHOR_NAME:-}"        # e.g. "Your Name" or "you@company.com"
SINCE="${SINCE:-1 year ago}"
OUT_DIR="${OUT_DIR:-git-history-report}"
MAX_DEPTH="${MAX_DEPTH:-20}"

mkdir -p "$OUT_DIR/per_repo_monthly"

SUMMARY_CSV="$OUT_DIR/summary.csv"
echo "repo,first_commit,last_commit,total_commits,commits_since,author_commits_since,added_lines,removed_lines,net_lines,top_extensions" > "$SUMMARY_CSV"

git_in() { git -C "$1" "$@"; }

sum_loc() {
  local repo="$1" author="$2"
  local author_arg=()
  [[ -n "$author" ]] && author_arg=(--author="$author")
  git_in "$repo" log "${author_arg[@]}" --pretty=tformat: --numstat \
    | awk '($1 ~ /^[0-9]+$/ && $2 ~ /^[0-9]+$/){add+=$1; sub+=$2} END{printf "%d,%d,%d\n",(add?add:0),(sub?sub:0),(add-sub)}'
}

top_extensions() {
  local repo="$1"
  git_in "$repo" ls-files \
    | awk -F. 'NF>1{print tolower($NF)}' \
    | sort | uniq -c | sort -nr | head -n3 \
    | awk '{$1=""; sub(/^ /,""); print}' \
    | paste -sd'|' - | sed 's/,//g'
}

declare -A seen_roots
repo_count=0

# Walk directories without huge xargs batches; avoid .git internals
while IFS= read -r -d '' path; do
  # Is this inside a git work tree?
  if git -C "$path" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    # Skip bare repos (no work tree)
    if git -C "$path" rev-parse --is-bare-repository 2>/dev/null | grep -qi '^true$'; then
      continue
    fi
    # Normalize to the repo root
    root="$(git -C "$path" rev-parse --show-toplevel 2>/dev/null || true)"
    [[ -z "$root" ]] && continue

    # Dedup roots
    if [[ -z "${seen_roots[$root]+x}" ]]; then
      seen_roots[$root]=1
      echo "Found repo: $root"
      repo_count=$((repo_count+1))

      name="$(basename "$root")"

      # Skip repos with no commits (unborn HEAD)
      if ! git_in "$root" rev-parse --verify HEAD >/dev/null 2>&1; then
        echo "  -> Skipping (no commits): $name"
        continue
      fi

      first_commit="$(git_in "$root" log --reverse --pretty=format:%ad --date=short | head -n1 || true)"
      last_commit="$(git_in "$root" log -1 --pretty=format:%ad --date=short || true)"
      total_commits="$(git_in "$root" rev-list --count HEAD || echo 0)"
      commits_since="$(git_in "$root" log --since="$SINCE" --pretty=oneline | wc -l | tr -d ' ' || echo 0)"

      author_commits_since="(not filtered)"
      if [[ -n "$AUTHOR_NAME" ]]; then
        author_commits_since="$(git_in "$root" log --since="$SINCE" --pretty=oneline --author="$AUTHOR_NAME" | wc -l | tr -d ' ' || echo 0)"
      fi

      IFS=',' read -r added removed net <<<"$(sum_loc "$root" "${AUTHOR_NAME:-}")"
      exts="$(top_extensions "$root")"; [[ -z "$exts" ]] && exts="(none)"

      monthly_csv="$OUT_DIR/per_repo_monthly/${name}_monthly.csv"
      echo "month,commits" > "$monthly_csv"
      git_in "$root" log --date=format:'%Y-%m' --pretty='%ad' \
        | sort | uniq -c | sort \
        | awk '{printf "%s,%d\n", $2, $1}' >> "$monthly_csv" || true

      echo "$name,$first_commit,$last_commit,$total_commits,$commits_since,$author_commits_since,$added,$removed,$net,$exts" >> "$SUMMARY_CSV"
      echo "  -> Done: $name"
    fi
  fi
done < <(find -L "$ROOT_DIR" -mindepth 1 -maxdepth "$MAX_DEPTH" -type d ! -path '*/.git/*' -print0)

echo
echo "✅ Report complete. Repos processed: $repo_count"
echo "Summary CSV: $SUMMARY_CSV"
echo "Monthly CSVs: $OUT_DIR/per_repo_monthly/*.csv"
echo
echo "Examples:"
echo "  SINCE='10 years ago' ./git-history-auto.sh ~/Development"
echo "  AUTHOR_NAME='$(git config user.name || echo Your Name)' SINCE='1 year ago' ./git-history-auto.sh ~/Development"
