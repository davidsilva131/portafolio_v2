"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { Moon, Sun, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/ui/language-selector";

interface NavItem {
  title: string;
  href: string;
  id: string;
  key: string;
}

export default function NavbarRefactored() {
  const { t } = useLanguage();
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navItems: NavItem[] = [
    { title: t('nav.home'), href: "#home", id: "home", key: 'nav.home' },
    { title: t('nav.about'), href: "#about", id: "about", key: 'nav.about' },
    { title: t('nav.projects'), href: "#projects", id: "projects", key: 'nav.projects' },
    { title: t('nav.contact'), href: "#contact", id: "contact", key: 'nav.contact' },
  ];

  useEffect(() => {
    document.documentElement.classList.add('dark');
    setMounted(true);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsSheetOpen(false); // Close mobile menu after navigation
  };

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-black dark:text-white text-xl font-bold">David Silva</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Sun className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-white/95 dark:bg-black/95 backdrop-blur-lg border-b border-gray-200/70 dark:border-gray-800/70 shadow-lg" 
        : "bg-white/60 dark:bg-black/60 backdrop-blur-sm border-b border-gray-200/30 dark:border-gray-800/30"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-black dark:text-white text-xl font-bold hover:opacity-80 transition-opacity"
            >
              David Silva
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
                        "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white",
                        "font-medium transition-colors cursor-pointer"
                      )}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Theme Toggle & Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <LanguageSelector />
            
            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[300px] sm:w-[400px] bg-white dark:bg-black"
                >
                  <nav className="flex flex-col space-y-4 mt-8">
                    <div className="border-b border-gray-200 dark:border-gray-800 pb-4 mb-4">
                      <h2 className="text-lg font-semibold text-black dark:text-white">
                        {t('nav.navigation')}
                      </h2>
                    </div>
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white px-3 py-3 text-base font-medium transition-colors duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
