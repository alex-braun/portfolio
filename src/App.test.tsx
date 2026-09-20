import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MantineProvider } from "@mantine/core";
import { createMemoryRouter, RouterProvider } from "react-router";
import { routes } from "@/routes";
import { mockMatchMedia } from "@/test/mockMatchMedia";

const WIDE_QUERY = "(min-width: 992px)";

function renderRoute(initialPath: string) {
  const router = createMemoryRouter(routes, { initialEntries: [initialPath] });
  return render(
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>,
  );
}

// The Profile's name renders as a heading ("Alex Braun"); the Navbar brand
// also reads "Alex Braun" but as plain text, not a heading - scoping to the
// heading role distinguishes "Profile is showing" from "Navbar is always showing".
function profileHeading() {
  return screen.queryByRole("heading", { name: "Alex Braun" });
}

describe("Page Aside content by route", () => {
  it("shows the Profile with contact links visible on About at desktop width", () => {
    mockMatchMedia([WIDE_QUERY]);
    renderRoute("/");

    expect(profileHeading()).toBeInTheDocument();
    expect(screen.getByText("braunacb@gmail.com")).toBeVisible();
    expect(screen.queryByRole("button", { name: /show contacts/i })).not.toBeInTheDocument();
  });

  it("hides contact links behind Show Contacts on About at narrow width, revealing them on click", async () => {
    mockMatchMedia([]);
    renderRoute("/");

    expect(screen.getByText("braunacb@gmail.com")).not.toBeVisible();

    await userEvent.click(screen.getByRole("button", { name: /show contacts/i }));

    await waitFor(() => expect(screen.getByText("braunacb@gmail.com")).toBeVisible());
  });

  it("shows the same Profile on Contact as on About", () => {
    mockMatchMedia([WIDE_QUERY]);
    renderRoute("/contact");

    expect(profileHeading()).toBeInTheDocument();
    expect(screen.getByText("braunacb@gmail.com")).toBeVisible();
  });

  it("shows the Contact form fields", () => {
    mockMatchMedia([WIDE_QUERY]);
    renderRoute("/contact");

    expect(screen.getByLabelText("Name", { exact: false })).toBeInTheDocument();
    expect(screen.getByLabelText("Email", { exact: false })).toBeInTheDocument();
    expect(screen.getByLabelText("Subject", { exact: false })).toBeInTheDocument();
    expect(screen.getByLabelText("Message", { exact: false })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("shows the Skill Inventory instead of the Profile on Resume", () => {
    mockMatchMedia([WIDE_QUERY]);
    renderRoute("/resume");

    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
    expect(profileHeading()).not.toBeInTheDocument();
  });

  it("shows only the Languages teaser plus a Show more Skills control on Resume at narrow width", () => {
    mockMatchMedia([]);
    renderRoute("/resume");

    expect(screen.getByText("Languages")).toBeVisible();
    expect(screen.getByText("Frontend")).not.toBeVisible();
    expect(screen.getByText("Additional Experience")).not.toBeVisible();
    expect(screen.getByRole("button", { name: /show more skills/i })).toBeInTheDocument();
  });

  it("reveals the rest of the Skill Inventory when Show more Skills is clicked", async () => {
    mockMatchMedia([]);
    renderRoute("/resume");

    await userEvent.click(screen.getByRole("button", { name: /show more skills/i }));

    await waitFor(() => expect(screen.getByText("Frontend")).toBeVisible());
    expect(screen.getByText("Additional Experience")).toBeVisible();
  });

  it("shows the full Skill Inventory with no expand control at desktop width", () => {
    mockMatchMedia([WIDE_QUERY]);
    renderRoute("/resume");

    expect(screen.getByText("Frontend")).toBeVisible();
    expect(screen.getByText("Additional Experience")).toBeVisible();
    expect(screen.queryByRole("button", { name: /show more skills/i })).not.toBeInTheDocument();
  });

  it("renders no Page Aside on Selected Work", () => {
    mockMatchMedia([WIDE_QUERY]);
    renderRoute("/selected-work");

    expect(profileHeading()).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Skills" })).not.toBeInTheDocument();
  });
});
