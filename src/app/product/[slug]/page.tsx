import { getProductBySlug } from "@/domain/actions/products"
import ProductPageClientSide from "@/presenter/product/product-client-side"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const product = await getProductBySlug(slug)

  if (!product) return <p>Produto não encontrado</p>

  return <ProductPageClientSide {...product} />
}
