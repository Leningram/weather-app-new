import React from "react";
import AlertMessage from "../alert-message/alert-message";
import "./input.scss";

const Input = ({ onChange, className, value, placeholder, error }) => {
    return (
        <div className={`input-container ${className ? className : ""}`}>
            <input className="input" placeholder={placeholder} type="text" value={value} onChange={onChange} />
            {error && <AlertMessage message={error} />}
        </div>
    );
};

export default Input;
