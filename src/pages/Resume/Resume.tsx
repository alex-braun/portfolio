import {
  Stack,
  Title,
  Text,
  Divider,
  Box,
  Group,
  Badge,
  Timeline,
  ThemeIcon,
  Avatar,
  Card,
} from "@mantine/core";
import {
  IconBriefcase,
  IconCode,
  IconSchool,
  IconMusic,
} from "@tabler/icons-react";
import classes from "@pages/SelectedWork/SelectedWork.module.css";

export function ResumePage() {
  return (
    <Stack gap="lg" w="100%">
      {/* Experience */}
      <Box>
        <Title order={2} size="h2" c="var(--custom-h2-color)" mb="md">
          Experience
        </Title>

        {/* F1V Web Consultants Company Header */}
        <Card className={classes.card} withBorder radius="xs" p="xl" style={{
        borderColor: "var(--mantine-color-border)",
      }}>
          <Group align="flex-start" gap="md">
            <Avatar
              size={60}
              radius="md"
              src="https://via.placeholder.com/120x120/4dabf7/ffffff?text=F1V"
              alt="F1V Web Consultants"
            />
            <Box style={{ flex: 1 }}>
              <Title order={3} size="h3" c="var(--custom-h2-color)" mb="xs">
                F1V Web Consultants
              </Title>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Leadership in translating business requirements into technical
                specs for clients, including feasibility, timeline, and
                application architecture.
              </Text>
              <Text size="sm" c="var(--custom-p-color)">
                Over 4 years of following the agile scrum process on teams with
                anywhere from 4 to 20+ members.
              </Text>
            </Box>
          </Group>

          <Timeline bulletSize={24} lineWidth={2}>
            {/* Senior Software Engineer Position */}
            <Timeline.Item
              title="Senior Software Engineer"
              bullet={
                <ThemeIcon
                  size={22}
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan" }}
                  radius="xl"
                >
                  <IconBriefcase size={13} />
                </ThemeIcon>
              }
            >
              <Group justify="space-between" align="flex-start" mb="xs">
                <Text size="sm" c="var(--custom-h4-color)">
                  Jan 2021 - Feb 2022
                </Text>
              </Group>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                F1V Team lead, overseeing and mentoring fellow F1V devs on agile
                teams.
              </Text>
            </Timeline.Item>

            {/* Software Engineer Position */}
            <Timeline.Item
              title="Software Engineer"
              bullet={
                <ThemeIcon
                  size={22}
                  variant="gradient"
                  gradient={{ from: "green", to: "teal" }}
                  radius="xl"
                >
                  <IconCode size={13} />
                </ThemeIcon>
              }
            >
              <Group justify="space-between" align="flex-start" mb="xs">
                <Text size="sm" c="var(--custom-h4-color)">
                  June 2017 - Dec 2020
                </Text>
              </Group>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Front end development for a leading educator platform with
                React, Redux and Typescript.
              </Text>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Feature testing with Puppeteer and unit/integration testing with
                Jest and Enzyme.
              </Text>
            </Timeline.Item>
          </Timeline>

          {/* F1V Web Consultants Achievements */}
          <Box mb="xl" mt="lg">
            <Title order={3} size="h3" c="var(--custom-h2-color)" mb="md">
              F1V Web Consultants - Achievements
            </Title>

            {/* Curriculum Associates */}
            <Box mb="lg">
              <Title
                order={5}
                size="h5"
                c="var(--custom-h4-color)"
                fw={500}
                mb="xs"
              >
                Curriculum Associates
              </Title>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Lead React component library framework refactor.
              </Text>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Building Storybook component libraries for use in high
                visibility applications.
              </Text>
              <Box mb="xs">
                <Text size="sm" c="var(--custom-h4-color)" fw={500}>
                  Technologies:
                </Text>
                <Group gap="xs" mt="xs">
                  {["TypeScript", "React", "Redux", "Jenkins"].map((tech) => (
                    <Badge key={tech} size="sm" variant="light">
                      {tech}
                    </Badge>
                  ))}
                </Group>
              </Box>
            </Box>

            {/* Camino For Good */}
            <Box mb="lg">
              <Title
                order={5}
                size="h5"
                c="var(--custom-h4-color)"
                fw={500}
                mb="xs"
              >
                Camino For Good
              </Title>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Setup user authentication for Google and Facebook using
                Passport.
              </Text>
              <Box mb="xs">
                <Text size="sm" c="var(--custom-h4-color)" fw={500}>
                  Technologies:
                </Text>
                <Group gap="xs" mt="xs">
                  {["TypeScript", "React", "GraphQL", "ExpressJS"].map(
                    (tech) => (
                      <Badge key={tech} size="sm" variant="light">
                        {tech}
                      </Badge>
                    )
                  )}
                </Group>
              </Box>
            </Box>

            {/* Unconscious-Bias Training */}
            <Box mb="lg">
              <Title
                order={5}
                size="h5"
                c="var(--custom-h4-color)"
                fw={500}
                mb="xs"
              >
                Unconscious-Bias Training
              </Title>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Ground up build of PHP full-stack website for corporate bias
                training.
              </Text>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Facilitated extensive encryption of all data to fulfill client's
                HIPPA user privacy requirements.
              </Text>
              <Box mb="xs">
                <Text size="sm" c="var(--custom-h4-color)" fw={500}>
                  Technologies:
                </Text>
                <Group gap="xs" mt="xs">
                  {["Symfony", "API Platform", "MySQL", "Javascript"].map(
                    (tech) => (
                      <Badge key={tech} size="sm" variant="light">
                        {tech}
                      </Badge>
                    )
                  )}
                </Group>
              </Box>
            </Box>

            {/* MLPData */}
            <Box mb="lg">
              <Title
                order={5}
                size="h5"
                c="var(--custom-h4-color)"
                fw={500}
                mb="xs"
              >
                MLPData
              </Title>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Created Javascript data modules along with Redis data store to
                decrease legacy website latency.
              </Text>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Fixed various bugs in a complex web app that uses a CodeIgnitor
                PHP frontend and Java backend.
              </Text>
              <Box mb="xs">
                <Text size="sm" c="var(--custom-h4-color)" fw={500}>
                  Technologies:
                </Text>
                <Group gap="xs" mt="xs">
                  {[
                    "CodeIgnitor PHP",
                    "Java",
                    "Quartz",
                    "MySQL",
                    "Javascript/jQuery",
                  ].map((tech) => (
                    <Badge key={tech} size="sm" variant="light">
                      {tech}
                    </Badge>
                  ))}
                </Group>
              </Box>
            </Box>

            {/* WordPress Clients */}
            <Box mb="lg">
              <Title
                order={5}
                size="h5"
                c="var(--custom-h4-color)"
                fw={500}
                mb="xs"
              >
                WordPress (various clients)
              </Title>
              <Text size="sm" c="var(--custom-p-color)" mb="xs">
                Extensive theme and plugin customization to fulfill client
                needs.
              </Text>
              <Box mb="xs">
                <Text size="sm" c="var(--custom-h4-color)" fw={500}>
                  Technologies:
                </Text>
                <Group gap="xs" mt="xs">
                  {["PHP", "MySQL", "Javascript/jQuery"].map((tech) => (
                    <Badge key={tech} size="sm" variant="light">
                      {tech}
                    </Badge>
                  ))}
                </Group>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>

      <Divider />

      {/* Education */}
      <Box>
        <Title order={2} size="h2" c="var(--custom-h2-color)" mb="md">
          Education
        </Title>

        <Timeline bulletSize={24} lineWidth={2}>
          <Timeline.Item
            title="Bachelor of Science Degree - Music Industry"
            bullet={
              <ThemeIcon
                size={22}
                variant="gradient"
                gradient={{ from: "violet", to: "purple" }}
                radius="xl"
              >
                <IconSchool size={13} />
              </ThemeIcon>
            }
          >
            <Group justify="space-between" align="flex-start" mb="xs">
              <Text size="sm" c="var(--custom-h4-color)" fw={500}>
                Northeastern University
              </Text>
              <Text size="sm" c="var(--custom-h4-color)">
                May 2008
              </Text>
            </Group>
          </Timeline.Item>

          <Timeline.Item
            title="Web Development Immersive Program"
            bullet={
              <ThemeIcon
                size={22}
                variant="gradient"
                gradient={{ from: "lime", to: "green" }}
                radius="xl"
              >
                <IconCode size={13} />
              </ThemeIcon>
            }
          >
            <Group justify="space-between" align="flex-start" mb="xs">
              <Text size="sm" c="var(--custom-h4-color)" fw={500}>
                General Assembly Boston
              </Text>
              <Text size="sm" c="var(--custom-h4-color)">
                July 2016 - October 2016
              </Text>
            </Group>
            <Text size="sm" c="var(--custom-p-color)" mb="xs">
              Completed a 12-week intensive course with a strong focus on full
              stack web development and RESTful web services.
            </Text>
            <Text size="sm" c="var(--custom-p-color)" mb="xs">
              Worked individually and as part of a team to build four web
              applications with project deadlines and specifications.
            </Text>
          </Timeline.Item>
        </Timeline>
      </Box>

      <Divider />

      {/* Interests */}
      <Box>
        <Title order={2} size="h2" c="var(--custom-h2-color)" mb="md">
          Interests
        </Title>
        <Timeline bulletSize={24} lineWidth={2}>
          <Timeline.Item
            title="Guitarist"
            bullet={
              <ThemeIcon
                size={22}
                variant="gradient"
                gradient={{ from: "pink", to: "red" }}
                radius="xl"
              >
                <IconMusic size={13} />
              </ThemeIcon>
            }
          >
            <Text size="sm" c="var(--custom-p-color)" mb="xs">
              Performances at 300+ venues, including live events, film scores,
              and album recordings.
            </Text>
            <Text size="sm" c="var(--custom-p-color)" mb="xs">
              Organized events ranging from transportation logistics to
              performance venues.
            </Text>
          </Timeline.Item>
        </Timeline>
      </Box>
    </Stack>
  );
}
