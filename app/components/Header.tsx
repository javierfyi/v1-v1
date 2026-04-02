import { FEATURED_PRODUCT } from "@/lib/products";

const NAV_ITEMS = ["SHOP", "PRO", "ABOUT"];

export function Header() {
  return (
    <header className="grid grid-cols-3 items-start px-6 pt-6 pb-4 text-[10px] uppercase tracking-wide leading-relaxed">
      {/* Left — Featured product info */}
      <div className="flex flex-col gap-0">
        <div className="flex gap-4">
          <span className="text-muted w-16">PRODUCT</span>
          <span className="font-bold">{FEATURED_PRODUCT.name}</span>
        </div>
        <div className="flex gap-4">
          <span className="text-muted w-16">TYPE</span>
          <span>{FEATURED_PRODUCT.type}</span>
        </div>
        <div className="flex gap-4">
          <span className="text-muted w-16">PRICE</span>
          <span>{FEATURED_PRODUCT.price}</span>
        </div>
      </div>

      {/* Center — Brand */}
      <div className="flex justify-center">
        <span className="text-[13px] font-bold tracking-widest">
          IN SUBSTANCE
        </span>
      </div>

      {/* Right — Nav + Bag + Currency */}
      <div className="flex items-start justify-end gap-6">
        <nav className="flex gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:opacity-60 transition-opacity"
            >
              {item}
            </a>
          ))}
        </nav>
        <span>BAG:0</span>
        <span className="text-muted">EUR</span>
        <div className="flex gap-1 items-center">
          <span className="w-1 h-1 rounded-full bg-foreground" />
          <span className="w-1 h-1 rounded-full bg-foreground" />
        </div>
      </div>
    </header>
  );
}
