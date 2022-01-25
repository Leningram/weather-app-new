import { createSlice } from "@reduxjs/toolkit";
import {formatWeatherType} from '../../utils/format-weather-type'

export const options = createSlice({
    name: "options",
    initialState: {
        favouriteLocations: [],
        weatherType: "",
    },
    reducers: {
        addToFavourite: (state, action) => {
            state.favouriteLocations =
                state.favouriteLocations.indexOf(action.payload) === -1
                    ? [...state.favouriteLocations, action.payload]
                    : state.favouriteLocations;
        },
        setWeatherType: (state, action) => {
            state.weatherType = formatWeatherType(action.payload)
        }
    }
});

export const {addToFavourite, setWeatherType} = options.actions