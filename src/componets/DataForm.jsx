import React from 'react';
import { useFormik } from 'formik';
import {Button, FormControl, Input, InputLabel, Stack, TextField} from "@mui/material";
import {centredStyle, centredStyleFlex} from "../style/index.js";
import {useAddPostMutation} from "../store/API_Slice/index.js";

const DataForm = () => {
    const [addPost, {isLoading}] = useAddPostMutation()
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
    })

    return (
        <div>

            <form style={centredStyleFlex} onSubmit={formik.handleSubmit}>
                <Stack mb={4}>
                    <FormControl>
                        <InputLabel htmlFor="firstName">Title</InputLabel>
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

                <Button variant='outlined' type='submit'>Submit</Button>
            </form>

        </div>
    );
};

export default DataForm;
