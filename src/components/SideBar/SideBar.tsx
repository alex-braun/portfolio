import { Card, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./SideBar.module.css";
import { SupabaseImage } from "../SupabaseImage";

export function SideBar() {
  const theme = useMantineTheme();
  const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
  
  return (
    <Card 
      h="fit-content" 
      radius="xs" 
      withBorder 
      bg="var(--custom-card-bg-1)"
      className={`${classes.sidebar} ${isDesktop ? classes.desktop : ''}`}
    >
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
