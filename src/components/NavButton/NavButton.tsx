import { Button, type ButtonProps } from "@mantine/core";
import { Link, type LinkProps } from "react-router";

type NavButtonProps = ButtonProps &
  Omit<LinkProps, "className" | "style"> &
  React.ComponentPropsWithoutRef<"a">;

/** Button styled with Mantine that navigates via react-router, with page-fade view transitions on by default. */
export function NavButton({ viewTransition = true, ...props }: NavButtonProps) {
  return <Button component={Link} viewTransition={viewTransition} {...props} />;
}
