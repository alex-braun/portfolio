import { Group, List, Text, Timeline } from "@mantine/core";
import { SupabaseAvatar } from "@components/SupabaseAvatar";
import { ResumeCard } from "./ResumeCard";
import { TimelineBullet } from "./TimelineBullet";
import { formatDateRange } from "../resume.utils";
import type { Position } from "../resume.types";

interface ExperienceTimelineProps {
  positions: Position[];
}

export function ExperienceTimeline({
  positions,
}: Readonly<ExperienceTimelineProps>) {
  return (
    <ResumeCard>
      <Timeline bulletSize={24} lineWidth={2}>
        {positions.map((position) => (
          <Timeline.Item
            key={`${position.company}-${position.jobTitle}-${position.startDate}`}
            title={position.jobTitle}
            bullet={
              <TimelineBullet
                icon="briefcase"
                gradient={{ from: "blue", to: "teal", deg: 90 }}
              />
            }
          >
            <Group gap="xs" align="center" mb={4}>
              <SupabaseAvatar
                size={20}
                radius="sm"
                path={position.companyLogo}
                alt={position.company}
              />
              <Text size="xs" c="var(--custom-h4-color)" fw={500}>
                {position.company}
              </Text>
            </Group>
            <Text size="sm" c="var(--custom-h4-color)" mb="xs">
              {formatDateRange(position)}
            </Text>
            <List size="sm" c="var(--custom-p-color)" spacing="xs" mb="xs">
              {position.bulletPoints.map((point) => (
                <List.Item key={point}>{point}</List.Item>
              ))}
            </List>
          </Timeline.Item>
        ))}
      </Timeline>
    </ResumeCard>
  );
}
