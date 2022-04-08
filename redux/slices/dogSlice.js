import { createSlice } from '@reduxjs/toolkit';

const init = {
    listDog: [],
    currentDog: {}
}

export const dogSlice = createSlice({
    name: 'dog',
    initialState: init,
    reducers: {
        SET_LIST_DOG: (state, action) =>
        {
            return { ...state, listDog: action.payload };
        },
        SET_CURRENT_DOG: (state, action) =>
        {
            return { ...state, currentDog: action.payload };
        }
    },
    extraReducers: {}
})

export const { SET_LIST_DOG, SET_CURRENT_DOG } = dogSlice.actions;

export default dogSlice.reducer;