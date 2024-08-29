import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProductList from "../componets/ProductList/ProductList.jsx";
import Categories from "./Categories.jsx";

const AppRoutes = () => {
    return (
            <Routes>
                <Route path='/' element={<ProductList/>}/>
                <Route path='/category/:categoriesName' element={<ProductList/>}/>
            </Routes>
    );
};

export default AppRoutes;