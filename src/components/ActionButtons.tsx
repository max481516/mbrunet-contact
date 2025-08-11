import { Button } from "@/components/ui/button";

export default function ActionButtons() {
  // 1) Save my contact → generate and download a vCard (.vcf)
  function handleSaveContact() {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Brunet;Maximilien;;;",
      "FN:Maximilien Brunet",
      "TITLE:Freelance Web Developer",
      "EMAIL;TYPE=INTERNET,WORK:maximilien.brunet@me.com",
      "TEL;TYPE=CELL,WORK:+971509475535",
      // ADR: PO Box;Extended;Street;Locality;Region;Postal Code;Country
      "ADR;TYPE=WORK:;;;Dubai;;;UAE",
      "URL:https://mbrunet.net",
      "URL:https://mbrunet.contact",
      "URL:https://www.linkedin.com/in/maximilien-brunet-97540511b/",
      "END:VCARD",
    ].join("\r\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Maximilien-Brunet.vcf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  // 2) Share my contact → Web Share API with clipboard fallback
  async function handleShare() {
    const shareUrl = "https://mbrunet.contact";
    const shareData = {
      title: "Maximilien Brunet — Freelance Web Developer",
      text:
        "Hi! This is my portfolio and contact page. Let’s connect and discuss your project.",
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData as ShareData);
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        window.alert(`Link copied to clipboard: ${shareUrl}`);
      } else {
        window.prompt("Copy this link:", shareUrl);
      }
    } catch (err) {
      console.error(err);
      try {
        await navigator.clipboard.writeText(shareUrl);
        window.alert(`Link copied to clipboard: ${shareUrl}`);
      } catch (_) {
        window.prompt("Copy this link:", shareUrl);
      }
    }
  }

  // 3) Download my CV
  function handleDownloadCV() {
    const url = "/MAXIMILIEN-BRUNET-CV.pdf";
    const a = document.createElement("a");
    a.href = url;
    a.download = "Maximilien-Brunet-CV.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  return (
    <section className="w-full max-w-sm mx-auto flex flex-col gap-4 mb-8 ">
      <Button
        variant="gradient"
        className="w-full text-base font-semibold"
        onClick={handleSaveContact}
        aria-label="Save my contact as vCard"
      >
        save my contact
      </Button>
      <Button
        variant="gradient"
        className="w-full text-base font-semibold"
        onClick={handleShare}
        aria-label="Share my contact"
      >
        share my contact
      </Button>
      <Button
        variant="gradient"
        className="w-full text-base font-semibold"
        onClick={handleDownloadCV}
        aria-label="Download my CV"
      >
        download my CV
      </Button>
    </section>
  );
}
