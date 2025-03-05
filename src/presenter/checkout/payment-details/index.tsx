import { SwitchDotToComma } from "@/domain/utils/switch-dot-to-comma.util"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const paymentFields = [
  {
    id: "email",
    name: "email",
    type: "text",
    placeholder: "seu.email@gmail.com",
    label: "Email",
  },
  {
    id: "card-holder",
    name: "card-holder",
    type: "text",
    placeholder: "Nome completo",
    label: "Nome no cartao",
  },
  {
    id: "card-no",
    name: "card-no",
    type: "text",
    placeholder: "xxxx-xxxx-xxxx-xxxx",
    label: "Numero do cartão",
  },
  {
    id: "credit-expiry",
    name: "credit-expiry",
    type: "text",
    placeholder: "MM/AAAA",
    label: "Data de vencimento",
  },
]

export default function PaymentDetailsSection({ total }: { total: number }) {
  const router = useRouter()
  return (
    <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
      <p className="text-xl font-medium">Detalhes do pagamento</p>
      <p className="text-gray-400">
        Complete seu pedido preenchendo os detalhes do pagamento
      </p>
      <div className="">
        {paymentFields.map((field) => (
          <div key={field.id} className="mt-4">
            <label
              htmlFor={field.id}
              className="mb-2 block text-sm font-medium"
            >
              {field.label}
            </label>

            <input
              type={field.type}
              id={field.id}
              name={field.name}
              placeholder={field.placeholder}
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        ))}

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Total</p>
          <p className="text-2xl font-semibold text-gray-900">
            R$ {SwitchDotToComma(total)}
          </p>
        </div>
      </div>
      <button
        className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
        onClick={() => {
          router.replace("/")
          toast.success("Pedido realizado com sucesso!")
        }}
      >
        Place Order
      </button>
    </div>
  )
}
