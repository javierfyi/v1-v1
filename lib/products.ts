export type Product = {
  id: string;
  name: string;
  type: string;
  price: string;
  image: string;
  colors?: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "arc",
    name: "ARC",
    type: "CHAIR",
    price: "2,100.00€",
    image: "/products/arc.svg",
  },
  {
    id: "stairs",
    name: "STAIRS",
    type: "WALL SHELF",
    price: "FROM 480.00€",
    image: "/products/stairs.svg",
    colors: ["#d4a017", "#1a1a1a", "#c62828", "#1565c0"],
  },
  {
    id: "hybrid",
    name: "HYBRID",
    type: "STOOL / SIDE TABLE",
    price: "FROM 900.00€",
    image: "/products/hybrid.svg",
  },
];

export const FEATURED_PRODUCT = {
  name: "HYBRID",
  type: "BENCH / TABLE",
  price: "FROM 1,200.00€",
};
