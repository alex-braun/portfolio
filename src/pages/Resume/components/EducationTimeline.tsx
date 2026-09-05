import { Text, Timeline } from "@mantine/core";
import { ResumeCard } from "./ResumeCard";
import { TimelineBullet } from "./TimelineBullet";
import type { EducationEntry } from "../resume.types";

interface EducationTimelineProps {
  entries: EducationEntry[];
}

export function EducationTimeline({
  entries,
}: Readonly<EducationTimelineProps>) {
  return (
    <ResumeCard>
      <Timeline bulletSize={24} lineWidth={2}>
        {entries.map((entry) => (
          <Timeline.Item
            key={entry.title}
            title={entry.institution}
            bullet={
              <TimelineBullet icon={entry.icon} gradient={entry.gradient} />
            }
          >
            <Text size="sm" c="var(--custom-h4-color)" fw={500}>
              {entry.title}
            </Text>
            <Text size="sm" c="var(--custom-h4-color)" mb="xs">
              {entry.dateRange}
            </Text>
            {entry.description?.map((paragraph) => (
              <Text
                key={paragraph}
                size="sm"
                c="var(--custom-p-color)"
                mb="xs"
              >
                {paragraph}
              </Text>
            ))}
          </Timeline.Item>
        ))}
      </Timeline>
    </ResumeCard>
  );
}
