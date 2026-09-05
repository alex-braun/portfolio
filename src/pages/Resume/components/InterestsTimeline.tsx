import { Text, Timeline } from "@mantine/core";
import { TimelineBullet } from "./TimelineBullet";
import type { InterestEntry } from "../resume.types";

interface InterestsTimelineProps {
  entries: InterestEntry[];
}

export function InterestsTimeline({
  entries,
}: Readonly<InterestsTimelineProps>) {
  return (
    <Timeline bulletSize={24} lineWidth={2}>
      {entries.map((entry) => (
        <Timeline.Item
          key={entry.title}
          title={entry.title}
          bullet={<TimelineBullet icon={entry.icon} gradient={entry.gradient} />}
        >
          {entry.description.map((paragraph) => (
            <Text key={paragraph} size="sm" c="var(--custom-p-color)" mb="xs">
              {paragraph}
            </Text>
          ))}
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
