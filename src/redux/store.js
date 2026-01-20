import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import trainsReducer from './slices/trainsSlice';
import seatsReducer from './slices/seatsSlice';
import orderReducer from './slices/orderSlice';

const store = configureStore({
    reducer: {
        search: searchReducer,
        trains: trainsReducer,
        seats: seatsReducer,
        order: orderReducer,
    },
});

export default store;
