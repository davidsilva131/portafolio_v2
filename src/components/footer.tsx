"use client";

import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/davidsilva131",
      label: t('contact.github'),
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/juan-david-silva-contreras1/",
      label: t('contact.linkedin'),
    },
    {
      icon: Mail,
      href: "mailto:davidsilvac131@gmail.com",
      label: t('contact.email'),
      username: "davidsilvac131@gmail.com"
    }
  ];

  const navigationLinks = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.contact'), href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-background border-t py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">David Silva</h3>
            </div>
            <p className="text-muted-foreground max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">UI/UX</Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t('footer.quickLinks')}</h4>
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="justify-start px-0 h-auto font-normal text-muted-foreground hover:text-foreground"
                  onClick={() => scrollToSection(link.href)}
                >
                  {link.name}
                </Button>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t('footer.connect')}</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="h-8 w-8"
                    >
                      <a
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : undefined}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        aria-label={social.label}
                      >
                        <IconComponent className="w-4 h-4" />
                      </a>
                    </Button>
                    <div>
                      <p className="text-sm font-medium">{social.label}</p>
                      <p className="text-xs text-muted-foreground">{social.username}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{t('footer.rights')}</span>
            <span>{t('footer.madeWith')}</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>{t('footer.using')}</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{t('footer.lastUpdated')}</span>
            <Badge variant="outline" className="text-xs">
              v2.0
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
}
