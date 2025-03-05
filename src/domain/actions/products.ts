"use server"

import { cache } from "react"
import { AllProducts, LogitechProducts, VideoCards } from "../data/products.data"

export const getLogitechProducts = cache(async () => {
  return await LogitechProducts
})

export const getVideoCardsProducts = cache(async () => {
  return await VideoCards
})

export const getAllProducts = cache(async () => {
  return await AllProducts
})

export const getProductBySlug = cache(async (slug: string) => {
  return await AllProducts.find((product) => product.slug === slug)
})
