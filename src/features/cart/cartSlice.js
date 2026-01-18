
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: {}, totalQuantity: 0, totalPrice: 0 },
  reducers: {
    addToCart(state, action) {
      const plant = action.payload
      if (!state.items[plant.id]) {
        state.items[plant.id] = { ...plant, quantity: 1 }
      }
      state.totalQuantity++
      state.totalPrice += plant.price
    },
    increment(state, action) {
      const item = state.items[action.payload]
      item.quantity++
      state.totalQuantity++
      state.totalPrice += item.price
    },
    decrement(state, action) {
      const item = state.items[action.payload]
      if (item.quantity > 1) {
        item.quantity--
        state.totalQuantity--
        state.totalPrice -= item.price
      }
    },
    removeItem(state, action) {
      const item = state.items[action.payload]
      state.totalQuantity -= item.quantity
      state.totalPrice -= item.price * item.quantity
      delete state.items[action.payload]
    }
  }
})

export const { addToCart, increment, decrement, removeItem } = cartSlice.actions
export default cartSlice.reducer
