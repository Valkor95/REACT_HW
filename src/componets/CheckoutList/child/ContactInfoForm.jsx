import React from 'react';
import { Grid, TextField, Typography, Box, MenuItem } from '@mui/material';

const cityOptions = ['Київ', 'Одеса', 'Харків', 'Львів', 'Кривий Ріг'];

const ContactInfoForm = ({ formik, deliveryMethod, setWarehouses }) => {
    const handleCityChange = async (event) => {
        formik.setFieldValue('city', event.target.value);

        // Запрос складов для выбранного города
        try {
            const response = await fetch(`https://api.novaposhta.ua/v2.0/json/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "apiKey": "f5f0a3aef570577e582a6fb867757e8f",
                    "modelName": "AddressGeneral",
                    "calledMethod": "getWarehouses",
                    "methodProperties": {
                        "CityName": event.target.value
                    }
                })
            });

            const data = await response.json();
            if (data.success) {
                setWarehouses(data.data); // Обновляем список складов
            } else {
                console.error('Ошибка при получении складов:', data.errors);
            }
        } catch (error) {
            console.error('Ошибка при запросе на сервер Новой Почты:', error);
        }
    };

    return (
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
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
                    <TextField
                        select
                        fullWidth
                        id="city"
                        name="city"
                        label="Город"
                        value={formik.values.city}
                        onChange={handleCityChange}
                        onBlur={formik.handleBlur}
                        helperText={formik.touched.city && formik.errors.city ? formik.errors.city : ''}
                        margin="normal"
                    >
                        {cityOptions.map((city) => (
                            <MenuItem key={city} value={city}>
                                {city}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactInfoForm;
