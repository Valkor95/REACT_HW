import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProductList from "../ProductList/ProductList.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={ProductList}/>
        </Routes>
    );
};

export default AppRoutes;