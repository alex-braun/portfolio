export type IconName = "briefcase" | "code" | "school" | "music";

export interface TimelineGradient {
  from: string;
  to: string;
  deg?: number;
}

export interface DateRange {
  /** ISO date (YYYY-MM-DD) */
  startDate: string;
  /** ISO date (YYYY-MM-DD); omitted means "Present" */
  endDate?: string;
}

export interface Skill {
  name: string;
  /** Optional one-line note, used sparingly where it adds real signal. */
  note?: string;
}

export interface Position extends DateRange {
  jobTitle: string;
  company: string;
  companyLogo: string;
  bulletPoints: string[];
  skills?: Skill[];
  /** Overrides the default row label, e.g. "+ New in this role" for a promoted role at the same company. */
  skillsCaption?: string;
}

export interface EducationEntry extends DateRange {
  institution: string;
  institutionLogo: string;
  degree: string;
  bulletPoints?: string[];
}

export interface InterestEntry {
  title: string;
  description: string[];
  icon: IconName;
  gradient: TimelineGradient;
}
