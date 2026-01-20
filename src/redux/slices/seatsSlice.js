import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSeats } from '../../api/api';

export const fetchSeats = createAsyncThunk(
    'seats/fetchSeats',
    async (trainId, { rejectWithValue }) => {
        try {
            const data = await getSeats(trainId);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

const initialState = {
    trainId: null,      // ID выбранного поезда
    coaches: [],        // Список вагонов
    loading: false,
    error: null,
};

const seatsSlice = createSlice({
    name: 'seats',
    initialState,
    reducers: {
        setTrainId: (state, action) => {
            state.trainId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSeats.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSeats.fulfilled, (state, action) => {
                state.loading = false;
                state.coaches = action.payload;
            })
            .addCase(fetchSeats.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setTrainId } = seatsSlice.actions;
export default seatsSlice.reducer;
