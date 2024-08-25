import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';

const Checkout = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
            deliveryMethod: '',
            paymentMethod: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Обязательное поле'),
            lastName: Yup.string().required('Обязательное поле'),
            phone: Yup.string().required('Обязательное поле'),
            email: Yup.string().email('Некорректный email').required('Обязательное поле'),
            address: Yup.string().required('Обязательное поле'),
        }),
        onSubmit: (values) => {
            console.log('Оформление заказа', values);
            // Здесь будет логика отправки данных на сервер
        },
    });

    return (
        <Paper style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>Оформление заказа</Typography>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="firstName"
                            name="firstName"
                            label="Имя"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="lastName"
                            name="lastName"
                            label="Фамилия"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="phone"
                            name="phone"
                            label="Телефон"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="address"
                            name="address"
                            label="Адрес доставки"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                        />
                    </Grid>
                    {/* Добавьте поля для выбора способа доставки и оплаты */}
                    <Grid item xs={12}>
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Оформить заказ
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default Checkout;