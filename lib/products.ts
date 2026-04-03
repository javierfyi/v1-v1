export type Category = "All" | "Seating" | "Tables" | "Lighting" | "Storage" | "Objects";

export type Product = {
  id: string;
  name: string;
  category: Category;
  image: string;
};

export const CATEGORIES: Category[] = [
  "All",
  "Seating",
  "Tables",
  "Lighting",
  "Storage",
  "Objects",
];

export const PRODUCTS: Product[] = [
  {
    id: "chair-dark",
    name: "Lina Chair",
    category: "Seating",
    image: "/products/chair-dark.svg",
  },
  {
    id: "stool-white",
    name: "Alto Stool",
    category: "Seating",
    image: "/products/stool-white.svg",
  },
  {
    id: "table-round",
    name: "Orb Table",
    category: "Tables",
    image: "/products/table-round.svg",
  },
  {
    id: "floor-lamp",
    name: "Stem Floor Lamp",
    category: "Lighting",
    image: "/products/floor-lamp.svg",
  },
  {
    id: "table-lamp",
    name: "Cone Table Lamp",
    category: "Lighting",
    image: "/products/table-lamp.svg",
  },
  {
    id: "shelf-unit",
    name: "Tier Shelf",
    category: "Storage",
    image: "/products/shelf-unit.svg",
  },
  {
    id: "side-table",
    name: "Duo Side Table",
    category: "Tables",
    image: "/products/side-table.svg",
  },
  {
    id: "console-dark",
    name: "Line Console",
    category: "Tables",
    image: "/products/console-dark.svg",
  },
  {
    id: "bench-low",
    name: "Plank Bench",
    category: "Seating",
    image: "/products/bench-low.svg",
  },
  {
    id: "stool-round",
    name: "Dot Stool",
    category: "Seating",
    image: "/products/stool-round.svg",
  },
  {
    id: "desk-lamp",
    name: "Arc Desk Lamp",
    category: "Lighting",
    image: "/products/desk-lamp.svg",
  },
  {
    id: "storage-box",
    name: "Mono Cabinet",
    category: "Storage",
    image: "/products/storage-box.svg",
  },
];
