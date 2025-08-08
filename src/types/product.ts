export interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  features: {
    [key: string]: string | number;
  };
}

export interface CompareItem {
  product: Product;
  isSelected: boolean;
} 