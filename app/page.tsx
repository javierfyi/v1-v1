"use client";

import { useState } from "react";
import { Header } from "./components/Header";
import { CategoryFilter } from "./components/CategoryFilter";
import { ProductGrid } from "./components/ProductGrid";
import { PRODUCTS } from "@/lib/products";
import type { Category } from "@/lib/products";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      <ProductGrid products={filtered} />
    </div>
  );
}
