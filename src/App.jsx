import ContactList from "./componets/ContactList.jsx";
import ContactForm from "./componets/ContactForm.jsx";
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container} from "@mui/material";


const App = () => {
    return (
        <Router>
            <Container>
                <Routes>
                    <Route path='/' element={<ContactList/>}/>
                    <Route path='/add' element={<ContactForm/>}/>
                    <Route path='/edit/:id' element={<ContactForm/>}/>
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
