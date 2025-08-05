import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Content DO",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80", // Replace with your own
    description:
      "Video production website for brands, music videos, and action scenes. (Sample Project)",
  },
  {
    title: "My Portfolio",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // Replace with your own
    description:
      "Modern portfolio showcasing my latest web dev projects and design skills.",
  },
  {
    title: "Contact Card App",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Replace with your own
    description:
      "A simple React app for sharing digital business cards easily and securely.",
  },
];

export function ProjectsCarousel() {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <h3 className="text-lg font-bold mb-4 text-center">My recent projects</h3>
      <Carousel>
        <CarouselContent>
          {projects.map((project, idx) => (
            <CarouselItem key={idx}>
              <Card>
                {/* Project image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-t"
                />
                <CardContent className="p-4"></CardContent>
              </Card>
              <div className="font-semibold">{project.title}</div>
              <p className="text-sm text-muted-foreground mt-1">
                {project.description}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-between mt-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}

export default ProjectsCarousel;
