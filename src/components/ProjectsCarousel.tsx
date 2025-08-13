import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";

export default function ProjectsCarousel() {
  const { t } = useTranslation();
  const projects = [
    {
      title: "CONTENT DO",
      image:
        "https://res.cloudinary.com/dqs3mkxnr/image/upload/v1754484192/Screenshot_2025-08-06_at_16.23.32_1_wgv5ss.png",
      description: t("projectsCarousel.item1Desc"),
    },
    {
      title: "Visites Parfums Paris",
      image:
        "https://res.cloudinary.com/dqs3mkxnr/image/upload/v1754484192/screencapture-vpparis-fr-2025-08-06-16_35_18_1_blaqm4.png",
      description: t("projectsCarousel.item2Desc"),
    },
    {
      title: t("projectsCarousel.item3Title"),
      image:
        "https://res.cloudinary.com/dqs3mkxnr/image/upload/v1754484473/screencapture-celinepierre2025-Services-2025-08-06-16_46_55_1_mn88ej.png",
      description: t("projectsCarousel.item3Desc"),
    },
  ];
  return (
    <div className="w-full max-w-sm mx-auto mb-4">
      <h3 className="text-3xl font-bold mb-4 text-center ru:text-2xl">
        {t("projectsCarousel.title")}
      </h3>
      <Carousel>
        <CarouselContent>
          {projects.map((project, idx) => (
            <CarouselItem key={idx}>
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-sm" // h-60 (15rem) sets fixed height, adjust as needed
                  draggable={false}
                />
                {/* Arrows inside image */}
                <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-black/60 text-white rounded-full w-8 h-8 p-0" />
                <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-black/60 text-white rounded-full w-8 h-8 p-0" />
              </div>
              {/* Title and description below image */}
              <div className="font-semibold">{project.title}</div>
              <p className="text-sm/4 text-muted-foreground">
                {project.description}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
