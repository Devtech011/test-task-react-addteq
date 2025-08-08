import type { Product } from "../types/product";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { X, TrendingUp, TrendingDown } from "lucide-react";

interface ComparisonTableProps {
  selectedProducts: Product[];
  onRemoveProduct: (productId: string) => void;
  onClearAll: () => void;
}

export function ComparisonTable({
  selectedProducts,
  onRemoveProduct,
  onClearAll,
}: ComparisonTableProps) {
  const allFeatures = new Set<string>();
  selectedProducts.forEach((product) => {
    Object.keys(product.features).forEach((feature) =>
      allFeatures.add(feature)
    );
  });

  const extractNumericValue = (value: string | number): number | null => {
    if (typeof value === "number") return value;
    if (typeof value === "string") {
      const match = value.match(/[\d.]+/);
      return match ? parseFloat(match[0]) : null;
    }
    return null;
  };

  const getAverageValue = (feature: string) => {
    const values = selectedProducts
      .map((p) => p.features[feature])
      .filter(Boolean)
      .map(extractNumericValue)
      .filter((val): val is number => val !== null);

    if (values.length === 0) return null;
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
  };

  const getPercentageDifference = (value: number, average: number) => {
    if (average === 0) return 0;
    return ((value - average) / average) * 100;
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-bold">Product Comparison</h2>
        <Button
          variant="outline"
          onClick={onClearAll}
          aria-label="Clear all selected products"
        >
          <X className="mr-2 h-4 w-4" />
          Clear All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left p-3 font-semibold min-w-[250px]">
                  Features
                </th>
                {selectedProducts.map((product) => (
                  <th
                    key={product.id}
                    className="p-3 text-center font-semibold relative  border-l border-border "
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveProduct(product.id)}
                      className="absolute -top-0 -right-0 h-6 w-6 p-0 hover:bg-destructive/10 hover:text-destructive transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                    <div className="flex items-center gap-4 justify-center min-w-[250px]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-lg border-2 border-border hover:border-ring transition-colors"
                      />
                      <div className="flex flex-col items-start justify-center">
                        <div className="flex flex-col items-start justify-center">
                          <div className="font-medium">{product.name}</div>
                          <Badge variant="secondary" className="text-xs">
                            {product.brand}
                          </Badge>
                        </div>
                        <div className="text-2xl font-bold">
                          ${product.price}
                        </div>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from(allFeatures).map((feature) => {
                const averageValue = getAverageValue(feature);

                return (
                  <tr
                    key={feature}
                    className={`border-b hover: transition-colors`}
                  >
                    <td className="p-3 font-medium ">
                      <div className="flex items-center gap-2">{feature}</div>
                    </td>
                    {selectedProducts.map((product) => {
                      const value = product.features[feature];
                      const numericValue = extractNumericValue(value);
                      const percentageDiff =
                        averageValue && numericValue !== null
                          ? getPercentageDifference(numericValue, averageValue)
                          : null;

                      return (
                        <td
                          key={product.id}
                          className={`p-3 text-center border-l border-border transition-all duration-200 min-w-[250px]`}
                        >
                          <div className="flex flex-col items-center justify-center gap-1">
                            <div className="flex items-center justify-center gap-2">
                              <span className="font-medium flex items-center justify-center gap-2">
                                {value}
                                {percentageDiff !== null && (
                                  <Badge variant={"secondary"}>
                                    {percentageDiff > 0 ? (
                                      <>
                                        <TrendingUp className="h-3 w-3 " />
                                        <span className="">
                                          {percentageDiff.toFixed(0)}%
                                        </span>
                                      </>
                                    ) : percentageDiff < 0 ? (
                                      <>
                                        <TrendingDown className="h-3 w-3 " />
                                        <span className="">
                                          {Math.abs(percentageDiff).toFixed(0)}%
                                        </span>
                                      </>
                                    ) : (
                                      <span className="text-muted-foreground">
                                        0%
                                      </span>
                                    )}
                                  </Badge>
                                )}
                              </span>
                            </div>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
