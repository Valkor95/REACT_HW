import React from "react";
import CatalogHome from "./pages/CatalogHome";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";

const App = () => {
    return (
        <div>
            <Router>
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
