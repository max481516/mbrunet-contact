import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

/**
 * Controlled contact dialog containing a Netlify form.
 * - Opens from Nav "message me" button and ContactMe link.
 * - Posts to Netlify without page reload and shows success/error inline.
 */
export default function ContactDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = React.useState<string | null>(null);

  const formRef = React.useRef<HTMLFormElement | null>(null);

  function encode(data: Record<string, FormDataEntryValue>) {
    return new URLSearchParams(
      Object.entries(data).map(([k, v]) => [k, String(v)])
    ).toString();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Include Netlify form name and honeypot
    formData.set("form-name", "contact");

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(Object.fromEntries(formData as any)),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const text = await res.text();
        setError(text || "Submission failed");
        setStatus("error");
      }
    } catch (err: any) {
      setError(err?.message || "Network error");
      setStatus("error");
    }
  }

  // Reset state when dialog closes
  React.useEffect(() => {
    if (!open) {
      setStatus("idle");
      setError(null);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Message me</DialogTitle>
          <DialogDescription>
            Fill the form below and I’ll get back to you.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="rounded-md bg-green-50 text-green-900 border border-green-200 p-3 text-sm">
            Thanks! Your message has been sent.
          </div>
        ) : null}
        {status === "error" && error ? (
          <div className="rounded-md bg-red-50 text-red-900 border border-red-200 p-3 text-sm">
            {error}
          </div>
        ) : null}

        <form
          ref={formRef}
          name="contact"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Required by Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="bot-field" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required placeholder="Your name" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required rows={5} placeholder="How can I help you?" />
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="submit"
              variant="gradient"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
