export interface SingleWatch {
  id: number | string;
  name: string;
  price: number;
  hasDiscount: boolean;
  discount: number;
  material: string;
  strap: string;
  color?: string;
  brand: string;
  gender?: string;
  picture: string;
  description?: string;
  isLoggedIn?: boolean;
}

export interface WatchesDataType {
  data: SingleWatch[];
  totalPages: number | string;
}

export interface Filters {
  price?: { min: string | number; max: string | number };
  material?: string;
  strap?: string;
  color?: string;
  brand?: string;
  gender?: string;
}

export interface SearchParams {
  page: string | number;
  filters?: string;
  sort: string;
}

export interface Params {
  productId: string | number;
}

export interface WatchElement {
  name?: string;
  price?: number;
  hasDiscount?: boolean;
  discount?: number;
  material?: string;
  strap?: string;
  color?: string;
  brand?: string;
  gender?: string;
  description?: string;
}

export interface User {
  id: number;
  email: string;
  password?: string;
  phoneNumber?: string | number;
  zipCode?: number | string;
  address?: string;
  profileImage?: string;
}

export interface Cart {
  id: number;
  userId: number;
  products: Record<string, number>[];
}
