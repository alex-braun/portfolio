import type { ReactNode } from "react";
import { Card, Box } from "@mantine/core";
import classes from "@components/PageAside/PageAside.module.css";

interface PageAsideProps {
  children: ReactNode;
}

export function PageAside({ children }: Readonly<PageAsideProps>) {
  return (
    <Box w={{ base: "100%", md: 325 }} style={{ flexShrink: 0 }}>
      <Card h="fit-content" bg="var(--custom-card-bg-1)" className={classes.aside} p="md">
        {children}
      </Card>
    </Box>
  );
}
