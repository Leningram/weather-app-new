import { createSlice } from "@reduxjs/toolkit";

export const options = createSlice({
    name: "options",
    initialState: {
        favouriteLocations: []
    },
    reducers: {
        addToFavourite: (state, action) => {
            state.favouriteLocations =
                state.favouriteLocations.indexOf(action.payload) === -1
                    ? [...state.favouriteLocations, action.payload]
                    : state.favouriteLocations;
        }
    }
});

export const {addToFavourite} = options.actions