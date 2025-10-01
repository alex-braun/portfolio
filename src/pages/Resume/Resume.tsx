import { Stack, Title, Text, Divider, Box, Group, Badge } from '@mantine/core';

export function ResumePage() {
  return (
    <Stack gap="lg" w="100%">
      {/* Experience */}
      <Box>        
        {/* F1V Web Consultants */}
        <Box mb="xl">
          <Title order={3} size="h3" c="var(--custom-h2-color)" mb="md">F1V Web Consultants</Title>
          <Text size="sm" c="var(--custom-p-color)" mb="lg">
            Leadership in translating business requirements into technical specs for clients, including feasibility, timeline, and application architecture.
          </Text>
          <Text size="sm" c="var(--custom-p-color)" mb="lg">
            Over 4 years of following the agile scrum process on teams with anywhere from 4 to 20+ members.
          </Text>
          
          {/* Senior Software Engineer Position */}
          <Box mb="lg" pl="md" style={{ borderLeft: '2px solid var(--mantine-color-border)' }}>
            <Group justify="space-between" align="flex-start" mb="xs">
              <Title order={4} size="h4" c="var(--custom-h3-color)">Senior Software Engineer</Title>
              <Text size="sm" c="var(--custom-h4-color)">Jan 2021 - Present</Text>
            </Group>
            <Text size="sm" c="var(--custom-p-color)" mb="xs">
              F1V Team lead, overseeing and mentoring fellow F1V devs on agile teams.
            </Text>
          </Box>

          {/* Software Engineer Position */}
          <Box mb="lg" pl="md" style={{ borderLeft: '2px solid var(--mantine-color-border)' }}>
            <Group justify="space-between" align="flex-start" mb="xs">
              <Title order={4} size="h4" c="var(--custom-h3-color)">Software Engineer</Title>
              <Text size="sm" c="var(--custom-h4-color)">June 2017 - Dec 2020</Text>
            </Group>
            <Text size="sm" c="var(--custom-p-color)" mb="xs">
              Front end development for a leading educator platform with React, Redux and Typescript.
            </Text>
            <Text size="sm" c="var(--custom-p-color)" mb="xs">
              Feature testing with Puppeteer and unit/integration testing with Jest and Enzyme.
            </Text>
          </Box>

          {/* Achievements Section */}
          <Box pl="md" style={{ borderLeft: '2px solid var(--mantine-color-border)' }}>
            <Title order={4} size="h4" c="var(--custom-h3-color)" mb="md">Achievements</Title>
            
            {/* Curriculum Associates */}
            <Box mb="lg">
              <Title order={5} size="h5" c="var(--custom-h4-color)" fw={500} mb="xs">Curriculum Associates</Title>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Lead React component library framework refactor.
              </Text>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Building Storybook component libraries for use in high visibility applications.
              </Text>
              <Box mb="xs">
                <Text size="sm" c="var(--custom-h4-color)" fw={500}>Technologies:</Text>
                <Group gap="xs" mt="xs">
                  {["TypeScript", "React", "Redux", "Jenkins"].map((tech) => (
                    <Badge key={tech} size="sm" variant="light">{tech}</Badge>
                  ))}
                </Group>
              </Box>
            </Box>

            {/* Camino For Good */}
            <Box mb="lg">
              <Title order={5} size="h5" c="var(--custom-h4-color)" fw={500} mb="xs">Camino For Good</Title>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Setup user authentication for Google and Facebook using Passport.
              </Text>
              <Box mb="xs">
                <Text size="sm" c="var(--custom-h4-color)" fw={500}>Technologies:</Text>
                <Group gap="xs" mt="xs">
                  {["TypeScript", "React", "GraphQL", "ExpressJS"].map((tech) => (
                    <Badge key={tech} size="sm" variant="light">{tech}</Badge>
                  ))}
                </Group>
              </Box>
            </Box>

            {/* Unconscious-Bias Training */}
            <Box mb="lg">
              <Title order={5} size="h5" c="var(--custom-h4-color)" fw={500} mb="xs">Unconscious-Bias Training</Title>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Ground up build of PHP full-stack website for corporate bias training.
              </Text>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Facilitated extensive encryption of all data to fulfill client's HIPPA user privacy requirements.
              </Text>
              <Box mb="xs">
                <Text size="sm" c="var(--custom-h4-color)" fw={500}>Technologies:</Text>
                <Group gap="xs" mt="xs">
                  {["Symfony", "API Platform", "MySQL", "Javascript"].map((tech) => (
                    <Badge key={tech} size="sm" variant="light">{tech}</Badge>
                  ))}
                </Group>
              </Box>
            </Box>

            {/* MLPData */}
            <Box mb="lg">
              <Title order={5} size="h5" c="var(--custom-h4-color)" fw={500} mb="xs">MLPData</Title>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Created Javascript data modules along with Redis data store to decrease legacy website latency.
              </Text>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Fixed various bugs in a complex web app that uses a CodeIgnitor PHP frontend and Java backend.
              </Text>
              <Box mb="xs">
                <Text size="sm" c="var(--custom-h4-color)" fw={500}>Technologies:</Text>
                <Group gap="xs" mt="xs">
                  {["CodeIgnitor PHP", "Java", "Quartz", "MySQL", "Javascript/jQuery"].map((tech) => (
                    <Badge key={tech} size="sm" variant="light">{tech}</Badge>
                  ))}
                </Group>
              </Box>
            </Box>

            {/* WordPress Clients */}
            <Box mb="lg">
              <Title order={5} size="h5" c="var(--custom-h4-color)" fw={500} mb="xs">WordPress (various clients)</Title>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Extensive theme and plugin customization to fulfill client needs.
              </Text>
              <Box mb="xs">
                <Text size="sm" c="var(--custom-h4-color)" fw={500}>Technologies:</Text>
                <Group gap="xs" mt="xs">
                  {["PHP", "MySQL", "Javascript/jQuery"].map((tech) => (
                    <Badge key={tech} size="sm" variant="light">{tech}</Badge>
                  ))}
                </Group>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider />

      {/* Education */}
      <Box>
        <Title order={2} size="h2" c="var(--custom-h2-color)" mb="md">Education</Title>
        
        <Box mb="lg">
          <Group justify="space-between" align="flex-start" mb="xs">
            <Box>
              <Title order={3} size="h4" c="var(--custom-h3-color)">Bachelor of Science Degree - Music Industry</Title>
              <Text size="sm" c="var(--custom-h4-color)" fw={500}>Northeastern University</Text>
            </Box>
            <Text size="sm" c="var(--custom-h4-color)">May 2008</Text>
          </Group>
        </Box>

        <Box mb="lg">
          <Group justify="space-between" align="flex-start" mb="xs">
            <Box>
              <Title order={3} size="h4" c="var(--custom-h3-color)">Web Development Immersive Program</Title>
              <Text size="sm" c="var(--custom-h4-color)" fw={500}>General Assembly Boston</Text>
            </Box>
            <Text size="sm" c="var(--custom-h4-color)">July 2016 - October 2016</Text>
          </Group>
          <Text size="sm" c="var(--custom-p-color)" mb="xs">
            Completed a 12-week intensive course with a strong focus on full stack web development and RESTful web services.
          </Text>
          <Text size="sm" c="var(--custom-p-color)" mb="xs">
            Worked individually and as part of a team to build four web applications with project deadlines and specifications.
          </Text>
        </Box>
      </Box>

      <Divider />

      {/* Interests */}
      <Box>
        <Title order={2} size="h2" c="var(--custom-h2-color)" mb="md">Interests</Title>
        <Box mb="lg">
          <Title order={3} size="h4" c="var(--custom-h3-color)" mb="xs">Guitarist</Title>
          <Text size="sm" c="var(--custom-p-color)" mb="xs">
            Performances at 300+ venues, including live events, film scores, and album recordings.
          </Text>
          <Text size="sm" c="var(--custom-p-color)" mb="xs">
            Organized events ranging from transportation logistics to performance venues.
          </Text>
        </Box>
      </Box>
    </Stack>
  );
}
