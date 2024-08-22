import React, {useEffect, useState} from 'react';
import { useFormik } from 'formik';
import {Alert, Button, FormControl, Input, InputLabel, Stack, TextField} from "@mui/material";
import {centredStyle, centredStyleFlex} from "../style/index.js";
import {useAddPostMutation} from "../store/API_Slice/index.js";


const DataForm = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [addPost, {isLoading, isSuccess, isError}] = useAddPostMutation()

    const formik = useFormik({
        initialValues:{
            title: '',
            body: '',
        },
        onSubmit: async (values) => {
            try {
                await addPost(values).unwrap()
                formik.resetForm();
            }catch (e){
                alert( `'Attention!', ${e.message}`)
            }
        }
    });

    useEffect(() => {
        if (isSuccess || isError){
            setShowAlert(true);
            const timer = setTimeout(() => {
             setShowAlert(false)
            }, 2000)
        }

    }, [isSuccess, isError]);

    return (
        <div>
            <form style={centredStyleFlex} onSubmit={formik.handleSubmit}>
                <Stack mb={4}>
                    <FormControl>
                        <InputLabel htmlFor="Title">Title</InputLabel>
                        <Input
                            id="title"
                            name="title"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                    </FormControl>
                </Stack>
                <Stack mb={4}>
                    <FormControl>
                        <TextField
                            id="body"
                            name="body"
                            type="text"
                            multiline
                            label="body"
                            onChange={formik.handleChange}
                            value={formik.values.body}
                            rows={4}
                        />
                    </FormControl>
                </Stack>

                <Button variant='outlined' type='submit' disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit'}
                </Button>

                {showAlert && <Alert sx={{marginTop: '20px'}} severity={isSuccess ? 'success' : 'error'}>
                    {isSuccess ? 'POST is success!' : isError ? 'There is error!' : null}
                </Alert>}
            </form>
        </div>
    );
};

export default DataForm;
