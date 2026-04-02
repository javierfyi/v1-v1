import { Header } from "./components/Header";
import { ProductGrid } from "./components/ProductGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <ProductGrid />
    </div>
  );
}
