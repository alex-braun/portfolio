import { Text } from "@mantine/core";
import type { Skill } from "../resume.types";
import classes from "./SkillCards.module.css";

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: Readonly<SkillCardProps>) {
  return (
    <div className={classes.card}>
      <Text size="sm" fw={600} c="var(--custom-h3-color)">
        {skill.name}
      </Text>
      {skill.note && (
        <Text size="xs" c="var(--custom-p-color)" className={classes.note}>
          {skill.note}
        </Text>
      )}
    </div>
  );
}

interface SkillCardsRowProps {
  skills: Skill[];
  caption?: string;
}

export function SkillCardsRow({
  skills,
  caption,
}: Readonly<SkillCardsRowProps>) {
  if (skills.length === 0) {
    return null;
  }

  return (
    <div>
      {caption && (
        <Text
          size="xs"
          fw={500}
          tt="uppercase"
          c="var(--custom-h5-color)"
          className={classes.caption}
        >
          {caption}
        </Text>
      )}
      <div className={classes.row}>
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
