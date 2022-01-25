import React, { useEffect, useState } from "react";
import "./App.scss";
import SearchForm from "./components/search-form/search-form";
import {useWeatherTypeSelector} from './store/options'

function App() {
    const weatherType = useWeatherTypeSelector();
    const [weatherBackground, setWeatherBackground] = useState('')

    useEffect(() => {
        setWeatherBackground(weatherType)
    },[weatherType])
    return (
        <div className={`App ${weatherBackground}`}>
            <SearchForm />
        </div>
    );
}

export default App;
