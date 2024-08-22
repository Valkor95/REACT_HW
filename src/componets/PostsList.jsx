import React, { useState } from 'react';
import { useGetPostsQuery, useDeletePostMutation } from '../store/API_Slice';
import { Button, List, ListItem, Typography, TextField, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const PostsList = () => {
    const { data: posts, refetch, isLoading, error } = useGetPostsQuery();
    const [filter, setFilter] = useState('');
    const [deletePost] = useDeletePostMutation();

    const filteredPosts = posts?.filter(post =>
        post.title.toLowerCase().includes(filter.toLowerCase())
    ) || [];

    const handleDelete = async (id) => {
        try {
            await deletePost(id).unwrap();
        } catch (err) {
            console.error(err);
        }
    };

    if (isLoading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>Error fetching posts.</Typography>;

    return (
        <Box>
            <TextField
                label="Filter by title"
                variant="outlined"
                fullWidth
                margin="normal"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <Button component={RouterLink} to="/add" variant="contained" color="primary" sx={{ mb: 2 }}>
                Add Post
            </Button>
            <Button onClick={() => refetch()} variant="contained" color="primary">
                Refetch Posts
            </Button>
            <List>
                {filteredPosts.map((post) => (
                    <ListItem key={post.id}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h6">{post.title}</Typography>
                            <Typography>{post.body}</Typography>
                        </Box>
                        <Button
                            component={RouterLink}
                            to={`/edit/${post.id}`}
                            variant="contained"
                            color="primary"
                            sx={{ mr: 1 }}
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={() => handleDelete(post.id)}
                            variant="contained"
                            color="secondary"
                        >
                            Delete
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default PostsList;