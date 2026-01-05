export type ProductLayoutProps = {
  title: string;
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

export interface Rating {
  rate: number;
  count: number;
};
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export interface ProductCardProps {
  products: Product[];
}
export interface ImageCarouselProps{
  images: string[];
  productTitle: string;
}