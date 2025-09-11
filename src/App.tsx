import {
  createTheme,
  MantineProvider,
  Container,
  Box,
  Card,
  Flex,
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

const theme = createTheme({
  colors: {
    // Add your color
    deepBlue: [
      "#eef3ff",
      "#dce4f5",
      "#b9c7e2",
      "#94a8d0",
      "#748dc1",
      "#5f7cb8",
      "#5474b4",
      "#44639f",
      "#39588f",
      "#2d4b81",
    ],
    // or replace default theme color
    blue: [
      "#eef3ff",
      "#dee2f2",
      "#bdc2de",
      "#98a0ca",
      "#7a84ba",
      "#6672b0",
      "#5c68ac",
      "#4c5897",
      "#424e88",
      "#364379",
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

  return (
    <MantineProvider theme={theme} defaultColorScheme={colorScheme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
