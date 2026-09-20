import { Anchor, Box, Button, Collapse, Stack, Text, Title } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { SupabaseImage } from "@components/SupabaseImage";
import classes from "@components/Profile/Profile.module.css";

function ContactLinks() {
  return (
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
    </Stack>
  );
}

export function Profile() {
  const isWide = useMediaQuery("(min-width: 992px)");
  const [contactsOpen, { toggle }] = useDisclosure(false);

  return (
    <>
      {/* Profile Image */}
      <Box className={isWide ? classes.imageSection : classes.imageSectionNarrow} mb="md">
        <SupabaseImage
          path="alex_headshot.jpg"
          alt="Profile Avatar"
          fallbackSrc="https://i.imgur.com/ZL52Q2D.png"
          fit="scale-down"
          radius={12}
        />
      </Box>

      {/* Name and Title */}
      <Stack gap="xs" mb="md">
        <Title order={2}>Alex Braun</Title>
        <Text>Senior Software Engineer II</Text>
      </Stack>

      {/* Contact Info - always visible at desktop widths; hidden behind a
          disclosure on narrow viewports so it doesn't push page content
          further down a stacked layout. */}
      {isWide ? (
        <ContactLinks />
      ) : (
        <>
          <Collapse in={contactsOpen}>
            <ContactLinks />
          </Collapse>
          <Button variant="subtle" size="xs" px={0} onClick={toggle} aria-expanded={contactsOpen}>
            {contactsOpen ? "Hide Contacts" : "Show Contacts"}
          </Button>
        </>
      )}
    </>
  );
}
