export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      {/* Brand */}
      <div className="text-[15px] font-medium tracking-tight">
        inSubstance
      </div>

      {/* Nav + Bag */}
      <div className="flex items-center gap-8 text-[13px]">
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:opacity-60 transition-opacity">
            Journal
          </a>
          <a href="#" className="hover:opacity-60 transition-opacity">
            Shop
          </a>
          <a href="#" className="hover:opacity-60 transition-opacity">
            Team
          </a>
        </nav>
        <span className="text-foreground">bag(0)</span>
      </div>
    </header>
  );
}
