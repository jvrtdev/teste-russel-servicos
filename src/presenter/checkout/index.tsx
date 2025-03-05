"use client"
import { useCart } from "@/domain/contexts/cart-context"
import PaymentDetailsSection from "./payment-details"
import SumaryAndDeliverySection from "./sumary-and-delivery"

export default function CheckoutPageRoot() {
  const { cart } = useCart()
  return (
    <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
      <SumaryAndDeliverySection cart={cart.items} />
      <PaymentDetailsSection total={cart.totalAmount} />
    </div>
  )
}
