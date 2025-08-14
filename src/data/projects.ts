export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image?: string;
  link?: string;
  github?: string;
}

export const projectsData: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Complete redesign of a fashion e-commerce platform focusing on user experience and conversion optimization.",
    tags: ["UI/UX", "React", "Figma"],
    category: "Web Development",
    image: "/projects/placeholder-1.jpg",
    link: "#",
    github: "https://github.com/davidsilva131/ecommerce-platform"
  },
  {
    id: "mobile-banking-app",
    title: "Mobile Banking App",
    description: "Intuitive mobile banking application with emphasis on security and ease of use for financial transactions.",
    tags: ["Mobile", "Fintech", "Prototyping"],
    category: "Mobile App",
    image: "/projects/placeholder-2.jpg",
    link: "#",
    github: "https://github.com/davidsilva131/mobile-banking-app"
  },
  {
    id: "brand-identity-system",
    title: "Brand Identity System",
    description: "Complete brand identity design for a sustainable technology startup, including logo, guidelines, and applications.",
    tags: ["Branding", "Identity", "Print"],
    category: "Design",
    image: "/projects/placeholder-3.jpg",
    link: "#"
  },
  {
    id: "social-media-dashboard",
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with real-time data visualization and performance metrics.",
    tags: ["Dashboard", "Analytics", "Vue.js"],
    category: "Web Development",
    image: "/projects/placeholder-4.jpg",
    link: "#",
    github: "https://github.com/davidsilva131/social-dashboard"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Modern portfolio website with smooth animations and responsive design for a creative agency.",
    tags: ["Portfolio", "Animation", "GSAP"],
    category: "Web Development",
    image: "/projects/placeholder-5.jpg",
    link: "#",
    github: "https://github.com/davidsilva131/portfolio-website"
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "Collaborative task management application with team features and project tracking capabilities.",
    tags: ["Productivity", "Teams", "TypeScript"],
    category: "Mobile App",
    image: "/projects/placeholder-6.jpg",
    link: "#",
    github: "https://github.com/davidsilva131/task-management"
  }
];
