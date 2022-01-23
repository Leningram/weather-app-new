import React, { useState } from "react";
import './search-form.scss'
import ApiService from "../../services";
import Button from "../button/button";
import Input from "../input/input";

const SearchForm = ({ className }) => {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState(null);
    const [errorMessage, setErrorMessage] =useState("")

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const searchWeather = () => {
        if (query) {
            ApiService.weather.getCurrentWeatehr(query).then((result) => {
                setErrorMessage("")    
                setWeather(result)
            }).catch(error => setErrorMessage(error.message));
        }
    };

    return (
        <div className={className ? className : ""}>
            <form
                className="search-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    searchWeather();
                }}
            >
                <Input error={errorMessage} placeholder="Введите город" value={query} onChange={handleQueryChange} />
                <Button title="Найти" />
            </form>
            <div>{weather && <p>{Math.round(weather.main.temp)}°C</p>}</div>
        </div>
    );
};

export default SearchForm;
