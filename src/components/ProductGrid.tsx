import type { Product } from "../types/product";
import { ProductCard } from "./ProductCard";
import { SearchBar } from "./SearchBar";
import { useState, useMemo } from "react";

interface ProductGridProps {
  products: Product[];
  selectedProductIds: string[];
  onToggleSelect: (productId: string) => void;
}

export function ProductGrid({
  products,
  selectedProductIds,
  onToggleSelect,
}: ProductGridProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;

    const query = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.price.toString().toLowerCase().includes(query) ||
        Object.values(product.features).some((value) =>
          value.toString().toLowerCase().includes(query)
        )
    );
  }, [products, searchQuery]);

  return (
    <div className="space-y-6">
      <SearchBar onSearch={setSearchQuery} />

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No products found matching "{searchQuery}"
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isSelected={selectedProductIds.includes(product.id)}
              onToggleSelect={onToggleSelect}
              disabled={
                selectedProductIds.length >= 3 &&
                !selectedProductIds.includes(product.id)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
