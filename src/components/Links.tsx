import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaTelegramPlane, FaLinkedin, FaWeixin, FaGithub } from "react-icons/fa";
import { toast } from "sonner";

export default function Links() {
  const whatsappUrl = "https://wa.me/971509475535";
  const linkedInUrl = "https://www.linkedin.com/in/maximilien-brunet-97540511b/";
  const githubUrl = "https://github.com/max481516";
  const telegramPhone = "+971509475535";
  const telegramDeepLink = "tg://resolve?phone=971509475535";
  const wechatId = "wxid_kjqhjcwm9fvz22";

  function openTelegram() {
    // Try to open Telegram deep link; fall back to copying phone
    try {
      window.open(telegramDeepLink, "_blank");
      // If popups are blocked or deep link fails, offer clipboard fallback shortly after
      setTimeout(async () => {
        try {
          await navigator.clipboard?.writeText(telegramPhone);
          toast.success("Telegram phone copied", { description: telegramPhone });
        } catch {
          toast("Telegram phone", { description: telegramPhone });
        }
      }, 700);
    } catch {
      toast("Telegram phone", { description: telegramPhone });
    }
  }

  async function copyWeChat() {
    try {
      await navigator.clipboard?.writeText(wechatId);
      toast.success("WeChat ID copied", { description: wechatId });
    } catch {
      toast("WeChat ID", { description: wechatId });
    }
  }

  return (
    <section className="w-full max-w-md mx-auto mb-6">
      <div className="flex items-center justify-center gap-5 flex-wrap">
        {/* WhatsApp */}
        <Button asChild variant="gradient" size="icon" className="size-12 rounded-xl" aria-label="WhatsApp">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="size-6" />
          </a>
        </Button>

        {/* Telegram */}
        <Button variant="gradient" size="icon" className="size-12 rounded-xl" aria-label="Telegram" onClick={openTelegram}>
          <FaTelegramPlane className="size-6" />
        </Button>

        {/* WeChat (copy ID) */}
        <Button variant="gradient" size="icon" className="size-12 rounded-xl" aria-label="WeChat" onClick={copyWeChat}>
          <FaWeixin className="size-6" />
        </Button>

        {/* LinkedIn */}
        <Button asChild variant="gradient" size="icon" className="size-12 rounded-xl" aria-label="LinkedIn">
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="size-6" />
          </a>
        </Button>

        {/* GitHub */}
        <Button asChild variant="gradient" size="icon" className="size-12 rounded-xl" aria-label="GitHub">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub className="size-6" />
          </a>
        </Button>
      </div>
    </section>
  );
}
