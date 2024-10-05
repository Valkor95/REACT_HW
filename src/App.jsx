import React from "react";
import RoutesComponent from "./ROUTES/RoutesComponent.jsx";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <RoutesComponent/>
        </BrowserRouter>
    );
};

export default App;
