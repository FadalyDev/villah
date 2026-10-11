export function Header({ nameAr }: { nameAr: string }) {
  return (
    <header className="px-4 pt-14 pb-8 text-center">
      {/* Logo */}
      <div className="mb-5 flex justify-center">
        <div
          className="
            flex h-36 w-36 items-center justify-center
            overflow-hidden rounded-full
            border-2 border-cafe-gold/40
            bg-cafe-bg2/70
            shadow-lg shadow-cafe-gold/10
            transition-colors duration-300
          "
        >
          <img
            src="/villa.png"
            alt="Café Al-Villa logo"
            className="h-full w-full object-contain p-3"
          />
        </div>
      </div>

      {/* Café Title */}
      <h1
        className="
          font-cairo text-4xl font-black tracking-tight
          text-cafe-ink
          sm:text-5xl md:text-6xl
          transition-colors duration-300
        "
      >
        {nameAr}
      </h1>

      {/* Decorative Gold Divider */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-cafe-gold/50" />

        <span className="h-2 w-2 rotate-45 bg-cafe-gold" />

        <span className="h-px w-10 bg-cafe-gold/50" />
      </div>

      {/* Subtitle */}
      <p
        className="
          mt-3 font-cairo text-sm
          text-cafe-soft
          sm:text-base
          transition-colors duration-300
        "
      >
        مشروبات تحلّي يومك
      </p>
    </header>
  );
}
