import { ProductCardProps } from "../@types/product-card.props"
import { LogitechProducts, VideoCards } from "../data/products.data"

export default function SearchProductByTitle(
  title: string,
): ProductCardProps | undefined {
  const allProducts = [...LogitechProducts, ...VideoCards]
  return allProducts.find((product) => product.title === title)
}
