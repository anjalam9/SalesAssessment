import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface ProductDetails {
	id: '';
	title: '';
	image: '';
	subtitle: '';
	brand: '';
	reviews: [];
	retailer: '';
	details: [];
	tags: [];
	sales: [];
}

export const fetchData = createAsyncThunk<ProductDetails>("fetchData", async () => {
    const res = await fetch(`https://mocki.io/v1/a0d1bf73-b638-4d70-8b7f-c87d64c501c7`);
    const data = await res.json();
    const product = data[0]
    return product as ProductDetails;
});

interface DataState {
    isLoading: boolean;
    isError: boolean;
    data: any
}

const initialState: DataState = {
    isLoading: false,
    isError: false,
    data: {}
};

const dataSlice: any = createSlice({
    name: "dataReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<ProductDetails>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchData.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});

export default dataSlice.reducer;
