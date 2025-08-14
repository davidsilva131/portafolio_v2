"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Eye, Mail, Github, Linkedin } from "lucide-react";
import { HeroTypography } from "@/components/ui/hero-typography";
import { HeroActionButton } from "@/components/ui/hero-action-button";
import { HeroStatusBadge } from "@/components/ui/hero-status-badge";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Hide scroll indicator after 100px of scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleContactClick = () => {
    scrollToSection('contact');
  };

  const handleViewWorkClick = () => {
    scrollToSection('projects');
  };

  return (
    <section 
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 relative"
    >
      {/* Main content */}
      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Status badge */}
        <div className="flex justify-center mb-6">
          <HeroStatusBadge status="available" text={t('hero.status.available')} />
        </div>

        {/* Greeting */}
        <div className="mb-4">
          <HeroTypography variant="subtitle" className="mb-2">
            {t('hero.greeting')}
          </HeroTypography>
          <HeroTypography variant="h1" className="mb-4">
            {t('hero.name')}
          </HeroTypography>
        </div>

        {/* Main heading */}
        <HeroTypography variant="h2" className="mb-6">
          {t('hero.title')}
        </HeroTypography>

        {/* Description */}
        <HeroTypography variant="p" className="mb-8 max-w-3xl mx-auto">
          {t('hero.description')}
        </HeroTypography>

        {/* Tech stack tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <Separator className="my-8 max-w-xs mx-auto" />

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <HeroActionButton 
            variant="primary"
            icon={Eye}
            onClick={handleViewWorkClick}
          >
            {t('hero.viewWork')}
          </HeroActionButton>
          <HeroActionButton 
            variant="secondary"
            icon={Mail}
            onClick={handleContactClick}
          >
            {t('hero.getInTouch')}
          </HeroActionButton>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          <a 
            href="https://github.com/davidsilva131" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/juan-david-silva-contreras1/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 hover:scale-110 transform"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
        isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-bounce'
      }`}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{t('hero.scrollDown')}</span>
          <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </div>
      </div>
    </section>
  );
}
