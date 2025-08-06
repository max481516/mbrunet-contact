import { Button } from "@/components/ui/button";

export default function ActionButtons() {
  return (
    <section className="w-full max-w-md mx-auto flex flex-col gap-4 mb-8 ">
      <Button className="w-full text-base font-semibold bg-gradient-to-r from-indigo-500 to-slate-500">
        save my contact
      </Button>
      <Button className="w-full text-base font-semibold bg-gradient-to-r from-indigo-500 to-slate-500">
        share my contact
      </Button>
      <Button className="w-full text-base font-semibold bg-gradient-to-r from-indigo-500 to-slate-500">
        download my CV
      </Button>
    </section>
  );
}
