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

export interface Position extends DateRange {
  jobTitle: string;
  company: string;
  companyLogo: string;
  bulletPoints: string[];
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
