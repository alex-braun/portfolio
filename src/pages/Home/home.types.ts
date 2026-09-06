export type HighlightIconName = "code" | "stack" | "sparkles" | "usersGroup";

export interface HighlightEntry {
  title: string;
  description: string;
  icon: HighlightIconName;
}
