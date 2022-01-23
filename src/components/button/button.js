import React from "react";
import './button.scss'

const Button = ({ className, title }) => {
    return (
        <div className={className ? className : ""}>
            <button className="button">{title}</button>
        </div>
    );
};

export default Button;
