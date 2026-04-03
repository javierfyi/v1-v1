import type { Product } from "@/lib/products";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-4 border-t border-border/60">
      {products.map((product) => (
        <div
          key={product.id}
          className="border-b border-r border-border/60 last:border-r-0 [&:nth-child(4n)]:border-r-0"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
