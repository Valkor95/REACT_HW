import React from "react";
import RoutesComponent from "./ROUTES/RoutesComponent.jsx";
import {BrowserRouter} from "react-router-dom";
import Header from "./componets/Header/Header.jsx";
import Footer from "./componets/Footer/Footer.jsx";
import Sidebar from "./componets/Sidebar/Sidebar.jsx";

const App = () => {
    return (
        <div className='App'>
            <Header/>
            <div className='container'>
                <Sidebar/>
                <RoutesComponent/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
