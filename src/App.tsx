import { products } from "./data/products";
import { ProductGrid } from "./components/ProductGrid";
import { ComparisonTable } from "./components/ComparisonTable";
import { Badge } from "./components/ui/badge";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [selectedProductIds, setSelectedProductIds] = useLocalStorage<string[]>(
    "selectedProducts",
    []
  );

  const updateSelectedProducts = (newIds: string[]) => {
    setSelectedProductIds(newIds);
  };

  const handleToggleSelect = (productId: string) => {
    if (selectedProductIds.includes(productId)) {
      updateSelectedProducts(
        selectedProductIds.filter((id) => id !== productId)
      );
    } else if (selectedProductIds.length < 3) {
      updateSelectedProducts([...selectedProductIds, productId]);
    }
  };

  const handleRemoveProduct = (productId: string) => {
    updateSelectedProducts(selectedProductIds.filter((id) => id !== productId));
  };

  const handleClearAll = () => {
    updateSelectedProducts([]);
  };

  const selectedProducts = products.filter((product) =>
    selectedProductIds.includes(product.id)
  );

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-center mb-2">
                  Product Comparison
                </h1>
                <p className="text-center text-muted-foreground mb-4">
                  Select up to 3 products to compare their features side by side
                </p>
                {selectedProductIds.length > 0 && (
                  <div className="flex justify-center">
                    <Badge variant="default" className="text-sm">
                      {selectedProductIds.length}/3 products selected
                    </Badge>
                  </div>
                )}
              </div>
              <ThemeToggle />
            </div>
          </header>

          <main className="space-y-8">
            {selectedProducts.length >= 2 && (
              <ComparisonTable
                selectedProducts={selectedProducts}
                onRemoveProduct={handleRemoveProduct}
                onClearAll={handleClearAll}
              />
            )}

            <section>
              <h2 className="text-2xl font-bold mb-6">Available Products</h2>
              <ProductGrid
                products={products}
                selectedProductIds={selectedProductIds}
                onToggleSelect={handleToggleSelect}
              />
            </section>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
