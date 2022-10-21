import { createSlice } from "@reduxjs/toolkit";
// import { json } from "react-router-dom";



const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id)
            console.log(findProduct)

            if (findProduct) {
                findProduct.qty += 1
            } else {
                const productClone = { ...action.payload, qty: 1 };
                state.push(productClone);
            }

        },
        removeFromCart: (state, action) => {
            let newState = state.filter((product) => product.id !== action.payload)
            return newState;
        },
        clear: (state, action) => {
            state = [];
            return state;
        }
    },
});



export const { addToCart, removeFromCart, clear } = cartSlice.actions;

export default cartSlice.reducer;



