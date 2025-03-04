"use server"

import { cache } from "react"
import { AllProducts, LogitechProducts, VideoCards } from "../data/products.data"

export const getLogitechProducts = cache(async () => {
  return LogitechProducts
})

export const getVideoCardsProducts = cache(async () => {
  return VideoCards
})

export const getAllProducts = cache(async () => {
  return AllProducts
})

export const getProductBySlug = cache(async (slug: string) => {
  return AllProducts.find((product) => product.slug === slug)
})
  