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

// --night: #0C0C0C; //
// --citrine: #E5CF0E; //
// --battleship-gray: #858585; //
// --white: #FDFDFD; //
// --eerie-black: #1A1A1A; //
// --silver: #C8C8C8;
// --silver-2: #BBBBBC; //
// --davys-gray: #535353; //

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
  breakpoints: {
    xs: "36em", // 576px
    sm: "48em", // 768px
    md: "68.4375em", // 1078px (changed from 62em/992px)
    lg: "75em", // 1200px
    xl: "88em", // 1408px
  },
  colors: {
    ...DEFAULT_THEME.colors,
    white: [
      "#F2F3F4", // #F2F3F4
      "#E0E0E0", // #E0E0E0
      "#FDFDFD", // #FDFDFD // largest white text color.
      "#B0B0B0", // #B0B0B0
      "#989898", // #989898
      "#808080", // #808080
      "#686868", // #686868
      "#505050", // #505050
      "#383838", // #383838
      "#202020", // #202020
      "#080808", // #080808
    ],
    dark: [
      "#0C0C0C", // #0C0C0C dark background black theme.
      "#202124", // #202124 dark background black theme.
      "#1A1A1A", // #1A1A1A // background dark.
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
      "#535353", // #535353 darkest gray text color.
      "#858585", // #858585 second darkest gray text color.
      "#BBBBBC", // #BBBBBC second lightest gray text color.
      "#C8C8C8", // #C8C8C8 lightest gray text color.
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
      "#867C92", // #867C92
      ...DEFAULT_THEME.colors.violet,
    ],
    yellow: [
      "#FFB452", // #FFB452
      "#DE9848", // #DE9848
      "#E5CF0E", // #E5CF0E
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
      h1: { fontSize: "30px" },
    },
  },
});

// CSS Variables Resolver - creates variables that automatically switch based on color scheme
const cssVariablesResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    // Variables that don't change based on color scheme
  },
  light: {
    "--mantine-color-primary-bg": theme.colors.dark[0],
    "--mantine-color-primary-text": theme.colors.white[3], 
    "--mantine-color-card-bg": theme.colors.dark[1], 
    "--mantine-color-border": theme.colors.dark[7], 
    // Override Mantine's internal dark color variables
    "--mantine-color-dark-4": theme.colors.dark[7], // Override the dark.4 that Mantine uses for borders
    // Header colors for light mode
    "--custom-h1-color": theme.colors.dark[9], // Darkest for h1
    "--custom-h2-color": theme.colors.dark[8], // Slightly lighter for h2
    "--custom-h3-color": theme.colors.dark[7], // Medium for h3
    "--custom-h4-color": theme.colors.dark[6], // Lighter for h4
    "--custom-h5-color": theme.colors.dark[5], // Even lighter for h5
    "--custom-h6-color": theme.colors.dark[4], // Lightest for h6
  },
  dark: {
    "--mantine-color-body": theme.colors.dark[1],
    "--mantine-color-primary-bg": theme.colors.dark[0],
    "--mantine-color-primary-text": theme.colors.gray[2],
    "--mantine-color-card-bg": theme.colors.dark[1],
    "--mantine-color-border": theme.colors.gray[1],
    "--paper-border-color": theme.colors.gray[1],
    "--mantine-color-gray-3": theme.colors.gray[2],
    // Override Mantine's internal dark color variables
    "--mantine-color-dark-4": theme.colors.dark[3],
    "--custom-link-bg-active-0": theme.colors.yellow[0],
    "--custom-link-yellow-1": theme.colors.yellow[1], // Override the dark.4 that Mantine uses for borders
    "--custom-link-text-hover-0": theme.colors.blue[0],
    "--custom-link-text-0": theme.colors.gray[0],
    "--custom-link-text-active-0": theme.colors.dark[1],

    "--custom-card-bg-1": theme.colors.dark[2],
    "--custom-violet-1": theme.colors.violet[1],

    "--custom-header-1-color": theme.colors.white[2],
    "--custom-card-title-1-color": theme.colors.gray[4],
    // Header colors for dark mode
    "--custom-h1-color": theme.colors.white[2], // Brightest for h1
    "--custom-h2-color": theme.colors.gray[4], // Slightly dimmer for h2
    "--custom-h3-color": theme.colors.gray[3], // Medium for h3
    "--custom-h4-color": theme.colors.white[2], // Lighter for h4
    "--custom-h5-color": theme.colors.gray[2], // Even lighter for h5
    "--custom-h6-color": theme.colors.gray[1], // Lightest for h6
    "--custom-p-color": theme.colors.gray[2], // Lightest for p
  },
});

function getPageTitle(pathname: string): string {
  switch (pathname) {
    case "/":
      return "About";
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
      <Flex gap="lg" align="stretch" direction={{ base: "column", md: "row" }}>
        {/* Sidebar - Responsive width */}
        <Box w={{ base: "100%", md: 250 }} style={{ flexShrink: 0 }}>
          <SideBar />
        </Box>

        {/* Main content - Flexible width */}
        <Box flex={1} w="100%">
          <Card
            p="0"
            withBorder
            radius="lg"
            style={{
              backgroundColor: "var(--mantine-color-card-bg)",
              borderColor: "var(--mantine-color-border)",
              //   color: 'var(--mantine-color-primary-text)',
              //   borderWidth: '3px',
            }}
          >
            <PageHeader title={pageTitle} />
            <Box p="xl">
              <Outlet />
            </Box>
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
