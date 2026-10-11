import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={theme === 'light' ? 'تفعيل الوضع الليلي' : 'تفعيل الوضع النهاري'}
      className="relative flex items-center justify-center w-11 h-11 rounded-full
                 border-2 border-cafe-gold/40 hover:border-cafe-gold
                 bg-cafe-bg2/40 hover:bg-cafe-gold/10
                 transition-all duration-300 group"
    >
      {theme === 'light' ? (
        <Moon
          size={20}
          className="text-cafe-soft group-hover:text-cafe-gold transition-colors duration-300"
        />
      ) : (
        <Sun
          size={20}
          className="text-cafe-gold group-hover:text-cafe-gold transition-all duration-300
                     group-hover:rotate-45"
        />
      )}
    </button>
  );
}
