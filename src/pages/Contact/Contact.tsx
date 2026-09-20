import { useState, type FormEvent } from "react";
import { Alert, Box, Button, Group, Stack, Text, TextInput, Textarea } from "@mantine/core";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

// iOS Safari auto-zooms the page on focus for any form field whose computed
// font-size is under 16px. Mantine's default input size ("sm") renders at
// 14px, so every field needs this bumped explicitly.
const preventIOSZoomStyles = { input: { fontSize: "var(--mantine-font-size-md)" } };

// Netlify Forms only registers a form it can see in the built static HTML
// (see the hidden duplicate in index.html), and only accepts submissions
// that include the matching form-name field, url-encoded like a native
// HTML form post - see ADR 0004.
function encodeForNetlifyForms(formData: FormData): string {
  return new URLSearchParams(formData as unknown as Record<string, string>).toString();
}

export function ContactPage() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("form-name", "contact");

    setStatus("submitting");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForNetlifyForms(formData),
      });

      if (!response.ok) {
        throw new Error("Contact form submission failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Stack gap="md">
      <Text size="lg" c="dimmed">
        Have a question or want to work together? Send a message below.
      </Text>

      <Box component="form" onSubmit={handleSubmit} maw={480}>
        <Stack gap="sm">
          <TextInput name="name" label="Name" required styles={preventIOSZoomStyles} />
          <TextInput name="email" type="email" label="Email" required styles={preventIOSZoomStyles} />
          <TextInput name="subject" label="Subject" required styles={preventIOSZoomStyles} />
          <Textarea name="message" label="Message" minRows={5} required styles={preventIOSZoomStyles} />

          {/* Honeypot field - hidden from sighted and screen-reader users alike. */}
          <TextInput
            name="company"
            label="Company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }}
          />

          <Group justify="flex-end">
            <Button type="submit" loading={status === "submitting"}>
              Send message
            </Button>
          </Group>

          {status === "success" && (
            <Alert color="green" title="Message sent">
              Thanks for reaching out — I&apos;ll get back to you soon.
            </Alert>
          )}
          {status === "error" && (
            <Alert color="red" title="Something went wrong">
              Your message couldn&apos;t be sent. Please try again, or reach me directly using the contact details
              on the left.
            </Alert>
          )}
        </Stack>
      </Box>
    </Stack>
  );
}
