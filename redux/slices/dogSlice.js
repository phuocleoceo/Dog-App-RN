import { createSlice } from '@reduxjs/toolkit';

const init = {
    listDog: [],
    currentDog: {},
    searchDog: [],
    isSearching: false
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
        },
        SET_SEARCHING: (state, action) =>
        {
            return { ...state, isSearching: action.payload };
        },
        SET_SEARCH_DOG: (state, action) =>
        {
            return { ...state, searchDog: action.payload };
        }
    },
    extraReducers: {}
})

export const { SET_LIST_DOG, SET_CURRENT_DOG,
    SET_SEARCHING, SET_SEARCH_DOG } = dogSlice.actions;

export default dogSlice.reducer;