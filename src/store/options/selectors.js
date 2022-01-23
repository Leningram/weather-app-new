import { useSelector } from "react-redux";

export const useFavLocationsSelector = () => {
    return useSelector(state => state.options.favouriteLocations)
}