import { Flex, Title, Box, Container } from '@mantine/core';
import { Navbar } from '../Navbar/Navbar';

interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <Container w="100%" pb="lg" pr="0">
      <Box>
        <Navbar />
      </Box>
      <Title order={1} size="h1" pt="xl" style={{ flexShrink: 0 }}>
        {title}
      </Title>
    </Container>
  );
}
