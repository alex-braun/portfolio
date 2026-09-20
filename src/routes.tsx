/* eslint-disable react-refresh/only-export-components -- this is a route
   config module (exports `routes`, a plain array), not a component-boundary
   file; the Layout component it references is only ever used here. */
import type { ReactNode } from "react";
import { Box, Card, Container, Flex } from "@mantine/core";
import { Navigate, Outlet, useLocation, type RouteObject } from "react-router";
import { PageHeader } from "@components/PageHeader/PageHeader";
import { Navbar } from "@components/Navbar/Navbar";
import { PageAside, Profile } from "@components";
import { SkillInventory } from "@pages/Resume/components/SkillInventory";
import { ContactPage, HomePage, ResumePage, SelectedWorkPage } from "@pages";

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

// The Page Aside's content is route-specific (see ADR 0001): Profile on
// About/Contact, the Resume Skill Inventory on Resume, nothing on Selected
// Work.
function getPageAside(pathname: string): ReactNode {
  switch (pathname) {
    case "/":
    case "/contact":
      return <Profile />;
    case "/resume":
      return <SkillInventory />;
    default:
      return null;
  }
}

function Layout() {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);
  const aside = getPageAside(location.pathname);
  return (
    <>
      <Navbar />
      <Container
        size="xl"
        pt={{ base: "lg", sm: "xl" }}
        pb="xl"
        px={{ base: "sm", sm: "xl" }}
      >
        <Flex gap="lg" align="stretch" direction={{ base: "column", md: "row" }}>
          {/* PageAside owns its own responsive width/spacer - see PageAside.tsx */}
          {aside && <PageAside>{aside}</PageAside>}

          {/* Main content - Flexible width */}
          <Box flex={1} w="100%">
            <Card
              p="0"
              pt="md"
              style={{
                backgroundColor: "var(--mantine-color-card-bg)",
              }}
            >
              <PageHeader title={pageTitle} />
              <Box p={{ base: "sm", sm: "xl" }}>
                <Outlet />
              </Box>
            </Card>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

// Route configuration - exported so tests can build a MemoryRouter from the
// same tree instead of createBrowserRouter's real-history version.
export const routes: RouteObject[] = [
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
];
