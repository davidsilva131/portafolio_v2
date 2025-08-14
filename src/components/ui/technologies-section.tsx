import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Palette, Wrench, Database, Zap, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface SkillData {
  title: string;
  skills: string[];
}

interface TechnologiesSectionProps {
  skillsData: SkillData[];
}

export function TechnologiesSection({ skillsData }: TechnologiesSectionProps) {
  const { t } = useLanguage();

  const categoryIcons = {
    "Languages": Code2,
    "Frameworks": Zap,
    "Styling": Palette,
    "Tools": Wrench,
    "State Management": Database,
    "Others": Settings,
  };

  const getCategoryTitle = (title: string) => {
    const titleMap: { [key: string]: string } = {
      "Languages": t('tech.languages'),
      "Frameworks": t('tech.frameworks'),
      "Styling": t('tech.styling'),
      "Tools": t('tech.tools'),
      "State Management": t('tech.stateManagement'),
      "Others": t('tech.others'),
    };
    return titleMap[title] || title;
  };

  const getCategoryDescription = (title: string) => {
    const descMap: { [key: string]: string } = {
      "Languages": t('tech.languages.desc'),
      "Frameworks": t('tech.frameworks.desc'),
      "Styling": t('tech.styling.desc'),
      "Tools": t('tech.tools.desc'),
      "State Management": t('tech.stateManagement.desc'),
      "Others": t('tech.others.desc'),
    };
    return descMap[title] || title;
  };

  const renderCategoryCard = (category: SkillData, index: number) => {
    const IconComponent = categoryIcons[category.title as keyof typeof categoryIcons] || Settings;
    
    return (
      <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-2">
            <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <CardTitle className="text-lg">{getCategoryTitle(category.title)}</CardTitle>
          </div>
          <CardDescription className="text-sm">
            {getCategoryDescription(category.title)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <Badge 
                key={skillIndex} 
                variant="secondary"
                className="text-xs hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="w-full">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="all">{t('tech.allTechnologies')}</TabsTrigger>
          <TabsTrigger value="frontend">{t('tech.frontend')}</TabsTrigger>
          <TabsTrigger value="tools">{t('tech.toolsOthers')}</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsData.map((category, index) => renderCategoryCard(category, index))}
          </div>
        </TabsContent>

        <TabsContent value="frontend" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillsData
              .filter(category => ['Languages', 'Frameworks', 'Styling', 'State Management'].includes(category.title))
              .map((category, index) => renderCategoryCard(category, index))}
          </div>
        </TabsContent>

        <TabsContent value="tools" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillsData
              .filter(category => ['Tools', 'Others'].includes(category.title))
              .map((category, index) => renderCategoryCard(category, index))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
