import type { Company, EducationEntry, InterestEntry } from "./resume.types";

export const experience: Company[] = [
  {
    companyName: "Curriculum Associates, LLC",
    companyLogo: "curriculum_associates_logo.jpeg",
    positions: [
      {
        jobTitle: "Senior Software Engineer II (Lead Developer)",
        jobDateRange: "Mar 2024 - Present",
        icon: "briefcase",
        gradient: { from: "blue", to: "teal", deg: 90 },
        bulletPoints: [
          "Set coding standards and own technical direction for a 5-engineer team split across a 12-hour time zone gap, resolving delivery escalations before they reach the release date.",
          "Owned the reporting feature for the flagship back-to-school 2026 release, aligning 4 teams on a single scope and timeline; drove 534 new account activations and 4,170 unique visitors during the pre-term administrator rollout.",
          "Built an AI-assisted test migration workflow that runs conversions concurrently across git worktrees using subagents. It ports the behavior under test rather than the original syntax, so coverage carries over instead of being hand-rewritten, and flags gaps for human review rather than guessing.",
          "Designed an AI-driven mocking layer that let the frontend team build against realistic data 6 weeks before backend endpoints were complete, keeping the back-to-school release launch off the critical path.",
        ],
      },
      {
        jobTitle: "Senior Software Engineer",
        jobDateRange: "Feb 2022 - Mar 2024",
        icon: "briefcase",
        gradient: { from: "blue", to: "teal", deg: 90 },
        bulletPoints: [
          "Led batch print performance work that cut job failure rates 59x (1 in 2,000 → 1 in 118,000 across 942K jobs) and raised sustained throughput 27% (36.6 → 46.5 jobs/min at maximum queue load).",
          "Closed a data-exposure path in a new parent-facing report view by scoping API access to the requesting parent's own student and removing out-of-scope calls from the request path.",
          "Managed 4 contractors through a 3-month cleanup of frontend UI library technical debt, clearing the blockers for a React 18 upgrade.",
        ],
      },
    ],
  },
  {
    companyName: "F1V Web Consultants",
    companyLogo: "f1v_logo.jpeg",
    positions: [
      {
        jobTitle: "Senior Software Engineer",
        jobDateRange: "Jan 2021 - Feb 2022",
        icon: "briefcase",
        gradient: { from: "blue", to: "teal", deg: 90 },
        bulletPoints: [
          "F1V Team lead, overseeing and mentoring fellow F1V engineers on agile teams.",
        ],
      },
      {
        jobTitle: "Software Engineer",
        jobDateRange: "June 2017 - Dec 2020",
        icon: "briefcase",
        gradient: { from: "blue", to: "teal", deg: 90 },
        bulletPoints: [
          "Leadership in translating business requirements into technical specs for clients, including feasibility, timeline, and application architecture.",
          "Over 4 years of following the agile scrum process on teams with anywhere from 4 to 20+ members.",
        ],
      },
    ],
  },
];

export const education: EducationEntry[] = [
  {
    title: "Web Development Immersive Program",
    institution: "General Assembly Boston",
    dateRange: "July 2016 - October 2016",
    icon: "school",
    gradient: { from: "violet", to: "purple", deg: 90 },
    description: [
      "Completed a 12-week intensive course with a strong focus on full stack web development and RESTful web services.",
      "Worked individually and as part of a team to build four web applications with project deadlines and specifications.",
    ],
  },
  {
    title: "Bachelor of Science Degree - Music Industry",
    institution: "Northeastern University",
    dateRange: "Sept 2003 - May 2008",
    icon: "school",
    gradient: { from: "violet", to: "purple", deg: 90 },
  },
];

export const interests: InterestEntry[] = [
  {
    title: "Guitarist",
    icon: "music",
    gradient: { from: "pink", to: "red" },
    description: [
      "Performances at 300+ venues, including live events, film scores, and album recordings.",
      "Organized events ranging from transportation logistics to performance venues.",
    ],
  },
];
