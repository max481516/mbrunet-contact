import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function OfferAccordion() {
  return (
    <div className="w-full max-w-sm mx-auto my-5 p-6 bg-gray-300 shadow-lg border-none rounded-xl">
      <h2 className="text-3xl font-bold mb-4 text-center">What do I offer?</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-medium ">Modern &amp; Fast Web Development</AccordionTrigger>
          <AccordionContent >
            I build performant, responsive, and maintainable web applications
            using the latest technologies.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-medium ">Multilingual Communication</AccordionTrigger>
          <AccordionContent>
            Fluent in English, French, and Russian—seamless communication with
            international clients.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-medium ">
             User-Focused, Detail-Oriented Work
           </AccordionTrigger>
          <AccordionContent>
            I prioritize UX/UI and deliver polished products with attention to
            every detail.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-medium ">
             Expertise in React &amp; Modern UI
           </AccordionTrigger>
          <AccordionContent>
            Advanced skills with React, TypeScript, shadcn/ui, and
            component-driven design.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
