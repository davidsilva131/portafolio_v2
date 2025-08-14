import { Card, CardContent } from "./card";
import { Badge } from "./badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";
import { Button } from "./button";
import { ExternalLink, Copy } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
  description: string;
  availability?: string;
  copyable?: boolean;
}

export function ContactCard({ 
  icon: Icon, 
  title, 
  value, 
  href, 
  description, 
  availability,
  copyable = false 
}: ContactCardProps) {
  const handleCopy = async () => {
    if (copyable) {
      try {
        await navigator.clipboard.writeText(value);
        // You could add a toast notification here
        console.log('Copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

  const handleClick = () => {
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      window.location.href = href;
    } else {
      window.open(href, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6" />
              </div>
            </div>
            
            <h3 className="text-lg font-semibold mb-2">
              {title}
            </h3>
            
            <p className="text-muted-foreground text-sm mb-3 hover:text-primary transition-colors">
              {value}
            </p>
            
            <p className="text-xs text-muted-foreground">
              {description}
            </p>

            {availability && (
              <div className="mt-3">
                <Badge variant="secondary" className="text-xs">
                  {availability}
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>
      </HoverCardTrigger>
      
      <HoverCardContent className="w-80">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold">{title}</h4>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          
          <div className="bg-muted rounded-lg p-3">
            <p className="text-sm font-mono break-all">{value}</p>
          </div>
          
          {availability && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Availability:</span>
              <Badge variant="outline" className="text-xs">
                {availability}
              </Badge>
            </div>
          )}
          
          <div className="flex gap-2">
            <Button 
              size="sm" 
              onClick={handleClick}
              className="flex-1"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Contact
            </Button>
            
            {copyable && (
              <Button 
                size="sm" 
                variant="outline"
                onClick={handleCopy}
              >
                <Copy className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
