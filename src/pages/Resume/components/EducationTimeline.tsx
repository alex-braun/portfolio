import { Group, Text, Timeline } from "@mantine/core";
import { TimelineBullet } from "./TimelineBullet";
import type { EducationEntry } from "../resume.types";

interface EducationTimelineProps {
  entries: EducationEntry[];
}

export function EducationTimeline({
  entries,
}: Readonly<EducationTimelineProps>) {
  return (
    <Timeline bulletSize={24} lineWidth={2}>
      {entries.map((entry) => (
        <Timeline.Item
          key={entry.title}
          title={entry.title}
          bullet={<TimelineBullet icon={entry.icon} gradient={entry.gradient} />}
        >
          <Group justify="space-between" align="flex-start" mb="xs">
            <Text size="sm" c="var(--custom-h4-color)" fw={500}>
              {entry.institution}
            </Text>
            <Text size="sm" c="var(--custom-h4-color)">
              {entry.dateRange}
            </Text>
          </Group>
          {entry.description?.map((paragraph) => (
            <Text key={paragraph} size="sm" c="var(--custom-p-color)" mb="xs">
              {paragraph}
            </Text>
          ))}
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
