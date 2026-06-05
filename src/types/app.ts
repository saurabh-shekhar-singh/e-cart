export type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity?: number;
  rating: {
    rate: number;
    count: number;
  };
};

export type Cart = Products & {
  quantity: number;
};

export type ProductState<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};