import {
  createTheme,
  MantineProvider,
  Container,
  Box,
  Card,
  Flex,
  DEFAULT_THEME,
  type CSSVariablesResolver,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
  useLocation,
} from "react-router";
import { PageHeader } from "./components/PageHeader/PageHeader";
import "@mantine/core/styles.css";
import "./App.css";
import { SideBar } from "./components/SideBar/SideBar";
import { ContactPage, HomePage, ResumePage, SelectedWorkPage } from "./pages";



/* CSS HEX */
// --hunyadi-yellow: #FFB452;
// --butterscotch: #DE9848;
// --english-violet: #4C3961;
// --tyrian-purple: #6B2944;
// --dark-purple: #2D2238;
// --spring-green: #23FF98;
// --gray: #7B7B7B;
// --blue-crayola: #577FE3;
// --folly: #FD2D67;
// --raisin-black: #1C1523;

const theme = createTheme({
  colors: {
    ...DEFAULT_THEME.colors,    
    dark: [
      "#170F1F", // #170F1F
      "#1C1523", // #1C1523
      "#2D2238", // #2D2238
      "#08060a", // #08060a
      ...DEFAULT_THEME.colors.dark,
    ],
    blue: [
      "#577FE3", // #577FE3
      ...DEFAULT_THEME.colors.blue,
    ],
    gray: [
      "#7B7B7B", // #7B7B7B
      ...DEFAULT_THEME.colors.gray,
    ],
    green: [
      "#23FF98", // #23FF98
      ...DEFAULT_THEME.colors.green,
    ],
    purple: [
      "#2D2238", // #2D2238
      "#6B2944", // #6B2944
      ...DEFAULT_THEME.colors.grape,
    ],
    red: [
      "#FD2D67", // #FD2D67
      ...DEFAULT_THEME.colors.red,
    ],
    violet: [
      "#4C3961", // #4C3961
      ...DEFAULT_THEME.colors.violet,
    ],
    yellow: [
      "#FFB452", // #FFB452
      "#DE9848", // #DE9848
      ...DEFAULT_THEME.colors.yellow,
    ],
  },

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },

  headings: {
    fontFamily: "Roboto, sans-serif",
    sizes: {
      h1: { fontSize: "36px" },
    },
  },
});

// CSS Variables Resolver - creates variables that automatically switch based on color scheme
const cssVariablesResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // Variables that don't change based on color scheme
  },
  light: {
    '--mantine-color-primary-bg': theme.colors.dark[0], // #FFFFFF
    '--mantine-color-primary-text': theme.colors.dark[0], // #1C1523
    '--mantine-color-card-bg': theme.colors.dark[8], // #F5F5F5
    '--mantine-color-border': theme.colors.dark[7], // #DBDBDB
    // Override Mantine's internal dark color variables
    '--mantine-color-dark-4': theme.colors.dark[7], // Override the dark.4 that Mantine uses for borders
  },
  dark: {
    '--mantine-color-body': theme.colors.dark[0],
    '--mantine-color-primary-bg': theme.colors.dark[0], 
    '--mantine-color-primary-text': theme.colors.gray[1],
    '--mantine-color-card-bg': theme.colors.dark[0],
    '--mantine-color-border': theme.colors.dark[3],
    '--paper-border-color': theme.colors.dark[3],
    // Override Mantine's internal dark color variables
    '--mantine-color-dark-4': theme.colors.dark[3],
    '--custom-link-bg-active-0': theme.colors.yellow[0],
    '--custom-link-yellow-1': theme.colors.yellow[1], // Override the dark.4 that Mantine uses for borders
    '--custom-link-text-hover-0': theme.colors.blue[0],
    '--custom-link-text-0': theme.colors.gray[0],
    '--custom-link-text-active-0': theme.colors.dark[1],

    '--custom-card-bg-1': theme.colors.dark[2],
  },
});

function getPageTitle(pathname: string): string {
  switch (pathname) {
    case "/":
      return "Home";
    case "/resume":
      return "Resume";
    case "/selected-work":
      return "Selected Work";
    case "/contact":
      return "Contact";
    default:
      return "Portfolio";
  }
}

function Layout() {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  return (
    <Container size="xl" pt={{ base: "xl", sm: 80 }} pb="xl" px="xl">
      <Flex
        gap="lg"
        align="flex-start"
        direction={{ base: "column", md: "row" }}
      >
        {/* Sidebar - Responsive width */}
        {/* <Box w={{ base: "100%", md: 275 }} style={{ flexShrink: 0 }}>
          <SideBar />
        </Box> */}

        {/* Main content - Flexible width */}
        <Box flex={1} w="100%">
          <Card 
            radius="xs" 
            p="0" 
            pl="lg" 
            withBorder
            style={{
              backgroundColor: 'var(--mantine-color-card-bg)',
              color: 'var(--mantine-color-primary-text)',
              borderWidth: '3px',
            }}
          >
            <PageHeader title={pageTitle} />
            <Outlet />
          </Card>
        </Box>
      </Flex>
    </Container>
  );
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
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

function App() {
  const colorScheme = useColorScheme();

  console.log(theme);

  return (
    <MantineProvider 
      theme={theme} 
      defaultColorScheme={colorScheme}
      cssVariablesResolver={cssVariablesResolver}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
