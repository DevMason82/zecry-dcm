// /types/product.ts

// 리뷰 정보 타입
interface Review {
  rating: number;
  comment: string;
  date: string; // ISO 8601 형식
  reviewerName: string;
  reviewerEmail: string;
}

// 제품의 크기 관련 타입
interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

// 제품의 메타데이터 타입
interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  thumbnail: string;
  images: string[];
}

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
