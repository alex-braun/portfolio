import { Stack, Title } from '@mantine/core';

export function HomePage() {
  return (
    <Stack align="center" gap="md">
      <p>This is the home page of my portfolio website.</p>
      
      {/* Test different header levels with different colors */}
      <Title order={1}>H1 - Darkest/Brightest</Title>
      <Title order={2}>H2 - Slightly Lighter</Title>
      <Title order={3}>H3 - Medium</Title>
      <Title order={4}>H4 - Lighter</Title>
      <Title order={5}>H5 - Even Lighter</Title>
      <Title order={6}>H6 - Lightest</Title>
    </Stack>
  );
}
