export interface SkillGroup {
  /** Omitted for an ungrouped run of skills within a section. */
  label?: string;
  skills: string[];
}

/**
 * The skill the visitor sees first, in full, before expanding anything - see
 * ADR 0002 (Skill Inventory is manually curated, not derived from Position
 * Skills).
 */
export const coreSkills: SkillGroup[] = [
  { label: "Languages", skills: ["JavaScript", "TypeScript", "CSS", "Sass"] },
  {
    label: "Frontend",
    skills: ["React", "Vite", "Next.js", "React Testing Library", "Playwright", "Storybook"],
  },
  {
    label: "State Management",
    skills: ["Redux", "react-redux", "redux-saga", "reselect", "React state/useReducer"],
  },
  { label: "Backend (JS)", skills: ["Node.js", "ExpressJS"] },
  { label: "Databases", skills: ["MySQL", "Supabase"] },
  {
    label: "Cloud, Deployment & CI/CD",
    skills: [
      "Docker",
      "Vercel",
      "Netlify",
      "AWS App Runner",
      "AWS ECR",
      "AWS CloudWatch",
      "AWS S3",
      "AWS Bedrock",
      "Jenkins",
    ],
  },
  { label: "AI / LLM Tooling", skills: ["Claude", "OpenAI", "LangChain", "CrewAI"] },
];

export const additionalExperience: SkillGroup[] = [
  { skills: ["Zustand", "GraphQL", "Python", "Rust (WASM)"] },
  {
    label: "Java / Spring Boot",
    skills: ["Spring Boot 3.5.x", "Spring Security", "WebFlux", "Hibernate", "JPA", "Thymeleaf", "Spring REST Docs"],
  },
  { label: "PHP", skills: ["WordPress", "Symfony"] },
];

export function countSkills(groups: SkillGroup[]): number {
  return groups.reduce((total, group) => total + group.skills.length, 0);
}
