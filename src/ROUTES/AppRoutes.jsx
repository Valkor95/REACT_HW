import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProductList from "../componets/ProductList/ProductList.jsx";

const AppRoutes = () => {
    return (
            <Routes>
                <Route index element={<ProductList/>}/>
                <Route path='/categories/:categoriesName' element={<ProductList/>}/>
            </Routes>
    );
};

export default AppRoutes;