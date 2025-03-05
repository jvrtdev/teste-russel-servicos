"use client"
import { useCart } from "@/domain/contexts/cart-context"
import { ShoppingCart, Trash2Icon } from "lucide-react"
import { useRouter } from "next/navigation"
import CartItemProduct from "../cart-item"
import { Button } from "../ui/button"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"

export default function Navbar() {
  const { cart, clearCart } = useCart()
  const router = useRouter()

  return (
    <Sheet>
      <SheetTrigger className="relative cursor-pointer shadow-md rounded-sm bg-Background p-2 border h-10 w-10 flex items-center">
        <span className="absolute top-[-8px] right-[-10px] font-bold bg-Logitech-Accent h-5 w-5 text-sm  rounded-full">
          {cart.items.length}
        </span>

        <ShoppingCart size={20} className="" />
      </SheetTrigger>
      <SheetContent side="right" className="md:h-2/4">
        <SheetHeader>
          <SheetTitle>
            <p>Total: R${cart.totalAmount}</p>
          </SheetTitle>
        </SheetHeader>
        <div className="px-4 h-full">
          {cart.items.length > 0 ? (
            cart.items.map((item) => (
              <CartItemProduct key={item.id} {...item} />
            ))
          ) : (
            <p>Seu carinho está vazio</p>
          )}
        </div>
        <SheetFooter className="flex items-center flex-row  justify-between">
          <Button
            disabled={cart.items.length === 0}
            onClick={() => clearCart()}
          >
            <Trash2Icon />
          </Button>
          <Button
            onClick={() => {
              router.push("/checkout")
            }}
          >
            Finalizar compra
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
