import { ThemeIcon } from "@mantine/core";
import {
  IconBriefcase,
  IconCode,
  IconSchool,
  IconMusic,
} from "@tabler/icons-react";
import type { IconName, TimelineGradient } from "../resume.types";

const ICONS_BY_NAME: Record<IconName, typeof IconBriefcase> = {
  briefcase: IconBriefcase,
  code: IconCode,
  school: IconSchool,
  music: IconMusic,
};

interface TimelineBulletProps {
  icon: IconName;
  gradient: TimelineGradient;
}

export function TimelineBullet({
  icon,
  gradient,
}: Readonly<TimelineBulletProps>) {
  const Icon = ICONS_BY_NAME[icon];

  return (
    <ThemeIcon size={22} variant="gradient" gradient={gradient} radius="xl">
      <Icon size={13} />
    </ThemeIcon>
  );
}
