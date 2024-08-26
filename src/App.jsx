import React from "react";
import AppRoutes from "./componets/ROUTES/AppRoutes.jsx";
import HeaderHome from "./componets/Headers/HeaderHome/HeaderHome.jsx";
import Footer from "./componets/Footers/Footer.jsx";
import Sidebar from "./componets/Sidebar/Sidebar.jsx";

const App = () => {
    return (
        <div className='app'>
            <HeaderHome/>

            <div className='container'>
                <Sidebar/>
                <AppRoutes/>
            </div>


            <Footer/>
        </div>
    );
};

export default App;
