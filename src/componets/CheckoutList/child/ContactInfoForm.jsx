import React from 'react';
import { Grid, TextField, Typography, Box } from '@mui/material';

const ContactInfoForm = ({ formik }) => (
    <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Контактная информация</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Фамилия"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ''}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="Имя"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ''}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    id="patronymic"
                    name="patronymic"
                    label="Отчество"
                    value={formik.values.patronymic}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.patronymic && formik.errors.patronymic ? formik.errors.patronymic : ''}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    fullWidth
                    id="phone"
                    name="phone"
                    label="Телефон"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.phone && formik.errors.phone ? formik.errors.phone : ''}
                    margin="normal"
                />
            </Grid>
        </Grid>
    </Box>
);

export default ContactInfoForm;
