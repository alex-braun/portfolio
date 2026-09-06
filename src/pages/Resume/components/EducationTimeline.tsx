import { Group, List, Text, Timeline } from "@mantine/core";
import { motion } from "motion/react";
import { SupabaseAvatar } from "@components/SupabaseAvatar";
import { ResumeCard } from "./ResumeCard";
import { TimelineBullet } from "./TimelineBullet";
import { formatDateRange } from "../resume.utils";
import type { EducationEntry } from "../resume.types";
import {
  timelineBulletVariants,
  timelineFadeInVariants,
  timelineLineDelayStyle,
} from "./timelineMotion";
import classes from "./Timeline.module.css";

interface EducationTimelineProps {
  entries: EducationEntry[];
}

export function EducationTimeline({
  entries,
}: Readonly<EducationTimelineProps>) {
  return (
    <ResumeCard>
      <motion.div
        initial={{ "--line-scale": 0 }}
        whileInView={{ "--line-scale": 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0 }}
      >
        <Timeline bulletSize={24} lineWidth={2}>
          {entries.map((entry, index) => (
            <Timeline.Item
              key={entry.institution}
              className={classes.timelineItem}
              style={timelineLineDelayStyle(index)}
              title={
                <motion.span
                  custom={index}
                  variants={timelineFadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  {entry.degree}
                </motion.span>
              }
              bullet={
                <motion.div
                  custom={index}
                  variants={timelineBulletVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  <TimelineBullet
                    icon="school"
                    gradient={{ from: "violet", to: "purple", deg: 90 }}
                  />
                </motion.div>
              }
            >
              <motion.div
                custom={index}
                variants={timelineFadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Group gap="xs" align="center" mb={4}>
                  <SupabaseAvatar
                    size={20}
                    radius="sm"
                    path={entry.institutionLogo}
                    alt={entry.institution}
                  />
                  <Text size="xs" c="var(--custom-h4-color)" fw={500}>
                    {entry.institution}
                  </Text>
                </Group>
                <Text size="sm" c="var(--custom-h4-color)" mb="xs">
                  {formatDateRange(entry)}
                </Text>
                <List size="sm" c="var(--custom-p-color)" spacing="xs" mb="xs">
                  {entry.bulletPoints?.map((point) => (
                    <List.Item key={point}>{point}</List.Item>
                  ))}
                </List>
              </motion.div>
            </Timeline.Item>
          ))}
        </Timeline>
      </motion.div>
    </ResumeCard>
  );
}
