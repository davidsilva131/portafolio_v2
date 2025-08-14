import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Project Image */}
      <div className="aspect-video bg-muted relative overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <div className="w-16 h-16 bg-muted-foreground/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <div className="w-8 h-8 bg-muted-foreground/40 rounded"></div>
              </div>
              <p className="text-sm">Project Preview</p>
            </div>
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button 
          asChild 
          variant="outline" 
          size="sm" 
          className="flex-1"
        >
          <a href={project.link || "#"} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4" />
            View Live
          </a>
        </Button>
        
        {project.github && (
          <Button 
            asChild 
            variant="outline" 
            size="sm"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
