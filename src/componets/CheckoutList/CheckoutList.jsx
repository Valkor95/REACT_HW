import React, {useEffect, useState} from 'react';
import {
    Grid,
    TextField,
    Button,
    Typography,
    Box,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
    Checkbox,
    FormControlLabel,
    FormLabel, RadioGroup, Radio
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const cityOptions = ['Київ', 'Одеса', 'Харків', 'Львів', 'Кривий Ріг'];

const CheckoutList = () => {
    const [warehouses, setWarehouses] = useState([]);
    const [deliveryMethod, setDeliveryMethod] = useState('pickup');
    // Инициализация Formik
    const formik = useFormik({
        initialValues: {
            city: '',
            lastName: '',
            firstName: '',
            patronymic: '',
            agree: false,
            deliveryDate: '',
            warehouse: '',
            paymentMethod: 'cashOnDelivery',
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

    useEffect(() => {
        const fetchWarehouses = async () => {
            if (formik.values.city) {
                try {
                    const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            apiKey: 'f5f0a3aef570577e582a6fb867757e8f',
                            modelName: 'Address',
                            calledMethod: 'getWarehouses',
                            methodProperties: {
                                CityName: formik.values.city,
                            },
                        }),
                    });
                    const data = await response.json();
                    setWarehouses(data.data);
                } catch (error) {
                    console.error('Error fetching warehouses:', error);
                }
            }
        };

        fetchWarehouses();
    }, [formik.values.city]);


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
                        </Grid>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h6">Выбор способа доставки</Typography>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Способ доставки</FormLabel>
                            <RadioGroup
                                name="deliveryMethod"
                                value={deliveryMethod}
                                onChange={(e) => setDeliveryMethod(e.target.value)}
                            >
                                <FormControlLabel value="pickup" control={<Radio />} label="Самовывоз" />
                                <FormControlLabel value="novaPoshta" control={<Radio />} label="Новая Почта" />
                            </RadioGroup>
                        </FormControl>

                        {deliveryMethod === 'novaPoshta' && (
                            <>
                                <TextField
                                    select
                                    fullWidth
                                    id="warehouse"
                                    name="warehouse"
                                    label="Номер отделения"
                                    value={formik.values.warehouse}
                                    onChange={formik.handleChange}
                                    margin="normal"
                                >
                                    {warehouses.map((warehouse) => (
                                        <MenuItem key={warehouse.SiteKey} value={warehouse.Description}>
                                            {warehouse.Description}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    fullWidth
                                    id="deliveryDate"
                                    name="deliveryDate"
                                    label="Дата доставки"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={formik.values.deliveryDate}
                                    onChange={formik.handleChange}
                                    margin="normal"
                                />
                            </>
                        )}
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h6">Выбор способа оплаты</Typography>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Способ оплаты</FormLabel>
                            <RadioGroup
                                name="paymentMethod"
                                value={formik.values.paymentMethod}
                                onChange={formik.handleChange}
                            >
                                <FormControlLabel value="cashOnDelivery" control={<Radio />} label="Оплата при получении" />
                                <FormControlLabel value="onlinePayment" control={<Radio />} label="Онлайн оплата" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
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

