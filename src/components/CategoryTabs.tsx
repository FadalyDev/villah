import { useRef } from 'react';
import type { Category } from '@/data/cafe';

interface CategoryTabsProps {
  categories: Category[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function CategoryTabs({ categories, activeId, onSelect }: CategoryTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <nav
      className="sticky top-0 z-20 bg-cafe-bg1/85 backdrop-blur-md py-4
                 border-b border-cafe-gold/10"
    >
      <div
        ref={scrollRef}
        className="flex gap-2.5 overflow-x-auto scrollbar-hide px-4 sm:px-6
                   max-w-3xl mx-auto justify-start sm:justify-center"
      >
        {categories.map((cat) => {
          const isActive = cat.id === activeId;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`
                whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold
                transition-all duration-300 border-2
                ${isActive
                  ? 'border-cafe-gold bg-cafe-gold text-white shadow-md scale-105'
                  : 'border-cafe-gold/25 text-cafe-soft hover:border-cafe-gold/50 hover:text-cafe-ink bg-cafe-bg2/20'
                }
              `}
            >
              {cat.name_ar}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
