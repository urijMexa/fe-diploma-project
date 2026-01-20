import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRoutes } from '../../api/api';

// Асинхронный запрос за билетами
export const fetchRoutes = createAsyncThunk(
    'trains/fetchRoutes',
    async (searchParams, { rejectWithValue }) => {
        try {
            const data = await getRoutes(searchParams);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

const initialState = {
    items: [],      // Список поездов
    totalCount: 0,  // Сколько всего найдено
    loading: false,
    error: null,
};

const trainsSlice = createSlice({
    name: 'trains',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRoutes.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.items = [];
            })
            .addCase(fetchRoutes.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.items;
                state.totalCount = action.payload.total_count;
            })
            .addCase(fetchRoutes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default trainsSlice.reducer;
