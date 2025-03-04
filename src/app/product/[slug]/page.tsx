import { getProductBySlug } from "@/domain/actions/products"
import MaxWidthWrapper from "@/domain/shared/components/max-width-wrapper"
import { Button } from "@/domain/shared/components/ui/button"
import { Separator } from "@/domain/shared/components/ui/separator"
import SearchProductByTitle from "@/domain/utils/search-product-by-title.util"
import { SwitchDotToComma } from "@/domain/utils/switch-dot-to-comma"
import Image from "next/image"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  console.log(slug)
  const product = await getProductBySlug(slug)
  console.log("product", product)
  return (
    <div className="w-full h-full bg-Background ">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row  items-center my-10 p-4 md:p-10 gap-10 ">
          <Image
            src={product?.src ?? "/products/product-1.png"}
            width={642}
            height={476}
            alt="Imagem do produto"
            className="mx-auto md:mx-current"
          />

          <div className="flex flex-col space-y-4 ">
            <h1 className="font-bold text-2xl">{product?.title}</h1>
            <div className="flex flex-wrap space-x-2">
              <p className="">Vendido e entregue por</p>
              <span className=" text-Logitech-Accent font-bold">
                Logitech Brasil
              </span>
              <div className="bg-opacity-60 hidden md:block h-4 my-auto bg-black w-[1px] self-stretch "></div>
              <span className="text-Accent font-bold basis-full md:basis-auto">Em estoque</span>
            </div>

            <div className="flex flex-col space-y-1">
              <p className="line-through text-base text-Text">
                R$ {SwitchDotToComma(product?.originalPrice ?? 0)}
              </p>
              <p className=" text-Accent text-[48px] leading-none font-bold">
                R$ {SwitchDotToComma(product?.currentPrice ?? 0)}
              </p>
              <p>à vista no PIX</p>
            </div>

            <div className="flex flex-col md:flex-row space-x-4 space-y-4 ">
              <Button className="bg-Accent w-full text-white font-bold text-xl py-3 px-6 rounded-none hover:border-Accent duration-75 md:max-w-fit">
                COMPRAR
              </Button>
              <Button
                variant="outline"
                className="text-Accent border-Accent hover:bg-Accent-opacity hover:text-Accent font-bold text-xl py-3 px-6 md:max-w-fit rounded-none hover"
              >
                ADICIONAR AO CARRINHO
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
