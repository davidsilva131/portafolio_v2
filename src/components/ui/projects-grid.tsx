"use client";

import { ProjectCard } from "./project-card";
import { Project } from "../../data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  // Group projects into sets of 3 for each slide
  const projectsPerSlide = 3;
  const groupedProjects = [];
  
  for (let i = 0; i < projects.length; i += projectsPerSlide) {
    groupedProjects.push(projects.slice(i, i + projectsPerSlide));
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {groupedProjects.map((projectGroup, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {projectGroup.map((project) => (
                  <div key={project.id}>
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
