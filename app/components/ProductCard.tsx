import Image from "next/image";
import type { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex items-center justify-center aspect-square cursor-pointer hover:opacity-80 transition-opacity">
      <div className="relative w-3/5 h-3/5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
    </div>
  );
}
