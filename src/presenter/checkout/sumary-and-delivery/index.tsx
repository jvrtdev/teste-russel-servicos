import { CartItem } from "@/domain/@types/cart-item"
import Image from "next/image"

export default function SumaryAndDeliverySection({
  cart,
}: {
  cart: CartItem[]
}) {
  return (
    <div className="px-4 pt-8">
      <p className="text-xl font-medium">Resumo do carrinho</p>
      <p className="text-gray-400">
        Verifique seus itens e escolha o método de entrega
      </p>
      <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
        {cart.map((item) => (
          <div
            className="flex flex-col rounded-lg bg-white sm:flex-row"
            key={item.id}
          >
            <Image
              width={28}
              height={24}
              className="m-2 h-24 w-28 rounded-md border object-cover object-center"
              src={item.imageUrl}
              alt="Imagem do produto"
            />
            <div className="flex w-full flex-col px-4 py-4">
              <span className="font-semibold">{item.name}</span>
              <span className="float-right text-gray-400">
                x{item.quantity}
              </span>
              <p className="text-lg font-bold">R$ {item.price}</p>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  )
}
