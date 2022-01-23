import React from "react";
import "./alert-message.scss";
import { AlertIcon } from "../../assets/icons";

const AlertMessage = ({ message, className }) => {
    return (
        <div className="alert-message-container">
            <AlertIcon />
            <p className="alert-message-text">{message}</p>
        </div>
    );
};

export default AlertMessage;
