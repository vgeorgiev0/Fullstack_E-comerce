export interface BannerData {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  buttonText: string;
  desc: string;
  discount: string;
  image: BannerImage;
  largeText1: string;
  largeText2: string;
  midText: string;
  product: string;
  saleTime: string;
  smallText: string;
}
export interface BannerImage {
  _type: string;
  asset: BannerAsset;
}
export interface BannerAsset {
  _ref: string;
  _type: string;
}

export interface ProductType {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  details: string;
  image?: ( ProductImage )[] | null;
  name: string;
  price: number;
  slug: Slug;
}
export interface ProductImage {
  _key: string;
  _type: string;
  asset: ProductAsset;
}
export interface ProductAsset {
  _ref: string;
  _type: string;
}
export interface Slug {
  _type: string;
  current: string;
}