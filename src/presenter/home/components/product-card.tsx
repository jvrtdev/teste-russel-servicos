"use client"
import { ProductCardProps } from "@/domain/@types/product-card.props"
import { SwitchDotToComma } from "@/domain/utils/switch-dot-to-comma.util"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "../../../domain/shared/components/ui/button"

export default function ProductCard({
  src,
  currentPrice,
  originalPrice,
  title,
  variant = "product",
  className,
  slug,
}: ProductCardProps) {
  const router = useRouter()

  const goToProduct = () => {
    router.push(`/product/${slug}`)
  }

  const variantClasses = {
    product: {
      title: "text-Text",
      originalPrice: "text-Text",
      currentPrice: "text-Text",
      container: "bg-Background shadow-xs text-Text ",
      button: "bg-Accent text-white hover:bg-Accent-opacity hover:text-Accent",
    },
    promotion: {
      title: "text-white",
      originalPrice: "text-white",
      currentPrice: "text-Logitech-Accent",
      container: "text-white shadow-xs bg-linear-to-tr from-color-1 to-color-2",
      button:
        "bg-Logitech-Accent text-Logitech-Text hover:text-Logitech-Accent",
    },
  }

  return (
    <div
      className={cn(
        "mx-auto flex w-full h-full   md:max-w-fit max-h-fit cursor-pointer ",
        variantClasses[variant].container,
        className,
      )}
      onClick={() => goToProduct()}
    >
      <div className="p-4 flex flex-col">
        <Image
          src={src}
          alt="Imagem do produto"
          width={252}
          height={200}
          className="rounded-sm mx-auto aspect-square"
        />

        {variant === "promotion" && (
          <span className="flex space-x-1 items-center mt-4 max-w-fit">
            <Image
              src={"/products/logitech/logo.png"}
              alt="Logo logitech"
              width={26}
              height={24}
              className="w-4.5 h-4 lg:w-6.5 lg:h-6"
            />
            <span className="text-Logitech-Accent  text-sm lg:text-lg">
              LOGITECH
            </span>
          </span>
        )}

        <h1
          className={cn(
            "mt-4 line-clamp-2 lg:line-clamp-3 text-sm lg:text-base lg:h-[74px] font-bold",
            variantClasses[variant].title,
          )}
        >
          {title}
        </h1>

        <div className="my-4 flex flex-col">
          <span
            className={cn(
              "line-through text-xs md:text-base",
              variantClasses[variant].originalPrice,
            )}
          >
            R$ {SwitchDotToComma(originalPrice)}
          </span>
          <span
            className={cn(
              "text-2xl  lg:text-[32px] leading-none font-bold",
              variantClasses[variant].currentPrice,
            )}
          >
            R$ {SwitchDotToComma(currentPrice)}
          </span>
          {variant === "product" && (
            <span className=" md:text-sm text-Accent">
              com 20% de desconto no PIX
            </span>
          )}
        </div>

        <Button
          className={cn(
            "mx-auto w-full font-bold text-base md:text-xl rounded-none transition duration-75 cursor-pointer",
            variantClasses[variant].button,
          )}
          onClick={() => goToProduct()}
        >
          COMPRAR
        </Button>
      </div>
    </div>
  )
}
