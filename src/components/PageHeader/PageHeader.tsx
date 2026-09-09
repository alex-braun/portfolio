import { Flex, Title, Box } from "@mantine/core";

interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <Flex w="100%" pb="lg" pr="0" justify="space-between" align="flex-end">
      <Box pl={{ base: "sm", sm: "xl" }}>
        <Title order={1} size="h1" style={{ flexShrink: 0, lineHeight: 1 }}>
          {title}
        </Title>
      </Box>
    </Flex>
  );
}
