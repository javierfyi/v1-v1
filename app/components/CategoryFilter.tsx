"use client";

import { CATEGORIES, PRODUCTS } from "@/lib/products";
import type { Category } from "@/lib/products";

type CategoryFilterProps = {
  active: Category;
  onChange: (category: Category) => void;
};

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  const total = PRODUCTS.length;

  return (
    <div className="flex items-baseline gap-1 px-8 pb-8 pt-2 text-[15px] flex-wrap">
      {CATEGORIES.map((category, i) => {
        const isActive = active === category;
        return (
          <span key={category} className="flex items-baseline">
            {i > 0 && <span className="text-muted mr-1">,</span>}
            <button
              onClick={() => onChange(category)}
              className={`transition-opacity hover:opacity-70 ${
                isActive
                  ? "font-semibold text-foreground"
                  : "text-muted font-normal"
              }`}
            >
              {category}
              {category === "All" && (
                <span className={isActive ? "font-semibold" : "font-normal"}>
                  {" "}({total})
                </span>
              )}
            </button>
          </span>
        );
      })}
    </div>
  );
}
