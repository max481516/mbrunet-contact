import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const formRef = React.useRef<HTMLFormElement | null>(null);
  // Focus target to avoid auto-focusing an input on mobile (which opens the keyboard)
  const topFocusRef = React.useRef<HTMLDivElement | null>(null);

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
        setError(text || t("contactDialog.errorFallback"));
        setStatus("error");
      }
    } catch (err: any) {
      setError(err?.message || t("contactDialog.errorNetwork"));
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
      <DialogContent
        className="sm:max-w-sm"
        // Prevent Radix from auto-focusing the first focusable element 
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          // Move focus to a non-input element to avoid opening the mobile keyboard
          topFocusRef.current?.focus({ preventScroll: true });
        }}
      >
        {/* Programmatic focus target (not in tab order) */}
        <div ref={topFocusRef} tabIndex={-1} />
        <DialogHeader className="text-left">
          <h3 className="text-2xl ru:text-xl">{t("contactDialog.title")}</h3>
          <DialogDescription>
            {t("contactDialog.description")}
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="rounded-md bg-green-50 text-green-900 border border-green-200 p-3 text-sm">
            {t("contactDialog.success")}
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
          
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="bot-field" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid gap-2">
            <Label htmlFor="name">{t("contactDialog.name")}</Label>
            <Input id="name" name="name" required placeholder={t("contactDialog.namePlaceholder")} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">{t("contactDialog.email")}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder={t("contactDialog.emailPlaceholder")}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">{t("contactDialog.message")}</Label>
            <Textarea id="message" name="message" required rows={5} placeholder={t("contactDialog.messagePlaceholder")} />
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="submit"
              variant="gradient"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? t("contactDialog.sending") : t("contactDialog.submit")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
