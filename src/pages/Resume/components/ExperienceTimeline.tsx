import { Group, List, Text, Timeline } from "@mantine/core";
import { motion } from "motion/react";
import { SupabaseAvatar } from "@components/SupabaseAvatar";
import { ResumeCard } from "./ResumeCard";
import { TimelineBullet } from "./TimelineBullet";
import { formatDateRange } from "../resume.utils";
import type { Position } from "../resume.types";
import {
  motionLayerStyle,
  timelineBulletVariants,
  timelineFadeInVariants,
  timelineLineDelayStyle,
} from "./timelineMotion";
import classes from "./Timeline.module.css";

interface ExperienceTimelineProps {
  positions: Position[];
}

export function ExperienceTimeline({
  positions,
}: Readonly<ExperienceTimelineProps>) {
  return (
    <ResumeCard>
      <motion.div
        initial={{ "--line-scale": 0 }}
        whileInView={{ "--line-scale": 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0 }}
      >
        <Timeline bulletSize={24} lineWidth={2}>
          {positions.map((position, index) => (
            <Timeline.Item
              key={`${position.company}-${position.jobTitle}-${position.startDate}`}
              className={classes.timelineItem}
              style={timelineLineDelayStyle(index)}
              title={
                <motion.span
                  custom={index}
                  style={motionLayerStyle}
                  variants={timelineFadeInVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  {position.jobTitle}
                </motion.span>
              }
              bullet={
                <motion.div
                  custom={index}
                  style={motionLayerStyle}
                  variants={timelineBulletVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                >
                  <TimelineBullet
                    icon="briefcase"
                    gradient={{ from: "blue", to: "teal", deg: 90 }}
                  />
                </motion.div>
              }
            >
              <motion.div
                custom={index}
                style={motionLayerStyle}
                variants={timelineFadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
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
              </motion.div>
            </Timeline.Item>
          ))}
        </Timeline>
      </motion.div>
    </ResumeCard>
  );
}
