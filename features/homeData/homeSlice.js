import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeData } from "./homeAPI";

const initialState = {
    homedata: {},
    loading: false,
    error: null
};

export const fetchHomeData = createAsyncThunk(
    'home/api',
    async () => {
        try {
            const response = await getHomeData();
            return response;
        } catch (error) {
            throw Error('Failed to fetch home data');
        }
    }
);

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setHomeData: (state, action) => {
            state.homedata = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeData.pending, (state) => {
                state.loading = true;
                state.error = null; // Clear error when starting to fetch
            })
            .addCase(fetchHomeData.fulfilled, (state, action) => {
                state.loading = false;
                state.homedata = action.payload;
                state.error = null; // Clear error when fetching is successful
            })
            .addCase(fetchHomeData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { setHomeData } = homeSlice.actions;

export default homeSlice.reducer;
