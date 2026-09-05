import { Card } from "@mantine/core";
import type { PropsWithChildren } from "react";
import classes from "@pages/SelectedWork/SelectedWork.module.css";

export function ResumeCard({ children }: Readonly<PropsWithChildren>) {
  return (
    <Card
      className={classes.card}
      withBorder
      radius="xs"
      p="xl"
      style={{ borderColor: "var(--mantine-color-border)" }}
    >
      {children}
    </Card>
  );
}
