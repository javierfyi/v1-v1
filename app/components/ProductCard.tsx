import Image from "next/image";
import type { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col justify-between h-full">
      {/* Product image */}
      <div className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="relative w-full aspect-square max-w-[320px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>

      {/* Product metadata */}
      <div className="px-6 pb-6 pt-4 text-[10px] uppercase tracking-wide leading-relaxed">
        <div className="flex gap-4">
          <span className="text-muted w-16">PRODUCT</span>
          <span className="font-bold">{product.name}</span>
        </div>
        <div className="flex gap-4">
          <span className="text-muted w-16">TYPE</span>
          <span>{product.type}</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-muted w-16">PRICE</span>
          <span>{product.price}</span>
          {product.colors && (
            <div className="flex gap-1 ml-4">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
