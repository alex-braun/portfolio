import { Card, Text, Title, Stack, Anchor, Box, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import classes from "@components/SideBar/SideBar.module.css";
import { SupabaseImage } from "@components/SupabaseImage";

export function SideBar() {
  const theme = useMantineTheme();
  const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);
    
  return (
    <Card 
      h="fit-content" 
      // radius="lg" 
      withBorder
      bg="var(--custom-card-bg-1)"
      className={`${classes.sidebar} ${isDesktop ? classes.desktop : ''}`}
      p="md"
      style={{
        borderColor: "var(--mantine-color-border)",
      }}
    >
      {/* Profile Image */}
      <Box className={classes.imageSection} mb="md">
        <SupabaseImage
          path="TayTay.jpg"
          alt="Profile Avatar"
          fallbackSrc="https://i.imgur.com/ZL52Q2D.png"
          h={200}
          fit="scale-down"
        />
      </Box>

      {/* Name and Title */}
      <Stack gap="xs" mb="md">
        <Title order={2} size="h3" c="var(--custom-h1-color)">Alex Braun</Title>
        <Text size="sm" c="var(--custom-h3-color)" fw={500}>Senior Software Engineer II</Text>
      </Stack>

      {/* Contact Info */}
      <Stack gap="xs" mb="md">
        <Anchor href="https://braunline.com" target="_blank" size="sm" c="var(--custom-link-text-0)">
          braunline.com
        </Anchor>
        <Anchor href="mailto:braunacb@gmail.com" size="sm" c="var(--custom-link-text-0)">
          braunacb@gmail.com
        </Anchor>
        <Anchor href="https://github.com/alex-braun" target="_blank" size="sm" c="var(--custom-link-text-0)">
          github.com/alex-braun
        </Anchor>
        <Text size="sm" c="var(--custom-h3-color)">(781) 910-7798</Text>
      </Stack>
    </Card>
  );
}
