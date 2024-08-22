import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetPostsQuery, useUpdatePostMutation } from '../store/API_Slice';
import { Button, TextField, Box, Typography } from '@mui/material';

const EditPostForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: posts, error, isLoading } = useGetPostsQuery();
    const [updatePost] = useUpdatePostMutation();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if (posts && posts.length > 0) {
            const currentPost = posts.find(p => p.id === parseInt(id));
            if (currentPost) {
                setTitle(currentPost.title);
                setBody(currentPost.body);
            }
        }
    }, [posts, id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updatePost({ id, title, body }).unwrap();
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    if (isLoading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>Error fetching post.</Typography>;

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
                Update Post
            </Button>
        </Box>
    );
};

export default EditPostForm;