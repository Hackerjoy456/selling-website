export interface PriceOption {
  duration: string;
  bdt: number;
  inr: number;
  usdt?: number;
  note?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  prices: PriceOption[];
  description?: string;
  features?: string[];
}
