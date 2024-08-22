import React, { useState } from 'react';
import { useAddPostMutation } from '../store/API_Slice';
import { Button, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
    const [addPost] = useAddPostMutation();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addPost({ title, body }).unwrap();
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
                label="Title"
                variant="outlined"
                fullWidth
                margin="normal"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                label="Body"
                variant="outlined"
                fullWidth
                margin="normal"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
                Add Post
            </Button>
        </Box>
    );
};

export default AddPostForm;