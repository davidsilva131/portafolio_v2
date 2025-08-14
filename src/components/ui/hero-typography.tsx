import { cn } from "@/lib/utils";

interface HeroTypographyProps {
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "p" | "subtitle";
  className?: string;
}

export function HeroTypography({ children, variant, className }: HeroTypographyProps) {
  const variants = {
    h1: "text-4xl md:text-6xl lg:text-7xl font-bold leading-tight",
    h2: "text-3xl md:text-5xl lg:text-6xl font-bold leading-tight",
    h3: "text-2xl md:text-4xl lg:text-5xl font-bold leading-tight",
    subtitle: "text-lg md:text-xl lg:text-2xl font-medium text-gray-600 dark:text-gray-400",
    p: "text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
  };

  const Component = variant === "p" || variant === "subtitle" ? "p" : variant;

  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  );
}
