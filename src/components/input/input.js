import React from "react";
import './input.scss'

const Input = ({ onChange, className, value, placeholder }) => {
    return (
        <div className={className ? className : ""}>
            <input className="input" placeholder={placeholder} type="text" value={value} onChange={onChange} />
        </div>
    );
};

export default Input;
