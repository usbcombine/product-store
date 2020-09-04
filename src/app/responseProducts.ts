import { Product } from './product';

export interface ResponseProducts {
  status: string;
  data: Product[];
}
