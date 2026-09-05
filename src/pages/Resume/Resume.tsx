import { Box, Divider, Stack, Title } from "@mantine/core";
import { CompanyExperience } from "./components/CompanyExperience";
import { EducationTimeline } from "./components/EducationTimeline";
import { InterestsTimeline } from "./components/InterestsTimeline";
import { experience, education, interests } from "./resume.data";

export function ResumePage() {
  return (
    <Stack gap="lg" w="100%">
      <Box>
        <Title order={2} size="h2" c="var(--custom-h2-color)" mb="md">
          Experience
        </Title>
        <Stack gap="lg">
          {experience.map((company) => (
            <CompanyExperience key={company.companyName} company={company} />
          ))}
        </Stack>
      </Box>

      <Divider />

      <Box>
        <Title order={2} size="h2" c="var(--custom-h2-color)" mb="md">
          Education
        </Title>
        <EducationTimeline entries={education} />
      </Box>

      <Divider />

      <Box>
        <Title order={2} size="h2" c="var(--custom-h2-color)" mb="md">
          Interests
        </Title>
        <InterestsTimeline entries={interests} />
      </Box>
    </Stack>
  );
}
