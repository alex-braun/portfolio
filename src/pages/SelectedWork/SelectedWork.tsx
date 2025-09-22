import { Stack, Card, Text, Title, Group, Badge } from '@mantine/core';
import classes from './SelectedWork.module.css';

export function SelectedWorkPage() {
  return (
    <Stack align="center" gap="md" p="md">
      <Text size="lg" c="dimmed">Check out some of my recent projects and work.</Text>
      <Stack gap="lg" w="100%" maw={800}>
        <Card className={classes.card} withBorder radius="xs" p="xl">
          <Title order={3} mb="sm">E-Commerce Website</Title>
          <Text mb="md">Full-stack e-commerce platform built with React, Node.js, and MongoDB.</Text>
          <Group mb="xs">
            <Text fw={500} size="sm">Technologies:</Text>
            <Badge color="blue" variant="light">React</Badge>
            <Badge color="green" variant="light">Node.js</Badge>
            <Badge color="yellow" variant="light">Express</Badge>
            <Badge color="cyan" variant="light">MongoDB</Badge>
            <Badge color="purple" variant="light">Stripe API</Badge>
          </Group>
          <Text size="sm" c="dimmed">
            <strong>Features:</strong> User authentication, product catalog, shopping cart, payment processing
          </Text>
        </Card>
        
        <Card className={classes.card} withBorder radius="xs" p="xl">
          <Title order={3} mb="sm">Task Management App</Title>
          <Text mb="md">Collaborative task management application with real-time updates.</Text>
          <Group mb="xs">
            <Text fw={500} size="sm">Technologies:</Text>
            <Badge color="blue" variant="light">React</Badge>
            <Badge color="indigo" variant="light">TypeScript</Badge>
            <Badge color="orange" variant="light">Socket.io</Badge>
            <Badge color="teal" variant="light">PostgreSQL</Badge>
          </Group>
          <Text size="sm" c="dimmed">
            <strong>Features:</strong> Real-time collaboration, drag-and-drop, team management
          </Text>
        </Card>
        
        <Card className={classes.card} withBorder radius="xs" p="xl">
          <Title order={3} mb="sm">Weather Dashboard</Title>
          <Text mb="md">Interactive weather dashboard with data visualization and forecasts.</Text>
          <Group mb="xs">
            <Text fw={500} size="sm">Technologies:</Text>
            <Badge color="blue" variant="light">React</Badge>
            <Badge color="pink" variant="light">D3.js</Badge>
            <Badge color="lime" variant="light">OpenWeather API</Badge>
            <Badge color="grape" variant="light">Chart.js</Badge>
          </Group>
          <Text size="sm" c="dimmed">
            <strong>Features:</strong> Interactive charts, location-based weather, historical data
          </Text>
        </Card>
      </Stack>
    </Stack>
  );
}
