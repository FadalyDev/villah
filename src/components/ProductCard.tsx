import type { Product } from '@/data/cafe';

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const formattedPrice = product.price.toLocaleString('ar-EG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div
      className="animate-fade-in-up group relative flex items-center justify-between gap-3
                 rounded-2xl px-5 py-4
                 bg-cafe-bg2/25 hover:bg-cafe-bg2/45
                 border border-cafe-gold/10 hover:border-cafe-gold/30
                 transition-all duration-300 hover:shadow-lg
                 hover:-translate-y-0.5"
      style={{ animationDelay: `${Math.min(index * 40, 400)}ms` }}
    >
      <div className={`flex ${product.description ? 'items-start' : 'items-center'} gap-3 min-w-0 flex-1`}>
        <span
          className={`w-1.5 h-1.5 rounded-full bg-cafe-gold/40 group-hover:bg-cafe-gold
                     transition-colors duration-300 flex-shrink-0 ${product.description ? 'mt-2' : ''}`}
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-base sm:text-lg font-semibold text-cafe-ink leading-snug">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-xs sm:text-sm text-cafe-soft/90 mt-1 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-baseline gap-1.5 flex-shrink-0 mr-1 sm:mr-3">
        <span
          className="text-lg sm:text-xl font-black text-cafe-gold tabular-nums"
        >
          {formattedPrice}
        </span>
        <span className="text-xs font-semibold text-cafe-soft">ج.م</span>
      </div>
    </div>
  );
}
