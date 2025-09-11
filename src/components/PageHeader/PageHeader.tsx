import { Flex, Title, Box } from '@mantine/core';
import { Navbar } from '../Navbar/Navbar';

interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <Flex justify="space-between" align="center" w="100%">
      <Title order={1} size="h1" style={{ flexShrink: 0 }}>
        {title}
      </Title>
      <Box style={{ marginLeft: 'auto' }}>
        <Navbar />
      </Box>
    </Flex>
  );
}
