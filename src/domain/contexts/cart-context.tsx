"use client"

import { createContext, useContext, useEffect, useReducer } from "react"
import { CartItem } from "../@types/cart-item"
import { toast } from "sonner"



type CartState = {
  items: CartItem[]
  totalAmount: number
}

// type CartAction = {
//   type: "ADD" | "REMOVE" | "CLEAR"
//   payload: CartItem
// }

type CartAction =
  | { type: "ADD"; payload: CartItem }
  | { type: "REMOVE"; payload: number }
  | { type: "CLEAR" }

const initialState: CartState = {
  items: [],
  totalAmount: 0,
}

const LOCAL_STORAGE_KEY = "cartState"

const getInitialState = (): CartState => {
  if (typeof window === "undefined") return { items: [], totalAmount: 0 }

  const storedCart = localStorage.getItem(LOCAL_STORAGE_KEY)
  return storedCart ? JSON.parse(storedCart) : { items: [], totalAmount: 0 }
}

const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "ADD":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      )

      const updatedItems = existingItem
        ? state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...state.items, { ...action.payload, quantity: 1 }]

      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount + action.payload.price,
      }

    case "REMOVE":
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload,
      )
      if (!itemToRemove) return state

      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        totalAmount:
          state.totalAmount - itemToRemove.price * itemToRemove.quantity,
      }

    case "CLEAR":
      return initialState

    default:
      return state
  }
}

type CartContextType = {
  cart: CartState
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  // dispatch: React.Dispatch<CartAction>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, getInitialState())

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    dispatch({ type: "ADD", payload: item })
    toast.success("Produto adicionado ao carrinho")
  }
  const removeFromCart = (id: number) => {
    dispatch({ type: "REMOVE", payload: id })
    toast.success("Produto removido do carrinho")
  }
  const clearCart = () => {
    dispatch({ type: "CLEAR" })
    toast.success("Carrinho limpo")
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart deve ser usado dentro de um CartProvider");
  return context;
};
