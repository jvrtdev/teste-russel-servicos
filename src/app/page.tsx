import MaxWidthWrapper from "@/domain/shared/components/max-width-wrapper"
import HeroSection from "@/presenter/home/hero"
import ProductsSection from "@/presenter/home/products"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ProductsSection />
    </main>
  )
}
