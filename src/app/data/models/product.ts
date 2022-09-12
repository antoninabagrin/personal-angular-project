export interface Product {
  id: number | string;
  imageUrl: string;
  price: number | string;
  title?: string;
  description?: string;
  color?: string;
  material?: string;
}
