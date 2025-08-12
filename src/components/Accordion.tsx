import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FiZap, FiUsers, FiTrendingUp, FiGlobe } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function OfferAccordion() {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-sm mx-auto my-5 p-6 pb-4 bg-gray-300 shadow-lg border-none rounded-xl">
      <h2 className="text-3xl font-bold mb-4 text-center">{t("accordion.title")}</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-medium ">
            <span className="inline-flex items-start gap-2 leading-snug">
              <FiZap className="size-5 text-[#5967a6] self-start mt-0.5" />
              {t("accordion.item1Title")}
            </span>
          </AccordionTrigger>
          <AccordionContent >
            {t("accordion.item1Content")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-medium ">
            <span className="inline-flex items-start gap-2 leading-snug">
              <FiUsers className="size-5 text-[#5967a6] self-start mt-0.5" />
              {t("accordion.item2Title")}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            {t("accordion.item2Content")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-medium ">
            <span className="inline-flex items-start gap-2 leading-snug">
              <FiTrendingUp className="size-5 text-[#5967a6] self-start mt-0.5" />
              {t("accordion.item3Title")}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            {t("accordion.item3Content")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
    <AccordionTrigger className="text-lg font-medium">
      <span className="inline-flex items-start gap-2 leading-snug">
        <FiGlobe className="size-5 text-[#5967a6] self-start mt-0.5" />
        {t("accordion.item4Title")}
      </span>
    </AccordionTrigger>
    <AccordionContent>
      {t("accordion.item4Content")}
    </AccordionContent>
  </AccordionItem>
      </Accordion>
    </div>
  );
}
