import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FiZap, FiUsers, FiCode, FiTrendingUp, FiGlobe } from "react-icons/fi";

export default function OfferAccordion() {
  return (
    <div className="w-full max-w-sm mx-auto my-5 p-6 pb-4 bg-gray-300 shadow-lg border-none rounded-xl">
      <h2 className="text-3xl font-bold mb-4 text-center">What do I offer?</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-medium ">
            <span className="inline-flex items-start gap-2 leading-snug">
              <FiZap className="size-5 text-[#5967a6] self-start mt-0.5" />
              Modern &amp; Fast App Development
            </span>
          </AccordionTrigger>
          <AccordionContent >
            I build responsive, maintainable apps with today’s best practices—built to scale and convert.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-medium ">
            <span className="inline-flex items-start gap-2 leading-snug">
              <FiUsers className="size-5 text-[#5967a6] self-start mt-0.5" />
              User-Focused, Detail-Oriented Craft
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Polished UX/UI with clear flows and micro-details that boost engagement and trust.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-medium ">
            <span className="inline-flex items-start gap-2 leading-snug">
              <FiTrendingUp className="size-5 text-[#5967a6] self-start mt-0.5" />
              Agile delivery focused on business value
            </span>
          </AccordionTrigger>
          <AccordionContent>
            I use Scrum and agile practices to keep projects moving fast while ensuring every feature adds measurable value to your business.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
    <AccordionTrigger className="text-lg font-medium">
      <span className="inline-flex items-start gap-2 leading-snug">
        <FiGlobe className="size-5 text-[#5967a6] self-start mt-0.5" />
        Seamless multilingual collaboration
      </span>
    </AccordionTrigger>
    <AccordionContent>
      Fluent in English, French, and Russian for smooth communication with global teams and clients.
    </AccordionContent>
  </AccordionItem>
      </Accordion>
    </div>
  );
}
