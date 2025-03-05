'use client'
import { CartItem } from "@/domain/@types/cart-item"
import { useCart } from "@/domain/contexts/cart-context"
import { Trash2Icon } from "lucide-react"
import Image from "next/image"

export default function CartItemProduct({
  id,
  quantity,
  name,
  price,
  imageUrl,
}: CartItem) {
  const { removeFromCart } = useCart()
  return (
    <div className="border rounded-sm p-2">
      <div className="flex items-center justify-between gap-2">
        <Image src={imageUrl} width={70} height={70} alt={name} />

        <div className="flex flex-col">
          <span className="line-clamp-2" >{name}</span>
          <span>
            {quantity}x R$ {price}
          </span>
        </div>
      </div>
      <div>
        <Trash2Icon
          color="red"
          size={30}
          className="cursor-pointer p-2 shadow-sm ml-auto"
          onClick={() => removeFromCart(id)}
        />
      </div>
    </div>
  )
}
