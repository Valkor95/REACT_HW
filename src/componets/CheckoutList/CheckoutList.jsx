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
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../utils/routes.js";
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../../store/slices/cartCount.js";
import ProductList from "./child/ProductList.jsx";
import {useGetProductByIdQuery} from "../../store/API/slices/fakeStoreApi.js";

const cityOptions = ['Київ', 'Одеса', 'Харків', 'Львів', 'Кривий Ріг'];

const CheckoutList = () => {
    const cartItems = useSelector((state) => state.cartCount.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [warehouses, setWarehouses] = useState([]);
    const [deliveryMethod, setDeliveryMethod] = useState('pickup');

    const handleSubmit = async (values) => {
        try {
            const response = await fetch('https://fakestoreapi.com/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: 1,
                    date: new Date(),
                    products: JSON.parse(localStorage.getItem('cartCount')) || [],
                    ...values
                }),
            });

            if (response.ok) {

                dispatch(clearCart());
                alert('Заказ успешно оформлен!');
                navigate(ROUTES.HOME);
            }
        } catch (error) {
            console.error('Ошибка отправки данных:', error);
        }
    };

    const formik = useFormik({
        initialValues: {
            city: '',
            phone: '',
            lastName: '',
            firstName: '',
            patronymic: '',
            agree: false,
            deliveryDate: '',
            warehouse: '',
            receiverLastName: '',
            receiverFirstName: '',
            receiverPatronymic: '',
            receiverPhone: '',
            paymentMethod: 'cashOnDelivery',
        },
        validationSchema: Yup.object({
            city: Yup.string().required('Выберите город'),
            lastName: Yup.string().required('Введите фамилию'),
            firstName: Yup.string().required('Введите имя'),
            patronymic: Yup.string(),
            phone: Yup.string().required('Укажите телефон'),
            agree: Yup.boolean().oneOf([true], 'Необходимо согласиться с условиями'),
        }),
        onSubmit: handleSubmit,
        validateOnChange: true,
        validateOnBlur: true,
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
    }, [formik.values.city, deliveryMethod]);



    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                {/* Left Side */}


                <Grid item xs={12} md={8}>
                    <ProductList/>
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
                                    fullWidth
                                    id="receiverLastName"
                                    name="receiverLastName"
                                    label="Фамилия получателя"
                                    value={formik.values.receiverLastName}
                                    onChange={formik.handleChange}
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    id="receiverFirstName"
                                    name="receiverFirstName"
                                    label="Имя получателя"
                                    value={formik.values.receiverFirstName}
                                    onChange={formik.handleChange}
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    id="receiverPatronymic"
                                    name="receiverPatronymic"
                                    label="Отчество получателя"
                                    value={formik.values.receiverPatronymic}
                                    onChange={formik.handleChange}
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    id="receiverPhone"
                                    name="receiverPhone"
                                    label="Телефон получателя"
                                    value={formik.values.receiverPhone}
                                    onChange={formik.handleChange}
                                    margin="normal"
                                />
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

                {/* Right Side */}
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

                        {/* Checkbox confirm */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="agree"
                                    color="primary"
                                    checked={formik.values.agree}
                                    onChange={formik.handleChange}
                                />
                            }
                            label="I confirm the order, I accept the terms of the user agreement"
                        />
                        {formik.touched.agree && formik.errors.agree && (
                            <Typography color="error">{formik.errors.agree}</Typography>
                        )}

                        <Button type="submit" variant="contained" color="primary" fullWidth disabled={!formik.isValid}>
                            Checkout
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </form>
    );
};

export default CheckoutList;

