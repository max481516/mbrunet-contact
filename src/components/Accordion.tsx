import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FiZap, FiUsers, FiTrendingUp, FiGlobe } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";
import type { ReactNode } from "react";

const items = [
  {
    value: "item-1",
    icon: FiZap,
    titleKey: "accordion.item1Title",
    contentKey: "accordion.item1Content",
  },
  {
    value: "item-2",
    icon: FiUsers,
    titleKey: "accordion.item2Title",
    contentKey: "accordion.item2Content",
  },
  {
    value: "item-3",
    icon: FiTrendingUp,
    titleKey: "accordion.item3Title",
    contentKey: "accordion.item3Content",
  },
  {
    value: "item-4",
    icon: FiGlobe,
    titleKey: "accordion.item4Title",
    contentKey: "accordion.item4Content",
  },
] as const;

function Trigger({ icon: Icon, children }: { icon: IconType; children: ReactNode }) {
  return (
    <AccordionTrigger className="text-lg font-medium ru:text-xs">
      <h3 className="inline-flex items-start gap-2 leading-tight ru:leading-3">
        <Icon className="size-5 ru:size-7 text-[#5967a6] self-start" />
        {children}
      </h3>
    </AccordionTrigger>
  );
}

export default function OfferAccordion() {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-sm mx-auto my-5 p-6 pb-4 bg-gray-300 shadow-lg border-none rounded-xl">
      <h2 className="text-3xl mb-4 text-center ru:text-2xl">{t("accordion.title")}</h2>
      <Accordion type="single" collapsible className="w-full">
        {items.map(({ value, icon, titleKey, contentKey }) => (
          <AccordionItem key={value} value={value}>
            <Trigger icon={icon}>{t(titleKey)}</Trigger>
            <AccordionContent>{t(contentKey)}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
