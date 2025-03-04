export type ProductCardProps = {
  src: string;
  title: string;
  currentPrice: number;
  originalPrice: number;
  variant?: "product" | "promotion" ;
  className?: string;
  slug: string
  id?: number
}
