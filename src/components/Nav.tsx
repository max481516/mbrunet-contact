import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

const flagMap: Record<"EN" | "FR" | "RU", string> = {
  EN: "🇬🇧",
  FR: "🇫🇷",
  RU: "🇷🇺",
};

type NavProps = {
  onMessageClick?: () => void;
};

export default function Nav({ onMessageClick }: NavProps) {
  const { t, i18n } = useTranslation();

  // Derive current language code from i18n (e.g., 'en' -> 'EN')
  const language = (i18n.language?.slice(0, 2).toUpperCase() as
    | "EN"
    | "FR"
    | "RU") || "EN";

  // Switch language and let i18n persist to localStorage
  const handleLanguageChange = (lang: "EN" | "FR" | "RU") => {
    const map = { EN: "en", FR: "fr", RU: "ru" } as const;
    i18n.changeLanguage(map[lang]);
  };

  return (
    <nav className="flex items-center justify-between py-2 w-full border-none">
      {/* Left: Language Switcher */}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="gradient"
              className="rounded-full px-3 py-1 gap-2 flex items-center"
              aria-label="Change language"
            >
              <span className="text-lg">{flagMap[language]}</span>
              <span className="font-semibold text-white">{language}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            sideOffset={12}
            align="start"
            className="relative w-20 min-w-0 p-0 text-[#302C36] bg-indigo-50 overflow-visible rounded-md shadow-lg before:content-[''] before:absolute before:-top-2 before:left-7 before:w-4 before:h-4 before:rotate-45 before:bg-indigo-50 "
          >
            <DropdownMenuItem
              className="group justify-center gap-1 cursor-pointer px-2 py-1 hover:bg-gradient-to-br hover:from-[#302C36] hover:to-[#666F98]"
              onClick={() => handleLanguageChange("EN")}
            >
              <span role="img" aria-label="English" className="text-lg">🇬🇧</span>
              <span className="font-medium group-hover:text-white">EN</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="my-0.5 mx-1 h-px bg-[#302C36]/20" />
            <DropdownMenuItem
              className="group justify-center gap-1 cursor-pointer px-2 py-1 hover:bg-gradient-to-br hover:from-[#302C36] hover:to-[#666F98]"
              onClick={() => handleLanguageChange("FR")}
            >
              <span role="img" aria-label="Français" className="text-lg">🇫🇷</span>
              <span className="font-medium group-hover:text-white">FR</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="my-0.5 mx-1 h-px bg-[#302C36]/20" />
            <DropdownMenuItem
              className="group justify-center gap-1 cursor-pointer px-2 py-1 hover:bg-gradient-to-br hover:from-[#302C36] hover:to-[#666F98]"
              onClick={() => handleLanguageChange("RU")}
            >
              <span role="img" aria-label="Русский" className="text-lg">🇷🇺</span>
              <span className="font-medium group-hover:text-white">RU</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right: Message Me Button */}
      <div>
        <Button
          variant="gradient"
          className="rounded-full"
          onClick={onMessageClick}
        >
          {t("nav.messageMe")}
        </Button>
      </div>
    </nav>
  );
}
