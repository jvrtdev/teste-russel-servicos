import HeroSection from "@/presenter/home/hero"
import ProductsSection from "@/presenter/home/products"

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ProductsSection />
    </main>
  )
}
