import React from "react";
import AppRoutes from "./componets/ROUTES/AppRoutes.jsx";
import HeaderHome from "./componets/Headers/HeaderHome/HeaderHome.jsx";
import Footer from "./componets/Footers/Footer.jsx";
import Sidebar from "./componets/Sidebar/Sidebar.jsx";
import BaseTemplate from "./componets/BaseTemplate/BaseTemplate.jsx";

const App = () => {
    return (
        <div className='app'>
            <BaseTemplate maxWidth='xl'>
                <HeaderHome/>
            </BaseTemplate>

            <BaseTemplate maxWidth='xl'>
                <div className='container'>
                    <Sidebar/>
                    <AppRoutes/>
                </div>
            </BaseTemplate>

            <BaseTemplate maxWidth='xl'>
                <Footer/>
            </BaseTemplate>
        </div>
    );
};

export default App;
