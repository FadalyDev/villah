import { Coffee } from "lucide-react";

export function Header({ nameAr }: { nameAr: string }) {
  return (
    <header className="text-center pt-14 pb-8 px-4">
      <div className="inline-flex items-center justify-center mb-5">
        <div
          className="w-36 h-36 rounded-full flex items-center justify-center
             border-2 border-cafe-gold/30 dark:bg-cafe-bg2/30 bg-[#a97a22] shadow-lg"
        >
          <img src="/villa.png" width={500} />
        </div>
      </div>
      <h1
        className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
        style={{ color: "var(--ink)" }}
      >
        {nameAr}
      </h1>
      <div className="flex items-center justify-center gap-3 mt-4"></div>
    </header>
  );
}
