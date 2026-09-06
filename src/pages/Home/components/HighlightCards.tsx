import { Card, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import classes from "@pages/SelectedWork/SelectedWork.module.css";
import { HighlightIcon } from "./HighlightIcon";
import type { HighlightEntry } from "../home.types";

interface HighlightCardsProps {
  entries: HighlightEntry[];
}

export function HighlightCards({ entries }: Readonly<HighlightCardsProps>) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
      {entries.map((entry) => (
        <Card key={entry.title} className={classes.card} withBorder radius="xs" p="xl">
          <Group gap="md" align="flex-start" wrap="nowrap">
            <HighlightIcon icon={entry.icon} />
            <Stack gap="xs">
              <Title order={3}>{entry.title}</Title>
              <Text size="sm" c="var(--custom-p-color)">
                {entry.description}
              </Text>
            </Stack>
          </Group>
        </Card>
      ))}
    </SimpleGrid>
  );
}
