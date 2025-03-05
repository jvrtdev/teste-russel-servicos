import { ProductCardProps } from "@/domain/@types/product-card.props"
import { getVideoCardsProducts } from "@/domain/actions/products"
import { VideoCards } from "@/domain/data/products.data"
import MaxWidthWrapper from "@/domain/shared/components/max-width-wrapper"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/domain/shared/components/ui/carousel"
import ProductCard from "../components/product-card"

export default async function ProductsSection() {
  const products = await getVideoCardsProducts()

  return (
    <div className="bg-Background w-full h-full p-4 md:p-10">
      <MaxWidthWrapper className=" px-none">
        <div className="flex space-x-2 items-center">
          <h1 className="font-medium text-xl md:text-2xl">Placas de vídeo</h1>
          <span className="bg-Accent-opacity text-sm md:text-base font-sans text-Accent font-bold p-1">
            HARDWARE
          </span>
        </div>

        <Carousel className="w-full mx-auto">
          <CarouselContent className="-ml-1 py-4">
            {products.map((product: ProductCardProps) => (
              <CarouselItem
                key={product.src}
                className="pl-1 sm:basis-1/3 md:basis-1/4"
              >
                <ProductCard variant="product" {...product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </MaxWidthWrapper>
    </div>
  )
}
