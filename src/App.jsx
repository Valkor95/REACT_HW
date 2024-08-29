import React from "react";
import AppRoutes from "./ROUTES/AppRoutes.jsx";
import HeaderHome from "./componets/Headers/HeaderHome/HeaderHome.jsx";
import Footer from "./componets/Footers/Footer.jsx";
import Sidebar from "./componets/Sidebar/Sidebar.jsx";
import BaseTemplate from "./componets/BaseTemplate/BaseTemplate.jsx";
import {Col, Row} from "react-bootstrap";

const App = () => {
    return (
        <div className='app'>
            <BaseTemplate maxWidth='xl'>
                <HeaderHome/>
            </BaseTemplate>


            <BaseTemplate maxWidth='xl'>
                <div className="d-flex" style={{ height: '100%' }}>
                    <div className="sidebar" style={{ flex: '0 0 250px' }}>
                        <BaseTemplate maxWidth='xl'>
                            <Sidebar />
                        </BaseTemplate>
                    </div>

                    <div className="flex-grow-1">
                        <BaseTemplate maxWidth='xl'>
                            <AppRoutes />
                        </BaseTemplate>
                    </div>
                </div>
            </BaseTemplate>

            <BaseTemplate maxWidth='xl'>
                <Footer/>
            </BaseTemplate>
        </div>
    );
};

export default App;
