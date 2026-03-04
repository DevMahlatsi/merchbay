export type ProductLayoutProps = {
  title: string;
  products: Product[];
  //we are expecting a json file here
}
export type HeaderProps = {
  headingTitle: string;
}
export type ToastProps = {
  message: string;
  visible: boolean;
  onClose: () => void;
};

export interface Variant {
  size: string;
  price: number;
  available: boolean;
}

export interface ProductImages {
  main: string;
  mockup: string;
}

export interface Product {
  plid: number;
  title: string;
  variants: Variant[];
  images: ProductImages;
}
export interface ProductCardProps {
  products: Product[];
}
export interface ImageCarouselProps{
  images: string[];
  productTitle: string;
}