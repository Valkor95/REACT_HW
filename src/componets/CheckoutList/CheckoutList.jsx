import React from 'react';
import { Grid, TextField, Button, Typography, Box, FormControl, MenuItem, Select, InputLabel, Checkbox, FormControlLabel } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const cityOptions = ['Київ', 'Одеса', 'Харків', 'Львів', 'Кривий Ріг'];

const CheckoutList = () => {
    // Инициализация Formik
    const formik = useFormik({
        initialValues: {
            city: '',
            agree: false,
        },
        validationSchema: Yup.object({
            city: Yup.string().required('Выберите город'),
            agree: Yup.boolean().oneOf([true], 'Необходимо согласиться с условиями'),
        }),
        onSubmit: (values) => {
            console.log('Данные формы:', values);
            // Логика отправки данных формы
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                {/* Левая часть */}
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" gutterBottom>
                        Оформить заказ
                    </Typography>

                    <FormControl fullWidth margin="normal">
                        <InputLabel id="city-label">Ваш город</InputLabel>
                        <Select
                            labelId="city-label"
                            id="city"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                        >
                            {cityOptions.map((city) => (
                                <MenuItem key={city} value={city}>
                                    {city}
                                </MenuItem>
                            ))}
                        </Select>
                        {formik.touched.city && formik.errors.city && (
                            <Typography color="error">{formik.errors.city}</Typography>
                        )}
                    </FormControl>
                </Grid>

                {/* Правая часть */}
                <Grid item xs={12} md={4}>
                    <Box sx={{ border: '1px solid #ccc', padding: 2, borderRadius: '8px' }}>
                        <Typography variant="h6" gutterBottom>
                            Grand Total:
                        </Typography>
                        <Typography>2 товара на сумму: 886 ₴</Typography>
                        <Typography>Стоимость доставки: 99 ₴</Typography>
                        <Typography variant="h5" gutterBottom>
                            Итого к оплате: 985 ₴
                        </Typography>

                        {/* Чекбокс подтверждения */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="agree"
                                    color="primary"
                                    checked={formik.values.agree}
                                    onChange={formik.handleChange}
                                />
                            }
                            label="Подтверждаю заказ, я принимаю условия пользовательского соглашения"
                        />
                        {formik.touched.agree && formik.errors.agree && (
                            <Typography color="error">{formik.errors.agree}</Typography>
                        )}

                        <Button type="submit" variant="contained" color="primary" fullWidth disabled={!formik.isValid}>
                            Оформить заказ
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </form>
    );
};

export default CheckoutList;
