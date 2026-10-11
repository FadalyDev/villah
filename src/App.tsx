import { useState } from 'react';
import { cafeData } from '@/data/cafe';
import { useTheme } from '@/hooks/useTheme';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Header } from '@/components/Header';
import { CategoryTabs } from '@/components/CategoryTabs';
import { ProductList } from '@/components/ProductList';
import { Footer } from '@/components/Footer';

function App() {
  const { theme, toggle } = useTheme();
  const [activeCategoryId, setActiveCategoryId] = useState(cafeData.categories[0].id);

  const activeCategory =
    cafeData.categories.find((c) => c.id === activeCategoryId) ?? cafeData.categories[0];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-4 left-4 z-30">
        <ThemeToggle theme={theme} onToggle={toggle} />
      </div>

      <Header nameAr={cafeData.shop.name_ar} />

      <CategoryTabs
        categories={cafeData.categories}
        activeId={activeCategoryId}
        onSelect={setActiveCategoryId}
      />

      <main className="flex-1">
        <ProductList key={activeCategory.id} category={activeCategory} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
