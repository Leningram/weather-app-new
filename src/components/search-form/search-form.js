import React, { useState } from "react";
import ApiService from "../../services";
import Button from "../button/button";
import Input from "../input/input";

const SearchForm = ({ className }) => {
    const [query, setQuery] = useState("");
    const [temp, setTemp] = useState(null);

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const searchWeather = () => {
        ApiService.weather.getCurrentWeatehr(query).then((result) => setTemp(result.main.temp));
    };

    return (
        <div className={className ? className : ""}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    searchWeather();
                }}
            >
                <Input placeholder="Введите город" value={query} onChange={handleQueryChange} />
                <Button title="Найти" />
            </form>
            <div>{temp && <p>{Math.round(temp)}°C</p>}</div>
        </div>
    );
};

export default SearchForm;
