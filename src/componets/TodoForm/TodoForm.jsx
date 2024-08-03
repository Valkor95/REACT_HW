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

                </Form>
            )}
        </Formik>
    );
};

export default TodoForm;