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
import { PageHeader } from "@components/PageHeader/PageHeader";
import "@mantine/core/styles.css";
import "@/App.css";
import { SideBar } from "@components";
import { ContactPage, HomePage, ResumePage, SelectedWorkPage } from "@pages";

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
    "--mantine-color-card-bg": theme.white,
    "--mantine-color-border": theme.colors.white[5], // was dark[7] (#C9C9C9, ~1.7:1) - same index-overflow bug as the headings below; #808080 = 3.95:1 vs white card
    "--mantine-color-text": theme.black, // Mantine's own default already resolves to #000 here - set explicitly so both branches are intentional (see dark branch)
    "--custom-card-bg-1": theme.white,
    // Override Mantine's internal dark color variables
    "--mantine-color-dark-4": theme.colors.white[5], // Override the dark.4 that Mantine uses for borders
    // Header colors for light mode.
    // NOTE: these previously read theme.colors.dark[4..9]. `colors.dark` is
    // only 7 entries long in this theme (indices 0-6), so dark[7]/[8]/[9] were
    // silently falling through to the ...DEFAULT_THEME.colors.dark values
    // spread in afterward (#C9C9C9/#b8b8b8/#828282 - a near-white scale meant
    // for dark-mode UI, not light-mode text). That inverted the hierarchy:
    // h1-h3 rendered as faint, low-contrast gray (h2/h3 were ~2:1 and ~1.7:1,
    // both far below the 3:1 WCAG minimum for large bold text) while h4-h6
    // rendered near-black. Fixed to use `white[]`, which is a real dark-to-
    // light grayscale, with values chosen so h4-h6 (regular-size bold text)
    // clear the 4.5:1 AA threshold and h1-h3 (large bold text, >=18.66px)
    // clear 3:1 with comfortable margin.
    "--custom-h1-color": theme.colors.white[10], // #080808 vs white card = 20.0:1
    "--custom-h2-color": theme.colors.white[9], // #202020 vs white card = 16.3:1
    "--custom-h3-color": theme.colors.white[8], // #383838 vs white card = 11.7:1
    "--custom-h4-color": theme.colors.white[7], // #505050 vs white card = 8.1:1
    "--custom-h5-color": theme.colors.white[6], // #686868 vs white card = 5.6:1
    "--custom-h6-color": "#747474", // vs white card = 4.7:1 (no array step lands in the 4.5:1+ gap between white[5]=3.95:1 and white[6])
    "--custom-p-color": theme.colors.white[6], // was unset in light mode (App.css `p{}` rule fell back to inherited color); #686868 = 5.6:1
    "--custom-link-text-0": theme.colors.white[6], // grey base instead of a "native" hyperlink blue - #686868 = 5.6:1 vs white nav/card bg
    "--custom-link-text-hover-0": theme.black, // darker/near-black on hover - 20:1
    "--custom-link-text-focus-0": theme.black, // same treatment on keyboard focus as hover - 20:1
    "--custom-link-bg-active-0": theme.black, // active-nav text color; darker like hover/focus rather than a separate accent hue - 20:1
  },
  dark: {
    "--mantine-color-body": theme.colors.dark[1],
    "--mantine-color-primary-bg": theme.colors.dark[0],
    "--mantine-color-primary-text": theme.colors.gray[2],
    "--mantine-color-card-bg": theme.colors.dark[1],
    "--mantine-color-border": theme.colors.gray[1],
    // Mantine defaults --mantine-color-text to var(--mantine-color-dark-0),
    // assuming dark.0 is the *lightest* shade of the dark scale (its own
    // default dark palette is ordered light-to-dark). Our custom `dark`
    // array is ordered the opposite way - dark[0] (#0C0C0C) is our darkest
    // background shade, not a text color - so anything using the Mantine
    // default (Timeline.Item's title, Card, Chip, Menu, Input, Pagination,
    // even <body> itself) was rendering near-black text on a dark
    // background. Override explicitly instead of relying on the default.
    "--mantine-color-text": theme.colors.white[2], // #FDFDFD, 15.8:1+ vs card/sidebar bg
    "--paper-border-color": theme.colors.gray[1],
    "--mantine-color-gray-3": theme.colors.gray[2],
    // Override Mantine's internal dark color variables
    "--mantine-color-dark-4": theme.colors.dark[3],
    "--custom-link-bg-active-0": theme.colors.white[2], // active-nav text color; lighter/white like hover/focus rather than a separate accent hue - #FDFDFD, 15.8:1+ vs sidebar/header bg
    "--custom-link-yellow-1": theme.colors.yellow[1], // Override the dark.4 that Mantine uses for borders
    "--custom-link-text-hover-0": theme.colors.blue[0], // 4.60:1 vs sidebar/header bg - fine as-is
    "--custom-link-text-focus-0": theme.colors.white[2], // lighter than the base grey on keyboard focus - #FDFDFD, 15.8:1+ vs sidebar/header bg
    "--custom-link-text-0": "#949494", // was gray[0] #7B7B7B (3.80:1 vs card, 4.11:1 vs sidebar) - failed the 4.5:1 AA text minimum; 5.31:1 / 5.74:1
    "--custom-link-text-active-0": theme.colors.dark[1],

    "--custom-card-bg-1": theme.colors.dark[2],
    "--custom-violet-1": theme.colors.violet[1],

    "--custom-header-1-color": theme.colors.white[2],
    "--custom-card-title-1-color": theme.colors.gray[4],
    // Header colors for dark mode.
    // h4-h6 and p sat below 4.5:1 against the content card bg (#202124) -
    // h4 was even an exact duplicate of h1's color, erasing the level-4
    // step in the hierarchy entirely. Rebalanced h4-h6 as a genuine
    // descending gradient, all clearing 4.5:1 with margin.
    "--custom-h1-color": theme.colors.white[2], // Brightest for h1 - 15.8:1 vs card
    "--custom-h2-color": theme.colors.gray[4], // Slightly dimmer for h2 - 9.6:1 vs card
    "--custom-h3-color": theme.colors.gray[3], // Medium for h3 - 8.4:1 vs card
    "--custom-h4-color": "#A0A0A0", // was a duplicate of h1 (#FDFDFD) - 6.2:1 vs card
    "--custom-h5-color": "#909090", // was gray[2] #858585 (4.36:1, failed AA) - 5.0:1 vs card
    "--custom-h6-color": "#8C8C8C", // was gray[1] #535353 (2.09:1, failed badly) - 4.8:1 vs card
    "--custom-p-color": theme.colors.white[4], // was gray[2] #858585 (4.36:1, failed AA) - #989898 = 5.6:1 vs card
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
    <Container size="xl" pt={{ base: "lg", sm: 70 }} pb="xl" px="xl">
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
            // radius="lg"
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
