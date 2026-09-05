export type IconName = "briefcase" | "code" | "school" | "music";

export interface TimelineGradient {
  from: string;
  to: string;
  deg?: number;
}

export interface Position {
  jobTitle: string;
  jobDateRange: string;
  bulletPoints: string[];
  icon: IconName;
  gradient: TimelineGradient;
}

export interface Company {
  companyName: string;
  companyLogo: string;
  positions: Position[];
}

export interface EducationEntry {
  title: string;
  institution: string;
  dateRange: string;
  description?: string[];
  icon: IconName;
  gradient: TimelineGradient;
}

export interface InterestEntry {
  title: string;
  description: string[];
  icon: IconName;
  gradient: TimelineGradient;
}
