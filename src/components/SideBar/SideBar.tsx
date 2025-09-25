import { Card } from "@mantine/core";
import classes from "./SideBar.module.css";
import { SupabaseImage } from "../SupabaseImage";

export function SideBar() {
  return (
    <Card h="fit-content" radius="xs" withBorder bg="var(--custom-card-bg-1)">
      <Card.Section className={classes.imageSection}>
        <SupabaseImage
          path="TayTay.jpg"
          alt="Profile Avatar"
          fallbackSrc="https://i.imgur.com/ZL52Q2D.png"
          h={200}
          fit="scale-down"
        />
      </Card.Section>
    </Card>
  );
}
