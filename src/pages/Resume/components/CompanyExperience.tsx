import { Box, Card, Group, List, Text, Timeline, Title } from "@mantine/core";
import { SupabaseAvatar } from "@components/SupabaseAvatar";
import classes from "@pages/SelectedWork/SelectedWork.module.css";
import { TimelineBullet } from "./TimelineBullet";
import type { Company } from "../resume.types";

interface CompanyExperienceProps {
  company: Company;
}

export function CompanyExperience({
  company,
}: Readonly<CompanyExperienceProps>) {
  return (
    <Card
      className={classes.card}
      withBorder
      radius="xs"
      p="xl"
      style={{ borderColor: "var(--mantine-color-border)" }}
    >
      <Group align="flex-start" gap="md" mb="md">
        <SupabaseAvatar
          size={60}
          radius="md"
          path={company.companyLogo}
          alt={company.companyName}
        />
        <Box style={{ flex: 1 }}>
          <Title order={3} size="h3" c="var(--custom-h2-color)" mb="xs">
            {company.companyName}
          </Title>
        </Box>
      </Group>

      <Timeline bulletSize={24} lineWidth={2}>
        {company.positions.map((position) => (
          <Timeline.Item
            key={position.jobTitle}
            title={position.jobTitle}
            bullet={
              <TimelineBullet icon={position.icon} gradient={position.gradient} />
            }
          >
            <Text size="sm" c="var(--custom-h4-color)" mb="xs">
              {position.jobDateRange}
            </Text>
            <List size="sm" c="var(--custom-p-color)" spacing="xs" mb="xs">
              {position.bulletPoints.map((point) => (
                <List.Item key={point}>{point}</List.Item>
              ))}
            </List>
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
}
