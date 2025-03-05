import banner from "@/../public/Banner.png"
import { ProductCardProps } from "@/domain/@types/product-card.props"
import { getLogitechProducts } from "@/domain/actions/products"
import { LogitechProducts } from "@/domain/data/products.data"
import MaxWidthWrapper from "@/domain/shared/components/max-width-wrapper"
import ProductCard from "@/presenter/home/components/product-card"
import Image from "next/image"

export default async function HeroSection() {
  const products = await getLogitechProducts()

  return (
    <div className="bg-color-1 w-full h-full">
      <MaxWidthWrapper className="flex flex-col items-center px-none  p-4 md:p-10">
        <Image
          src={banner}
          className="w-full my-2 mx-auto"
          alt="Banner da logitech"
        />

        <div className="w-full h-full grid grid-cols-1 custom-sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 mt-8 ">
          {products.map((product: ProductCardProps) => (
            <ProductCard variant="promotion" key={product.src} {...product} />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
