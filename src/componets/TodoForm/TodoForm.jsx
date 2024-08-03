import React from 'react';
import {Formik, Form, Field} from "formik";
import * as Yup from 'yup'
import {TextField, Button} from "@mui/material";
import styles from '../../styles/TodoForm/TodoForm.module.scss'

const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required')
});

const TodoForm = () => {
    const handleSubmit = (values, {resetForm}) => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        const newTodo = {...values, id: Date.now(), status: 'pending'};
        localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
        resetForm();
    };

    return (
        <Formik
            initialValues={{title: '', description: ''}}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({errors, touched}) => (
                <Form className={styles.form}>
                    <Field
                        as={TextField}
                        name="title"
                        label="Title"
                        error={touched.title && !!errors.title}
                        helperText={touched.title && errors.title}
                    />
                    <Field
                        as={TextField}
                        name="description"
                        label="Description"
                        error={touched.description && !!errors.description}
                        helperText={touched.description && errors.description}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Add Todo
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default TodoForm;