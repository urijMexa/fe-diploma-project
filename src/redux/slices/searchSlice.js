import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCities } from '../../api/api';

export const fetchCities = createAsyncThunk(
    'search/fetchCities',
    async (search, { rejectWithValue }) => {
        try {
            const data = await getCities(search);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    route: {
        from_city_id: null,
        to_city_id: null,
        date_start: '',
        date_end: '',
    },
    cities: {
        from: null,
        to: null,
    },
    autocomplete: {
        items: [],
        loading: false,
        error: null,
    }
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setCityFrom: (state, action) => {
            state.cities.from = action.payload;
            state.route.from_city_id = action.payload._id;
        },
        setCityTo: (state, action) => {
            state.cities.to = action.payload;
            state.route.to_city_id = action.payload._id;
        },
        setDateStart: (state, action) => {
            state.route.date_start = action.payload;
        },
        setDateEnd: (state, action) => {
            state.route.date_end = action.payload;
        },
        clearAutocomplete: (state) => {
            state.autocomplete.items = [];
        },
        // ВОТ ТО, ЧТО МЫ ДОБАВИЛИ ОБРАТНО:
        clearSearch: (state) => {
            state.cities = { from: null, to: null };
            state.route = { from_city_id: null, to_city_id: null, date_start: '', date_end: '' };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCities.pending, (state) => {
                state.autocomplete.loading = true;
                state.autocomplete.error = null;
            })
            .addCase(fetchCities.fulfilled, (state, action) => {
                state.autocomplete.loading = false;
                state.autocomplete.items = action.payload;
            })
            .addCase(fetchCities.rejected, (state, action) => {
                state.autocomplete.loading = false;
                state.autocomplete.error = action.payload;
            });
    },
});

export const {
    setCityFrom,
    setCityTo,
    setDateStart,
    setDateEnd,
    clearAutocomplete,
    clearSearch // Не забудь экспортировать!
} = searchSlice.actions;

export default searchSlice.reducer;
