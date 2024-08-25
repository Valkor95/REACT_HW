import React from "react";
import CatalogPage from './pages/CatalogHome';
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
                    </Routes>
                </Container>
            </Router>
        </div>
    );
};

export default App;
