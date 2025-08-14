import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface HeroStatusBadgeProps {
  status: "available" | "busy" | "offline";
  className?: string;
  text?: string;
}

export function HeroStatusBadge({ status, className, text }: HeroStatusBadgeProps) {
  const statusConfig = {
    available: {
      text: text || "Available for work",
      variant: "default" as const,
      className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-800"
    },
    busy: {
      text: text || "Currently busy",
      variant: "secondary" as const,
      className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800"
    },
    offline: {
      text: text || "Not available",
      variant: "outline" as const,
      className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 border-red-200 dark:border-red-800"
    }
  };

  const config = statusConfig[status];

  return (
    <Badge 
      variant={config.variant}
      className={cn(
        "animate-pulse",
        config.className,
        className
      )}
    >
      <div className="w-2 h-2 rounded-full bg-current mr-2" />
      {config.text}
    </Badge>
  );
}
