import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function OfferAccordion() {
  return (
    <div className="w-full max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">What do I offer?</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Modern &amp; Fast Web Development</AccordionTrigger>
          <AccordionContent>
            I build performant, responsive, and maintainable web applications
            using the latest technologies.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Multilingual Communication</AccordionTrigger>
          <AccordionContent>
            Fluent in English, French, and Russian—seamless communication with
            international clients.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            User-Focused, Detail-Oriented Work
          </AccordionTrigger>
          <AccordionContent>
            I prioritize UX/UI and deliver polished products with attention to
            every detail.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
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

export default OfferAccordion;
