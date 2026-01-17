import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    route: {
        from_city_id: null,
        to_city_id: null,
        date_start: null,
        date_end: null,
    },
    cities: {
        from: null,
        to: null,
    }
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setCityFrom: (state, action) => {
            state.cities.from = action.payload;
            state.route.from_city_id = action.payload?._id || null;
        },
        setCityTo: (state, action) => {
            state.cities.to = action.payload;
            state.route.to_city_id = action.payload?._id || null;
        },
        setDateStart: (state, action) => {
            state.route.date_start = action.payload;
        },
        setDateEnd: (state, action) => {
            state.route.date_end = action.payload;
        },
        swapCities: (state) => {
            const tempCity = state.cities.from;
            state.cities.from = state.cities.to;
            state.cities.to = tempCity;

            const tempId = state.route.from_city_id;
            state.route.from_city_id = state.route.to_city_id;
            state.route.to_city_id = tempId;
        },
        clearSearch: (state) => {
            return initialState;
        }
    },
});

export const {
    setCityFrom,
    setCityTo,
    setDateStart,
    setDateEnd,
    swapCities,
    clearSearch
} = searchSlice.actions;

export default searchSlice.reducer;
