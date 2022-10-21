import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchProducts = createAsyncThunk("productsSLice/fetchProducts", async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
})


const productsSLice = createSlice({
    initialState: [],
    name: "productsSLice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return  action.payload
        })
    }
});


// export const { } = productsSLice.actions;
export default productsSLice.reducer;