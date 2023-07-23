// product.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  quantity?: number;  // Opcional, para el carrito de compras
}
