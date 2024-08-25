import React from "react";
import CatalogPage from './pages/CatalogHome';
import ProductPage from './pages/ProductDetail';
import CartPage from './pages/ShoppingCart';
import CheckoutPage from './pages/Checkout';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";
import Navbar from "./componets/Navbar/Navbar.jsx";

const App = () => {
    return (
        <div>
            <Router>
                <Navbar/>
                <Container>
                    <Routes>
                        <Route path="/" element={<CatalogPage />} />
                        <Route path="/product/:id" element={<ProductPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                    </Routes>
                </Container>
            </Router>
        </div>
    );
};

export default App;
