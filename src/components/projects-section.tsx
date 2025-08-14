"use client";

import { ProjectsGrid } from "./ui/projects-grid";
import { projectsData } from "../data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectsSection() {
  const { t } = useLanguage();
  
  return (
    <section 
      id="projects"
      className="min-h-screen py-20 px-4 flex items-center scroll-mt-16 relative"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {t('projects.title')}{" "}
            <span className="text-gray-600 dark:text-gray-400">{t('projects.subtitle')}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            {t('projects.description')}
          </p>

          {/* Projects Grid */}
          <ProjectsGrid projects={projectsData} />
        </div>
      </div>
    </section>
  );
}
