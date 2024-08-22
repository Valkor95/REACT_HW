import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsList from './componets/PostsList.jsx';
import AddPostForm from './componets/AddPostForm.jsx';
import EditPostForm from './componets/EditPostForm.jsx';
import { Container } from '@mui/material';

const App = () => {
    return (
        <Router>
            <Container>
                <Routes>
                    <Route path="/" element={<PostsList />} />
                    <Route path="/add" element={<AddPostForm />} />
                    <Route path="/edit/:id" element={<EditPostForm />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
