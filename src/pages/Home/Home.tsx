import { Stack, Text } from '@mantine/core';
import { HighlightCards } from './components/HighlightCards';
import { highlights } from './home.data';

export function HomePage() {
  return (
    <Stack gap="xl">
      <Stack gap="md">
        <Text>
          I&apos;m a senior software engineer who lives at the intersection of
          frontend craft and full-stack architecture — React and TypeScript day
          to day, with the backend, database, and cloud experience to design a
          system end to end rather than just the screen you see. AI is part of
          how I build now — I use it throughout my development process to move
          faster and think through problems more thoroughly. I like taking
          ambiguous problems, designing the right shape for them, and getting
          the details right on both ends.
        </Text>
        <Text>
          If you&apos;re looking for someone who can own a feature from
          database to pixel and builds with the best tools available to get
          there faster, let&apos;s talk.
        </Text>
      </Stack>
      <HighlightCards entries={highlights} />
    </Stack>
  );
}
