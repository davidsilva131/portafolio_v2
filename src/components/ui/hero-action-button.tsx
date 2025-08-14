import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeroActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "default" | "sm" | "lg";
  icon?: LucideIcon;
  className?: string;
  disabled?: boolean;
}

export function HeroActionButton({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "lg",
  icon: Icon,
  className,
  disabled = false
}: HeroActionButtonProps) {
  const variants = {
    primary: "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg hover:shadow-xl transition-all duration-300",
    secondary: "border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black shadow-lg hover:shadow-xl transition-all duration-300"
  };

  return (
    <Button
      variant={variant === "secondary" ? "outline" : "default"}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "font-medium px-8 py-3 rounded-full",
        variants[variant],
        "transform hover:scale-105 active:scale-95 transition-transform",
        className
      )}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </Button>
  );
}
