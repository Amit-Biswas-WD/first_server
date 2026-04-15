export interface IProduct {
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string[];
  category: string;
  brand: string;
  rating: number;
  review: {
    user: string;
    comment: string;
    rating: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
}
