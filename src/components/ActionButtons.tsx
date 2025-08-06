import { Button } from "@/components/ui/button";

export default function ActionButtons() {
  return (
    <section className="w-full max-w-md mx-auto flex flex-col gap-4 mb-8 ">
      <Button variant="gradient" className="w-full text-base font-semibold">
        save my contact
      </Button>
      <Button variant="gradient" className="w-full text-base font-semibold">
        share my contact
      </Button>
      <Button variant="gradient" className="w-full text-base font-semibold">
        download my CV
      </Button>
    </section>
  );
}
