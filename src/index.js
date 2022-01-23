import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persist, store } from "./store";
import { ApiServiceProvider } from "./api-service-context/api-service-context";
import ApiService from "./services";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persist}>
                <ApiServiceProvider value={ApiService}>
                    <App />
                </ApiServiceProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
