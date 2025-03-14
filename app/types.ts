interface SingleWatch {
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
}

interface WatchesDataType {
  data: SingleWatch[];
  totalPages: number | string;
}

interface Filters {
  price?: { min: string | number; max: string | number };
  material?: string;
  strap?: string;
  color?: string;
  brand?: string;
  gender?: string;
}

interface SearchParams {
  page: string | number;
  filters?: string;
  sort: string;
}

interface Params {
  productId: string | number;
}
