import type { EducationEntry, InterestEntry, Position } from "./resume.types";

export const experience: Position[] = [
  {
    jobTitle: "Senior Software Engineer II (Lead Developer)",
    company: "Curriculum Associates, LLC",
    companyLogo: "curriculum_associates_logo.jpeg",
    startDate: "2024-03-01",
    bulletPoints: [
      "Set coding standards and own technical direction for a 5-engineer team split across a 12-hour time zone gap, resolving delivery escalations before they reach the release date.",
      "Owned the reporting feature for the flagship back-to-school 2026 release, coordinating with 3 other teams to keep scope and timeline aligned; drove 534 new account activations and 4,170 unique visitors during the pre-term administrator rollout.",
      "Built an AI-assisted test migration workflow that runs conversions concurrently across git worktrees using subagents. It ports the behavior under test rather than the original syntax, so coverage carries over instead of being hand-rewritten, and flags gaps for human review rather than guessing.",
      "Designed an AI-driven mocking layer that let the frontend team build against realistic data 6 weeks before backend endpoints were complete, keeping the back-to-school release launch off the critical path.",
    ],
  },
  {
    jobTitle: "Senior Software Engineer",
    company: "Curriculum Associates, LLC",
    companyLogo: "curriculum_associates_logo.jpeg",
    startDate: "2022-02-01",
    endDate: "2024-03-01",
    bulletPoints: [
      "Led batch print performance work that cut job failure rates 59x (1 in 2,000 → 1 in 118,000 across 942K jobs) and raised sustained throughput 27% (36.6 → 46.5 jobs/min at maximum queue load).",
      "Closed a data-exposure path in a new parent-facing report view by scoping API access to the requesting parent's own student and removing out-of-scope calls from the request path.",
      "Managed 4 contractors through a 3-month cleanup of frontend UI library technical debt, clearing the blockers for a React 18 upgrade.",
    ],
  },
  {
    jobTitle: "Senior Software Engineer",
    company: "F1V Web Consultants",
    companyLogo: "f1v_logo.jpeg",
    startDate: "2021-01-01",
    endDate: "2022-02-01",
    bulletPoints: [
      "F1V Team lead, overseeing and mentoring fellow F1V engineers on agile teams.",
    ],
  },
  {
    jobTitle: "Software Engineer",
    company: "F1V Web Consultants",
    companyLogo: "f1v_logo.jpeg",
    startDate: "2017-06-01",
    endDate: "2020-12-01",
    bulletPoints: [
      "Leadership in translating business requirements into technical specs for clients, including feasibility, timeline, and application architecture.",
      "Over 4 years of following the agile scrum process on teams with anywhere from 4 to 20+ members.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    institution: "General Assembly Boston",
    institutionLogo: "generalassembly_logo.jpeg",
    degree: "Web Development Immersive Program",
    startDate: "2016-07-01",
    endDate: "2016-10-01",
    bulletPoints: [
      "Completed a 12-week intensive course with a strong focus on full stack web development and RESTful web services.",
      "Worked individually and as part of a team to build four web applications with project deadlines and specifications.",
    ],
  },
  {
    institution: "Northeastern University",
    institutionLogo: "northeastern_university_logo.jpeg",
    degree: "Bachelor of Science Degree - Music Industry",
    startDate: "2003-09-01",
    endDate: "2008-05-01",
    bulletPoints: [
      "Activities and societies: Jazz and modern music ensembles",
      "Business Courses: Business Ethics, Marketing, Financial Accounting, Statistics, Principles of Microeconomics and Macroeconomics, Record Industry, Music Industry I and II, and a diverse array of creative music, writing, math and history related courses.",
    ],
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
