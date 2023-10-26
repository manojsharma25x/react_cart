import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  subTotal: 0,
  shipping: 0,
  tax: 0,
  total: 0,
};
export const cartReducer = createReducer(initialState, {
  // add to cart
  addToCart: (state, action) => {
    const item = action.payload;
    const isItemExist = state.cartItems.find((i) => i.id === item.id);
    if (!isItemExist) {
      state.cartItems.push(item);
    } else {
      state.cartItems.forEach((i) => {
        if (i.id === item.id) {
          i.quantity += 1;
        }
      });
    }
  },

  //decreament
  decrement: (state, action) => {
    const item = state.cartItems.find((i) => i.id === action.payload);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    }
  },

  removeFromCart:(state,action)=>{
    state.cartItems = state.cartItems.filter((item)=>item.id!==action.payload)
  },

  calculation : (state)=>{
    let sum = 0;
state.cartItems.forEach((ci)=>{ 
sum += ci.quantity*(ci.price);
});
state.subTotal= sum;
state.shipping = state.subTotal>1000 ? 0 : 200 ;
state.tax = +(state.subTotal*0.18).toFixed()

state.total = +(state.subTotal+state.shipping+state.tax).toFixed()

console.log("subtotal: "+state.subTotal, "shipping: "+state.shipping, "tax: "+ state.tax, "total: "+state.total);
  }
  
});
