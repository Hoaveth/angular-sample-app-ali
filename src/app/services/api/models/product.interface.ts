import { Rating } from './rating.interface';

export interface Product {
  category?: string;
  description?: string;
  id?: number;
  image?: string;
  price?: number;
  rating?: Rating;
  title?: string;
}
