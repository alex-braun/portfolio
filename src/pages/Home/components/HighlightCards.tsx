import { Card, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { motion } from "motion/react";
import classes from "@pages/SelectedWork/SelectedWork.module.css";
import { HighlightIcon } from "./HighlightIcon";
import type { HighlightEntry } from "../home.types";

interface HighlightCardsProps {
  entries: HighlightEntry[];
}

// Cards render in a 2x2 grid on sm+ screens; each offset flies the card in
// from its own quadrant of that grid (top-left, top-right, bottom-left, bottom-right).
const QUADRANT_OFFSETS = [
  { x: -60, y: -60 },
  { x: 60, y: -60 },
  { x: -60, y: 60 },
  { x: 60, y: 60 },
];

export function HighlightCards({ entries }: Readonly<HighlightCardsProps>) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
      {entries.map((entry, index) => {
        const offset = QUADRANT_OFFSETS[index] ?? { x: 0, y: 0 };
        return (
          <motion.div
            key={entry.title}
            initial={{ opacity: 0, x: offset.x, y: offset.y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          >
            <Card className={classes.card} withBorder radius="xs" p="xl">
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
          </motion.div>
        );
      })}
    </SimpleGrid>
  );
}
