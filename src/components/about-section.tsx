"use client";

import { useEffect, useState } from "react";
import { TechnologiesSection } from "./ui/technologies-section";
import { ProfileCard } from "./ui/profile-card";
import { skillsData } from "../data/skills";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check the current theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about"
      className="min-h-screen py-20 px-4 flex items-center scroll-mt-16 relative"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t('about.title')}{" "}
            <span className="text-gray-600 dark:text-gray-400">{t('about.subtitle')}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
          <Separator className="my-8 max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Content - Profile Card */}
          <div className="lg:col-span-1">
            <ProfileCard initials="DS" isDark={isDark} />
            
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold">{t('about.quickStats')}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">{t('about.yearsExperience')}</span>
                  <span className="font-semibold">3+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">{t('about.projectsCompleted')}</span>
                  <span className="font-semibold">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">{t('about.technologiesMastered')}</span>
                  <span className="font-semibold">20+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Technologies */}
          <div className="lg:col-span-2">
            <TechnologiesSection skillsData={skillsData} />
          </div>
        </div>
      </div>
    </section>
  );
}
