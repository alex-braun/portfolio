import { Badge, Box, Button, Collapse, Group, Stack, Text, Title } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { additionalExperience, coreSkills, countSkills, type SkillGroup } from "@pages/Resume/skillInventory.data";

function SkillGroupList({ groups }: Readonly<{ groups: SkillGroup[] }>) {
  return (
    <>
      {groups.map((group, index) => (
        <Box key={group.label ?? `group-${index}`} mb="xs">
          {group.label && (
            <Text size="xs" fw={600} tt="uppercase" mb={4}>
              {group.label}
            </Text>
          )}
          <Group gap="xs">
            {group.skills.map((skill) => (
              <Badge key={skill} variant="light" size="xs" radius="sm">
                {skill}
              </Badge>
            ))}
          </Group>
        </Box>
      ))}
    </>
  );
}

export function SkillInventory() {
  const isWide = useMediaQuery("(min-width: 992px)");
  const [expanded, { toggle }] = useDisclosure(false);

  const [teaserGroup, ...restCoreGroups] = coreSkills;
  const remainingCount = countSkills(restCoreGroups) + countSkills(additionalExperience);

  const remainder = (
    <>
      <SkillGroupList groups={restCoreGroups} />
      <Text size="xs" fw={600} tt="uppercase" mt="sm" mb="xs">
        Additional Experience
      </Text>
      <SkillGroupList groups={additionalExperience} />
    </>
  );

  return (
    <Stack gap="xs">
      <Title order={2} mb="xs">
        Skills
      </Title>

      <SkillGroupList groups={[teaserGroup]} />

      {isWide ? (
        remainder
      ) : (
        <>
          <Collapse in={expanded}>{remainder}</Collapse>
          <Button variant="subtle" size="xs" px={0} onClick={toggle} aria-expanded={expanded}>
            {expanded ? "Show less" : `Show more Skills (${remainingCount})`}
          </Button>
        </>
      )}
    </Stack>
  );
}
