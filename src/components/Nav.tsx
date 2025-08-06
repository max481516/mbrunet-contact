import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { FaLanguage } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";

export default function Nav() {
  // State for selected language
  const [language, setLanguage] = React.useState<"EN" | "FR" | "RU">("EN");

  // Handler for changing language
  const handleLanguageChange = (lang: "EN" | "FR" | "RU") => {
    setLanguage(lang);
    // TODO: Implement language switching logic here
  };

  return (
    <nav className="flex items-center justify-between py-4 w-full border-none">
      {/* Left: Language Switcher */}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="p-0 bg-transparent hover:bg-transparent shadow-none border-none outline-none focus:ring-0 active:bg-transparent"
              aria-label="Change language"
            >
              <GrLanguage size={24} className=" text-[#302C36]" />
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
        <Button variant="gradient" className="rounded-full">
          message me
        </Button>
      </div>
    </nav>
  );
}
