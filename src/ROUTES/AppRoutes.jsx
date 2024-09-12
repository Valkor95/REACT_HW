import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProductList from "./ProductList.jsx";
import {ROUTES} from "../utils/routes.js";
import Cart from './Cart.jsx'
import CardProduct from "./CardProduct.jsx";
import Checkout from "./Checkout.jsx";

const AppRoutes = () => {
    return (
            <Routes>
                <Route path={ROUTES.HOME} element={<ProductList/>}/>
                <Route path={`${ROUTES.CATEGORY}/:categoriesName`} element={<ProductList/>}/>
                <Route path={ROUTES.CART} element={<Cart/>} />
                <Route path={`${ROUTES.CARD}/:id`} element={<CardProduct/>} />
                <Route path={ROUTES.CHECKOUT} element={<Checkout/>} />
            </Routes>
    );
};

export default AppRoutes;