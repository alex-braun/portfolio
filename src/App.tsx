import {
  createTheme,
  MantineProvider,
  Container,
  Box,
  Card,
  Flex,
  DEFAULT_THEME,
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
// --hunyadi-yellow: #FFB452ff;
// --butterscotch: #DE9848ff;
// --english-violet: #4C3961ff;
// --tyrian-purple: #6B2944ff;
// --dark-purple: #2D2238ff;
// --spring-green: #23FF98ff;
// --gray: #7B7B7Bff;
// --blue-crayola: #577FE3ff;
// --folly: #FD2D67ff;
// --raisin-black: #1C1523ff;

const theme = createTheme({
  colors: {
    ...DEFAULT_THEME.colors,    
    dark: [
      "#1C1523", // #1C1523ff
      ...DEFAULT_THEME.colors.dark,
    ],
    blue: [
      "#577FE3", // #577FE3ff
      ...DEFAULT_THEME.colors.blue,
    ],
    gray: [
      "#7B7B7B", // #7B7B7Bff
      ...DEFAULT_THEME.colors.gray,
    ],
    green: [
      "#23FF98", // #23FF98ff
      ...DEFAULT_THEME.colors.green,
    ],
    purple: [
      "#2D2238", // #2D2238ff
      ...DEFAULT_THEME.colors.grape,
    ],
    red: [
      "#FD2D67", // #FD2D67ff
      ...DEFAULT_THEME.colors.red,
    ],
    violet: [
      "#4C3961", // #4C3961ff
      ...DEFAULT_THEME.colors.violet,
    ],
    yellow: [
      "#FFB452", // #FFB452ff
      "#DE9848", // #DE9848ff
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
        <Box w={{ base: "100%", md: 275 }} style={{ flexShrink: 0 }}>
          <SideBar />
        </Box>

        {/* Main content - Flexible width */}
        <Box flex={1} w="100%">
          <Card radius="lg" p="0" pl="lg" withBorder>
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
    <MantineProvider theme={theme} defaultColorScheme={colorScheme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
