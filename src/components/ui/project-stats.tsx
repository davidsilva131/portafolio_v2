import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";

interface ProjectStatsProps {
  totalProjects: number;
  categories: string[];
  technologies: string[];
}

export function ProjectStats({ totalProjects, categories, technologies }: ProjectStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {/* Total Projects */}
      <Card className="text-center">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-foreground">
            {totalProjects}
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="text-center">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-foreground mb-2">
            {categories.length}
          </div>
          <div className="flex flex-wrap gap-1 justify-center">
            {categories.slice(0, 3).map((category, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
            {categories.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{categories.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Technologies */}
      <Card className="text-center">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Technologies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-foreground mb-2">
            {technologies.length}
          </div>
          <div className="flex flex-wrap gap-1 justify-center">
            {technologies.slice(0, 4).map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
