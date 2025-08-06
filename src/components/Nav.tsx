import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { FaLanguage } from "react-icons/fa6";

export default function Nav() {
  // State for selected language
  const [language, setLanguage] = React.useState<"EN" | "FR" | "RU">("EN");

  // Handler for changing language
  const handleLanguageChange = (lang: "EN" | "FR" | "RU") => {
    setLanguage(lang);
    // TODO: Implement language switching logic here
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b  w-full max-w-md mx-auto bg-white shadow-lg border-none mb-8">
      {/* Left: Language Switcher */}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <FaLanguage /> {language}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleLanguageChange("EN")}>
              EN
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleLanguageChange("FR")}>
              FR
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleLanguageChange("RU")}>
              RU
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right: Message Me Button */}
      <div>
        <Button>Message Me</Button>
      </div>
    </nav>
  );
}
