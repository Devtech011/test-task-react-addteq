import type { Product } from "../types/product";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onToggleSelect: (productId: string) => void;
  disabled: boolean;
}

export function ProductCard({
  product,
  isSelected,
  onToggleSelect,
  disabled,
}: ProductCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!disabled || isSelected) {
        onToggleSelect(product.id);
      }
    }
  };

  return (
    <Card
      className={`relative transition-all duration-200 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ${
        isSelected ? "ring-2 ring-ring shadow-lg" : "hover:shadow-md"
      }`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="button"
      aria-label={`${product.name} - ${product.brand} - $${product.price}`}
      aria-pressed={isSelected}
    >
      <CardHeader>
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <Badge variant="secondary" className="text-xs">
            {product.brand}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-2xl font-bold">${product.price}</div>
        <div className="space-y-1">
          {Object.entries(product.features).map(([key, value]) => (
            <div key={key} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{key}:</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>
        <Button
          onClick={() => onToggleSelect(product.id)}
          disabled={disabled && !isSelected}
          variant={"default"}
          className="w-full"
          aria-label={
            isSelected
              ? `Remove ${product.name} from comparison`
              : `Add ${product.name} to comparison`
          }
        >
          {isSelected ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Selected
            </>
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" />
              Add to Compare
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
