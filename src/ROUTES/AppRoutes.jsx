import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProductList from "./ProductList.jsx";
import {ROUTES} from "../utils/routes.js";
import Cart from './Cart.jsx'

const AppRoutes = () => {
    return (
            <Routes>
                <Route path={ROUTES.HOME} element={<ProductList/>}/>
                <Route path={`${ROUTES.CATEGORY}/:categoriesName`} element={<ProductList/>}/>
                <Route path={ROUTES.CART} element={<Cart/>} />
            </Routes>
    );
};

export default AppRoutes;