import { createTheme, MantineProvider, Container, Group, Stack, ActionIcon, useMantineColorScheme, NavLink } from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'
import { createBrowserRouter, RouterProvider, Outlet, Link, useLocation } from 'react-router'
import { IconSun, IconMoon, IconHome, IconUser, IconMail, IconFileText, IconBriefcase } from '@tabler/icons-react'
import '@mantine/core/styles.css'
import './App.css'

const theme = createTheme({
  colors: {
    // Add your color
    deepBlue: [
      '#eef3ff',
      '#dce4f5',
      '#b9c7e2',
      '#94a8d0',
      '#748dc1',
      '#5f7cb8',
      '#5474b4',
      '#44639f',
      '#39588f',
      '#2d4b81',
    ],
    // or replace default theme color
    blue: [
      '#eef3ff',
      '#dee2f2',
      '#bdc2de',
      '#98a0ca',
      '#7a84ba',
      '#6672b0',
      '#5c68ac',
      '#4c5897',
      '#424e88',
      '#364379',
    ],
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: '36px' },
    },
  },
});

// Layout component with theme toggle and navigation
function Layout() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const location = useLocation()

  return (
    <Container size="md" py="xl">
      <Stack align="center" gap="xl">
        <Group justify="space-between" w="100%">
          <Group gap="xs">
            <NavLink
              component={Link}
              to="/"
              label="Home"
              leftSection={<IconHome size={16} />}
              active={location.pathname === "/"}
            />
            <NavLink
              component={Link}
              to="/about"
              label="About"
              leftSection={<IconUser size={16} />}
              active={location.pathname === "/about"}
            />
            <NavLink
              component={Link}
              to="/resume"
              label="Resume"
              leftSection={<IconFileText size={16} />}
              active={location.pathname === "/resume"}
            />
            <NavLink
              component={Link}
              to="/selected-work"
              label="Selected Work"
              leftSection={<IconBriefcase size={16} />}
              active={location.pathname === "/selected-work"}
            />
            <NavLink
              component={Link}
              to="/contact"
              label="Contact"
              leftSection={<IconMail size={16} />}
              active={location.pathname === "/contact"}
            />
          </Group>
          <ActionIcon
            onClick={() => toggleColorScheme()}
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
          >
            {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
          </ActionIcon>
        </Group>
        <Outlet />
      </Stack>
    </Container>
  )
}

// Home page component
function HomePage() {
  return (
    <Stack align="center" gap="md">
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page of my portfolio website.</p>
    </Stack>
  )
}

// About page component
function AboutPage() {
  return (
    <Stack align="center" gap="md">
      <h1>About Me</h1>
      <p>Learn more about my background and experience.</p>
    </Stack>
  )
}

// Resume page component
function ResumePage() {
  return (
    <Stack align="center" gap="md">
      <h1>Resume</h1>
      <p>Download my resume or view my professional experience and skills.</p>
      <Stack gap="sm" w="100%" maw={600}>
        <h2>Experience</h2>
        <div>
          <h3>Software Developer</h3>
          <p><strong>Company Name</strong> | 2022 - Present</p>
          <p>Developed and maintained web applications using modern technologies.</p>
        </div>
        <div>
          <h3>Junior Developer</h3>
          <p><strong>Previous Company</strong> | 2020 - 2022</p>
          <p>Assisted in developing and testing software solutions.</p>
        </div>
        
        <h2>Skills</h2>
        <div>
          <p><strong>Programming Languages:</strong> JavaScript, TypeScript, Python, Java</p>
          <p><strong>Frameworks:</strong> React, Node.js, Express</p>
          <p><strong>Tools:</strong> Git, Docker, AWS, Vite</p>
        </div>
        
        <h2>Education</h2>
        <div>
          <h3>Bachelor of Computer Science</h3>
          <p><strong>University Name</strong> | 2016 - 2020</p>
        </div>
      </Stack>
    </Stack>
  )
}

// Portfolio page component
function SelectedWorkPage() {
  return (
    <Stack align="center" gap="md">
      <h1>Portfolio</h1>
      <p>Check out some of my recent projects and work.</p>
      <Stack gap="lg" w="100%" maw={800}>
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
          <h3>E-Commerce Website</h3>
          <p>Full-stack e-commerce platform built with React, Node.js, and MongoDB.</p>
          <p><strong>Technologies:</strong> React, Node.js, Express, MongoDB, Stripe API</p>
          <p><strong>Features:</strong> User authentication, product catalog, shopping cart, payment processing</p>
        </div>
        
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
          <h3>Task Management App</h3>
          <p>Collaborative task management application with real-time updates.</p>
          <p><strong>Technologies:</strong> React, TypeScript, Socket.io, PostgreSQL</p>
          <p><strong>Features:</strong> Real-time collaboration, drag-and-drop, team management</p>
        </div>
        
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
          <h3>Weather Dashboard</h3>
          <p>Interactive weather dashboard with data visualization and forecasts.</p>
          <p><strong>Technologies:</strong> React, D3.js, OpenWeather API, Chart.js</p>
          <p><strong>Features:</strong> Interactive charts, location-based weather, historical data</p>
        </div>
      </Stack>
    </Stack>
  )
}

// Contact page component
function ContactPage() {
  return (
    <Stack align="center" gap="md">
      <h1>Contact</h1>
      <p>Get in touch with me through various channels.</p>
    </Stack>
  )
}

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "resume",
        element: <ResumePage />,
      },
      {
        path: "selected-work",
        element: <SelectedWorkPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
])

function App() {
  const colorScheme = useColorScheme();

  return (
    <MantineProvider theme={theme} defaultColorScheme={colorScheme}>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
