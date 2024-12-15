
import { Moon, Sun, GraduationCap } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-8 h-8 text-[#00defc]" />
          <span className="text-2xl font-bold bg-gradient-to-r from-[#00defc] to-blue-600 bg-clip-text text-transparent">
            Adapitfy Courses
          </span>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
          title={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          ) : (
            <Moon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>
    </header>
  );
}