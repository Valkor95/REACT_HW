import React, {useState} from 'react';
import {useUpdatePostMutation} from "../store/API_Slice/index.js";
import {Button, Input, TextareaAutosize} from "@mui/material";

const EditPostForm = ({post}) => {
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
    const [updatePost] = useUpdatePostMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updatePost({id: post.id, title, body});
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextareaAutosize
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <Button variant='outlined' type='submit' >Update Post</Button>
        </form>
    );
};

export default EditPostForm;