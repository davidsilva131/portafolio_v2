import { SkillCategory } from "../ui/skill-category";

interface SkillsGridProps {
  skillsData: {
    title: string;
    skills: string[];
  }[];
}

export function SkillsGrid({ skillsData }: SkillsGridProps) {
  // Split skills into two columns for better layout
  const leftColumnSkills = skillsData.slice(0, 3);
  const rightColumnSkills = skillsData.slice(3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="space-y-4">
        {leftColumnSkills.map((category, index) => (
          <SkillCategory 
            key={index}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        {rightColumnSkills.map((category, index) => (
          <SkillCategory 
            key={index}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  );
}
