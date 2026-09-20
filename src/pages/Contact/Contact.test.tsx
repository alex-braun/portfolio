import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MantineProvider } from "@mantine/core";
import { ContactPage } from "@pages/Contact/Contact";

function renderContactPage() {
  return render(
    <MantineProvider>
      <ContactPage />
    </MantineProvider>,
  );
}

async function fillRequiredFields(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Name", { exact: false }), "Jane Recruiter");
  await user.type(screen.getByLabelText("Email", { exact: false }), "jane@example.com");
  await user.type(screen.getByLabelText("Subject", { exact: false }), "Let's talk");
  await user.type(screen.getByLabelText("Message", { exact: false }), "Are you open to opportunities?");
}

// Honeypot rejection itself happens inside Netlify's own Forms
// infrastructure (declared via the hidden static form in index.html, see
// ADR 0004) - there's no app code left to exercise for that case, so it
// isn't covered here.
describe("ContactPage submission", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("submits the form fields to Netlify Forms and shows a success message", async () => {
    vi.mocked(fetch).mockResolvedValueOnce(new Response("", { status: 200 }));
    const user = userEvent.setup();
    renderContactPage();

    await fillRequiredFields(user);
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(fetch).toHaveBeenCalledWith(
      "/",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }),
    );

    const [, options] = vi.mocked(fetch).mock.calls[0];
    const submittedBody = new URLSearchParams(options?.body as string);
    expect(submittedBody.get("form-name")).toBe("contact");
    expect(submittedBody.get("name")).toBe("Jane Recruiter");
    expect(submittedBody.get("email")).toBe("jane@example.com");
    expect(submittedBody.get("subject")).toBe("Let's talk");
    expect(submittedBody.get("message")).toBe("Are you open to opportunities?");

    expect(await screen.findByText(/message sent/i)).toBeInTheDocument();
  });

  it("shows an error message when the request fails", async () => {
    vi.mocked(fetch).mockResolvedValueOnce(new Response("", { status: 500 }));
    const user = userEvent.setup();
    renderContactPage();

    await fillRequiredFields(user);
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
  });
});
