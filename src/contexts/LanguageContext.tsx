"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.navigation': 'Navigation',
    
    // Hero Section
    'hero.greeting': 'Hi there, I\'m',
    'hero.name': 'David Silva',
    'hero.title': 'Frontend Developer',
    'hero.description': 'I specialize in building exceptional digital experiences with modern web technologies. From pixel-perfect interfaces to high-performance applications, I transform ideas into interactive realities using React, Next.js, TypeScript, and cutting-edge tools.',
    'hero.viewWork': 'View My Work',
    'hero.getInTouch': 'Get In Touch',
    'hero.scrollDown': 'Scroll down',
    'hero.status.available': 'Available for work',
    
    // About Section
    'about.title': 'Tools & Technologies',
    'about.subtitle': 'I Master',
    'about.description': 'I specialize in building modern, responsive, and scalable web applications using cutting-edge technologies. My toolkit combines performance, maintainability, and exceptional user experience.',
    'about.quickStats': 'Quick Stats',
    'about.yearsExperience': 'Years of Experience',
    'about.projectsCompleted': 'Projects Completed',
    'about.technologiesMastered': 'Technologies Mastered',
    
    // Technologies Section
    'tech.allTechnologies': 'All Technologies',
    'tech.frontend': 'Frontend',
    'tech.toolsOthers': 'Tools & Others',
    'tech.languages': 'Languages',
    'tech.frameworks': 'Frameworks',
    'tech.styling': 'Styling',
    'tech.tools': 'Tools',
    'tech.stateManagement': 'State Management',
    'tech.others': 'Others',
    'tech.languages.desc': 'Programming languages I use for web development',
    'tech.frameworks.desc': 'Modern frameworks and libraries for building applications',
    'tech.styling.desc': 'CSS frameworks and tools for beautiful interfaces',
    'tech.tools.desc': 'Development tools and platforms I work with',
    'tech.stateManagement.desc': 'Solutions for managing application state',
    'tech.others.desc': 'Additional skills and specializations',
    
    // Projects Section
    'projects.title': 'Showcasing',
    'projects.subtitle': 'My Work',
    'projects.description': 'A collection of projects that showcase my skills and experience in web development.',
    'projects.viewDemo': 'View Demo',
    'projects.viewCode': 'View Code',
    'projects.comingSoon': 'Coming Soon',
    
    // Contact Section
    'contact.title': 'Let\'s',
    'contact.subtitle': 'Connect',
    'contact.description': 'I\'m always interested in new opportunities and collaborations. Feel free to reach out!',
    'contact.email': 'Email',
    'contact.email.description': 'Best way to reach me',
    'contact.email.availability': '24h response',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedin.description': 'Let\'s connect professionally',
    'contact.linkedin.availability': 'Active daily',
    'contact.github': 'GitHub',
    'contact.github.description': 'Check out my code',
    'contact.github.availability': 'Updated weekly',
    
    // Footer
    'footer.description': 'Full-stack developer passionate about creating exceptional digital experiences. Specializing in modern web technologies and user-centered design.',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.madeWith': 'Built with',
    'footer.using': 'using Next.js & Tailwind CSS',
    'footer.rights': '© 2025 David Silva.',
    'footer.lastUpdated': 'Last updated: August 2025',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.navigation': 'Navegación',
    
    // Hero Section
    'hero.greeting': 'Hola, soy',
    'hero.name': 'David Silva',
    'hero.title': 'Desarrollador Frontend',
    'hero.description': 'Me especializo en crear experiencias digitales excepcionales con tecnologías web modernas. Desde interfaces pixel-perfect hasta aplicaciones de alto rendimiento, transformo ideas en realidades interactivas usando React, Next.js, TypeScript y herramientas de vanguardia.',
    'hero.viewWork': 'Ver Mi Trabajo',
    'hero.getInTouch': 'Contactar',
    'hero.scrollDown': 'Desplázate hacia abajo',
    'hero.status.available': 'Disponible para trabajar',
    
    // About Section
    'about.title': 'Herramientas y Tecnologías',
    'about.subtitle': 'que Domino',
    'about.description': 'Me especializo en construir aplicaciones web modernas, responsivas y escalables usando tecnologías de vanguardia. Mi conjunto de herramientas combina rendimiento, mantenibilidad y una experiencia de usuario excepcional.',
    'about.quickStats': 'Estadísticas Rápidas',
    'about.yearsExperience': 'Años de Experiencia',
    'about.projectsCompleted': 'Proyectos Completados',
    'about.technologiesMastered': 'Tecnologías Dominadas',
    
    // Technologies Section
    'tech.allTechnologies': 'Todas las Tecnologías',
    'tech.frontend': 'Frontend',
    'tech.toolsOthers': 'Herramientas y Otros',
    'tech.languages': 'Lenguajes',
    'tech.frameworks': 'Frameworks',
    'tech.styling': 'Estilos',
    'tech.tools': 'Herramientas',
    'tech.stateManagement': 'Gestión de Estado',
    'tech.others': 'Otros',
    'tech.languages.desc': 'Lenguajes de programación que uso para desarrollo web',
    'tech.frameworks.desc': 'Frameworks modernos y librerías para construir aplicaciones',
    'tech.styling.desc': 'Frameworks CSS y herramientas para interfaces hermosas',
    'tech.tools.desc': 'Herramientas de desarrollo y plataformas con las que trabajo',
    'tech.stateManagement.desc': 'Soluciones para gestionar el estado de aplicaciones',
    'tech.others.desc': 'Habilidades adicionales y especializaciones',
    
    // Projects Section
    'projects.title': 'Mostrando',
    'projects.subtitle': 'Mi Trabajo',
    'projects.description': 'Una colección de proyectos que muestran mis habilidades y experiencia en desarrollo web.',
    'projects.viewDemo': 'Ver Demo',
    'projects.viewCode': 'Ver Código',
    'projects.comingSoon': 'Próximamente',
    
    // Contact Section
    'contact.title': 'Conectemos',
    'contact.subtitle': 'Juntos',
    'contact.description': 'Siempre estoy interesado en nuevas oportunidades y colaboraciones. ¡No dudes en contactarme!',
    'contact.email': 'Email',
    'contact.email.description': 'La mejor forma de contactarme',
    'contact.email.availability': 'Respuesta en 24h',
    'contact.linkedin': 'LinkedIn',
    'contact.linkedin.description': 'Conectemos profesionalmente',
    'contact.linkedin.availability': 'Activo diariamente',
    'contact.github': 'GitHub',
    'contact.github.description': 'Revisa mi código',
    'contact.github.availability': 'Actualizado semanalmente',
    
    // Footer
    'footer.description': 'Desarrollador full-stack apasionado por crear experiencias digitales excepcionales. Especializado en tecnologías web modernas y diseño centrado en el usuario.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.connect': 'Conectar',
    'footer.madeWith': 'Construido con',
    'footer.using': 'usando Next.js y Tailwind CSS',
    'footer.rights': '© 2025 David Silva.',
    'footer.lastUpdated': 'Última actualización: Agosto 2025',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage if available
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
