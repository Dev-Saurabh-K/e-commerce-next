import { create } from "zustand";

export const useCounterStore = create((set) => ({

  // var1 for no of items
  count: 0,
  price: 0,
  add: (mrp)=>{
    set((state)=>({count: state.count + 1 }));
    set((state)=>({price: state.price + mrp}));
  },
  subtract: (mrp)=>{
    set((state)=>({count: state.count - 1 }));
    set((state)=>({price: state.price - mrp}));
  },

  // var 2 for Cart Button
  isCartActive: false,
  setIsCartActive: ()=>{
    set((state)=>({isCartActive: !state.isCartActive}))
  },

  //var 3 for cart page state
  cartPageState: false,
  setCartPageState: ()=>{
    set((state)=>({cartPageState: !state.cartPageState}))
  },
}));
