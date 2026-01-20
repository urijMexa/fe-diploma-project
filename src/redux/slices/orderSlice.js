import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    passengers: [
        { id: Date.now(), type: 'adult', surname: '', name: '', patronymic: '', gender: 'M', birth: '', docType: 'Паспорт РФ', series: '', number: '', isExpanded: true }
    ],
    user: { surname: '', name: '', patronymic: '', phone: '', email: '', paymentMethod: '' }
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addPassenger: (state) => {
            state.passengers.push({ id: Date.now(), type: 'adult', surname: '', name: '', patronymic: '', gender: 'M', birth: '', docType: 'Паспорт РФ', series: '', number: '', isExpanded: true });
        },
        removePassenger: (state, action) => {
            state.passengers = state.passengers.filter(p => p.id !== action.payload);
        },
        updatePassenger: (state, action) => {
            const { id, field, value } = action.payload;
            const p = state.passengers.find(p => p.id === id);
            if (p) p[field] = value;
        },
        togglePassenger: (state, action) => {
            const p = state.passengers.find(p => p.id === action.payload);
            if (p) p.isExpanded = !p.isExpanded;
        },
        updateUser: (state, action) => {
            state.user = { ...state.user, ...action.payload };
        },
        resetOrder: (state) => {
            state.passengers = [{ id: Date.now(), type: 'adult', surname: '', name: '', patronymic: '', gender: 'M', birth: '', docType: 'Паспорт РФ', series: '', number: '', isExpanded: true }];
            state.user = { surname: '', name: '', patronymic: '', phone: '', email: '', paymentMethod: '' };
        }
    }
});

export const { addPassenger, removePassenger, updatePassenger, togglePassenger, updateUser, resetOrder } = orderSlice.actions;
export default orderSlice.reducer;
