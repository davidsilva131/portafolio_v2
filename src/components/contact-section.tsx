"use client";

import { ContactCard } from "./ui/contact-card";
import { Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  
  const contactMethods = [
    {
      icon: Mail,
      title: t('contact.email'),
      value: "davidsilvac131@gmail.com",
      href: "mailto:davidsilvac131@gmail.com",
      description: t('contact.email.description'),
      availability: t('contact.email.availability'),
      copyable: true
    },
    {
      icon: Linkedin,
      title: t('contact.linkedin'),
      value: "linkedin.com/in/juan-david-silva-contreras1",
      href: "https://www.linkedin.com/in/juan-david-silva-contreras1/",
      description: t('contact.linkedin.description'),
      availability: t('contact.linkedin.availability')
    },
    {
      icon: Github,
      title: t('contact.github'),
      value: "github.com/davidsilva131",
      href: "https://github.com/davidsilva131",
      description: t('contact.github.description'),
      availability: t('contact.github.availability')
    }
  ];

  return (
    <section 
      id="contact"
      className="min-h-screen py-20 px-4 flex items-center scroll-mt-16 relative"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t('contact.title')}{" "}
            <span className="text-gray-600 dark:text-gray-400">{t('contact.subtitle')}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="space-y-8">
            {/* Primary Contact Methods */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <ContactCard key={index} {...method} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
