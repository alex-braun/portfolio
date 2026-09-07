import { ThemeIcon } from "@mantine/core";
import {
  IconCode,
  IconStack2,
  IconSparkles,
  IconUsersGroup,
} from "@tabler/icons-react";
import type { HighlightIconName } from "../home.types";

const ICONS_BY_NAME: Record<HighlightIconName, typeof IconCode> = {
  code: IconCode,
  stack: IconStack2,
  sparkles: IconSparkles,
  usersGroup: IconUsersGroup,
};

interface HighlightIconProps {
  icon: HighlightIconName;
}

export function HighlightIcon({ icon }: Readonly<HighlightIconProps>) {
  const Icon = ICONS_BY_NAME[icon];

  return (
    <ThemeIcon size={40} variant="light" radius="md" style={{ flexShrink: 0 }}>
      <Icon size={22} />
    </ThemeIcon>
  );
}
