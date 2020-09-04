export interface Product {
  uuid: string;
  currency: string;
  delivery_cost: number | string;
  description: string;
  // images: [] | null;
  price: number | string;
  price_offer: number | string;
  stock: number | string;
  sku: string;
  title: string;
  created: string | null;
  updated: string | null;
}
