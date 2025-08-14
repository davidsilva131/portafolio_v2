interface ProfileCardProps {
  initials: string;
  isDark: boolean;
}

export function ProfileCard({ initials, isDark }: ProfileCardProps) {
  return (
    <div className="flex justify-center lg:justify-end">
      <div 
        className="w-80 h-96 rounded-2xl flex items-center justify-center shadow-2xl" 
        style={{backgroundColor: isDark ? '#262626' : '#e5e7eb'}}
      >
        <div className="text-8xl font-bold text-gray-800 dark:text-white">
          {initials}
        </div>
      </div>
    </div>
  );
}
