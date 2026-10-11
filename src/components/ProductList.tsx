import type { Category } from '@/data/cafe';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  category: Category;
}

export function ProductList({ category }: ProductListProps) {
  return (
    <section key={category.id} className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-black text-cafe-ink">{category.name_ar}</h2>
        <span className="h-px flex-1 bg-gradient-to-l from-cafe-gold/30 to-transparent" />
        <span className="text-sm font-bold text-cafe-soft bg-cafe-bg2/30 rounded-full px-3 py-1">
          {category.items.length} صنف
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {category.items.map((product, index) => (
          <ProductCard key={product.name} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
