import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";

const rootElement = document.getElementById("webpack");
const root = ReactDOM.createRoot(rootElement);//DOM root virtual


root.render
(
    //StrictMode evita inyectar JS desde el lado del usuario.
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)