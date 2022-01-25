import { useSelector } from "react-redux";

export const useFavLocationsSelector = () => {
    return useSelector(state => state.options.favouriteLocations)
}

export const useWeatherTypeSelector = () => {
    return useSelector(state => state.options.weatherType)
}