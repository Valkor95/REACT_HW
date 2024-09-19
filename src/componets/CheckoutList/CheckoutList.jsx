import React, { useEffect, useState } from 'react';
import {Button, Checkbox, FormControlLabel, Grid, Typography} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes.js';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../store/slices/cartCount.js';
import ProductList from './child/ProductList.jsx';
import { useGetProductByIdQuery } from '../../store/API/slices/fakeStoreApi.js';
import ContactInfoForm from './child/ContactInfoForm.jsx';
import DeliveryMethodForm from './child/DeliveryMethodForm.jsx';
import PaymentMethodForm from './child/PaymentMethodForm.jsx';
import CartSummary from './child/CartSummary.jsx';

const CheckoutList = () => {
    const cartItems = useSelector((state) => state.cartCount.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [warehouses, setWarehouses] = useState([]);
    const [deliveryMethod, setDeliveryMethod] = useState('pickup');

    const productQueries = cartItems.map(item => useGetProductByIdQuery(item.id));
    const products = productQueries.map(query => query.data);

    const totalAmount = products.reduce((acc, product, i) => acc + (product ? product.price * cartItems[i].quantity : 0), 0);
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);


    const formik = useFormik({
        initialValues: {
            lastName: '',
            firstName: '',
            patronymic: '',
            phone: '',
            paymentMethod: 'cashOnDelivery',
            receiverLastName: '',
            receiverFirstName: '',
            receiverPatronymic: '',
            receiverPhone: '',
            warehouse: '',
            deliveryDate: '',
            agree: false,
        },
        validationSchema: Yup.object({
            lastName: Yup.string().required('Поле обязательно'),
            firstName: Yup.string().required('Поле обязательно'),
            patronymic: Yup.string().required('Поле обязательно'),
            phone: Yup.string().required('Поле обязательно'),
            paymentMethod: Yup.string().required('Поле обязательно'),
            agree: Yup.bool().oneOf([true], 'Подтвердите согласие'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await fetch('https://fakestoreapi.com/carts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: 1, // допустим, что userId захардкожен
                        date: new Date(),
                        products: JSON.parse(localStorage.getItem('cartCount')) || [], // Получаем данные из localStorage
                        ...values, // Добавляем все данные формы
                    }),
                });

                if (response.ok) {
                    dispatch(clearCart()); // Очищаем корзину после успешного запроса
                    alert('Заказ успешно оформлен!');
                    navigate(ROUTES.HOME); // Переадресация на главную страницу
                }
            } catch (error) {
                console.error('Ошибка отправки данных:', error);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <ProductList/>
                    <ContactInfoForm formik={formik} deliveryMethod={deliveryMethod} setWarehouses={setWarehouses}/>
                    <DeliveryMethodForm formik={formik} deliveryMethod={deliveryMethod} setDeliveryMethod={setDeliveryMethod} warehouses={warehouses} />
                    <PaymentMethodForm formik={formik} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CartSummary formik={formik} totalAmount={totalAmount} totalQuantity={totalQuantity} />
                </Grid>
            </Grid>
        </form>
    );
};

export default CheckoutList;

//
//
// import React, { useEffect, useState } from 'react';
// import {
//     Grid,
//     TextField,
//     Button,
//     Typography,
//     Box,
//     FormControl,
//     MenuItem,
//     Select,
//     InputLabel,
//     Checkbox,
//     FormControlLabel,
//     FormLabel,
//     RadioGroup,
//     Radio
// } from '@mui/material';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import { ROUTES } from '../../utils/routes.js';
// import { useDispatch, useSelector } from 'react-redux';
// import { clearCart } from '../../store/slices/cartCount.js';
// import ProductList from './child/ProductList.jsx';
// import { useGetProductByIdQuery } from '../../store/API/slices/fakeStoreApi.js';
//
// const cityOptions = ['Київ', 'Одеса', 'Харків', 'Львів', 'Кривий Ріг'];
//
// const CheckoutList = () => {
//     const cartItems = useSelector((state) => state.cartCount.items);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [warehouses, setWarehouses] = useState([]);
//     const [deliveryMethod, setDeliveryMethod] = useState('pickup');
//
//
//     const productQueries = cartItems.map(item => useGetProductByIdQuery(item.id));
//     const products = productQueries.map(query => query.data);
//     const isLoading = productQueries.some(query => query.isLoading);
//     const error = productQueries.some(query => query.error);
//
//
//     const totalAmount = cartItems.reduce((total, item) => {
//         const product = products.find(p => p && p.id === item.id);
//         return total + (product ? product.price * item.quantity : 0);
//     }, 0);
//     const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
//
//     const handleSubmit = async (values) => {
//         try {
//             const response = await fetch('https://fakestoreapi.com/carts', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     userId: 1,
//                     date: new Date(),
//                     products: JSON.parse(localStorage.getItem('cartCount')) || [],
//                     ...values
//                 }),
//             });
//
//             if (response.ok) {
//                 dispatch(clearCart());
//                 alert('Заказ успешно оформлен!');
//                 navigate(ROUTES.HOME);
//             }
//         } catch (error) {
//             console.error('Ошибка отправки данных:', error);
//         }
//     };
//
//     const formik = useFormik({
//         initialValues: {
//             city: '',
//             phone: '',
//             lastName: '',
//             firstName: '',
//             patronymic: '',
//             agree: false,
//             deliveryDate: '',
//             warehouse: '',
//             receiverLastName: '',
//             receiverFirstName: '',
//             receiverPatronymic: '',
//             receiverPhone: '',
//             paymentMethod: 'cashOnDelivery',
//         },
//         validationSchema: Yup.object({
//             city: Yup.string().required('Выберите город'),
//             lastName: Yup.string().required('Введите фамилию'),
//             firstName: Yup.string().required('Введите имя'),
//             patronymic: Yup.string(),
//             phone: Yup.string().required('Укажите телефон'),
//             agree: Yup.boolean().oneOf([true], 'Необходимо согласиться с условиями'),
//             warehouse: Yup.string().when('deliveryMethod', {
//                 is: 'novaPoshta',
//                 then: Yup.string().required('Выберите склад'),
//             }),
//         }),
//         onSubmit: handleSubmit,
//         validateOnChange: true,
//         validateOnBlur: true,
//     });
//
//     useEffect(() => {
//         const fetchWarehouses = async () => {
//             if (formik.values.city) {
//                 try {
//                     const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json',
//                         },
//                         body: JSON.stringify({
//                             apiKey: 'f5f0a3aef570577e582a6fb867757e8f',
//                             modelName: 'Address',
//                             calledMethod: 'getWarehouses',
//                             methodProperties: {
//                                 CityName: formik.values.city,
//                             },
//                         }),
//                     });
//                     const data = await response.json();
//                     setWarehouses(data.data);
//                 } catch (error) {
//                     console.error('Ошибка получения складов:', error);
//                 }
//             }
//         };
//
//         fetchWarehouses();
//     }, [formik.values.city, deliveryMethod]);
//
//
//     if (isLoading) return <Typography>Loading...</Typography>;
//     if (error) return <Typography color="error">Error loading product data</Typography>;
//
//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <Grid container spacing={2}>
//                 {/* Left Side */}
//                 <Grid item xs={12} md={8}>
//                     <ProductList />
//                     <Typography variant="h5" gutterBottom>
//                         Оформить заказ
//                     </Typography>
//
//                     <FormControl fullWidth margin="normal">
//                         <InputLabel id="city-label">Ваш город</InputLabel>
//                         <Select
//                             labelId="city-label"
//                             id="city"
//                             name="city"
//                             value={formik.values.city}
//                             onChange={formik.handleChange}
//                             error={formik.touched.city && Boolean(formik.errors.city)}
//                         >
//                             {cityOptions.map((city) => (
//                                 <MenuItem key={city} value={city}>
//                                     {city}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                         {formik.touched.city && formik.errors.city && (
//                             <Typography color="error">{formik.errors.city}</Typography>
//                         )}
//                     </FormControl>
//
//                     <Box sx={{ mb: 4 }}>
//                         <Typography variant="h6">Контактная информация</Typography>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} sm={4}>
//                                 <TextField
//                                     fullWidth
//                                     id="lastName"
//                                     name="lastName"
//                                     label="Фамилия"
//                                     value={formik.values.lastName}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ''}
//                                     margin="normal"
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={4}>
//                                 <TextField
//                                     fullWidth
//                                     id="firstName"
//                                     name="firstName"
//                                     label="Имя"
//                                     value={formik.values.firstName}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ''}
//                                     margin="normal"
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={4}>
//                                 <TextField
//                                     fullWidth
//                                     id="patronymic"
//                                     name="patronymic"
//                                     label="Отчество"
//                                     value={formik.values.patronymic}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     helperText={formik.touched.patronymic && formik.errors.patronymic ? formik.errors.patronymic : ''}
//                                     margin="normal"
//                                 />
//                             </Grid>
//                             <Grid item xs={12} sm={12}>
//                                 <TextField
//                                     fullWidth
//                                     id="phone"
//                                     name="phone"
//                                     label="Телефон"
//                                     value={formik.values.phone}
//                                     onChange={formik.handleChange}
//                                     onBlur={formik.handleBlur}
//                                     helperText={formik.touched.phone && formik.errors.phone ? formik.errors.phone : ''}
//                                     margin="normal"
//                                 />
//                             </Grid>
//                         </Grid>
//                     </Box>
//
//                     <Box sx={{ mb: 4 }}>
//                         <Typography variant="h6">Выбор способа доставки</Typography>
//                         <FormControl component="fieldset">
//                             <FormLabel component="legend">Способ доставки</FormLabel>
//                             <RadioGroup
//                                 name="deliveryMethod"
//                                 value={deliveryMethod}
//                                 onChange={(e) => setDeliveryMethod(e.target.value)}
//                             >
//                                 <FormControlLabel value="pickup" control={<Radio />} label="Самовывоз" />
//                                 <FormControlLabel value="novaPoshta" control={<Radio />} label="Новая Почта" />
//                             </RadioGroup>
//                         </FormControl>
//
//                         {deliveryMethod === 'novaPoshta' && (
//                             <>
//                                 <TextField
//                                     fullWidth
//                                     id="receiverLastName"
//                                     name="receiverLastName"
//                                     label="Фамилия получателя"
//                                     value={formik.values.receiverLastName}
//                                     onChange={formik.handleChange}
//                                     margin="normal"
//                                 />
//                                 <TextField
//                                     fullWidth
//                                     id="receiverFirstName"
//                                     name="receiverFirstName"
//                                     label="Имя получателя"
//                                     value={formik.values.receiverFirstName}
//                                     onChange={formik.handleChange}
//                                     margin="normal"
//                                 />
//                                 <TextField
//                                     fullWidth
//                                     id="receiverPatronymic"
//                                     name="receiverPatronymic"
//                                     label="Отчество получателя"
//                                     value={formik.values.receiverPatronymic}
//                                     onChange={formik.handleChange}
//                                     margin="normal"
//                                 />
//                                 <TextField
//                                     fullWidth
//                                     id="receiverPhone"
//                                     name="receiverPhone"
//                                     label="Телефон получателя"
//                                     value={formik.values.receiverPhone}
//                                     onChange={formik.handleChange}
//                                     margin="normal"
//                                 />
//                                 <TextField
//                                     fullWidth
//                                     id="deliveryDate"
//                                     name="deliveryDate"
//                                     label="Дата доставки"
//                                     type="date"
//                                     InputLabelProps={{ shrink: true }}
//                                     value={formik.values.deliveryDate}
//                                     onChange={formik.handleChange}
//                                     margin="normal"
//                                 />
//                                 <FormControl fullWidth margin="normal">
//                                     <InputLabel id="warehouse-label">Склад</InputLabel>
//                                     <Select
//                                         labelId="warehouse-label"
//                                         id="warehouse"
//                                         name="warehouse"
//                                         value={formik.values.warehouse}
//                                         onChange={formik.handleChange}
//                                     >
//                                         {warehouses.length > 0 ? (
//                                             warehouses.map((warehouse) => (
//                                                 <MenuItem key={warehouse.WarehouseID} value={warehouse.Description}>
//                                                     {warehouse.Description}
//                                                 </MenuItem>
//                                             ))
//                                         ) : (
//                                             <MenuItem value="" disabled>
//                                                 Нет доступных складов
//                                             </MenuItem>
//                                         )}
//                                     </Select>
//
//                                     {formik.touched.warehouse && formik.errors.warehouse && (
//                                         <Typography color="error">{formik.errors.warehouse}</Typography>
//                                     )}
//                                 </FormControl>
//                             </>
//                         )}
//                     </Box>
//
//                     <Box sx={{ mb: 4 }}>
//                         <Typography variant="h6">Метод оплаты</Typography>
//                         <FormControl component="fieldset">
//                             <RadioGroup
//                                 name="paymentMethod"
//                                 value={formik.values.paymentMethod}
//                                 onChange={formik.handleChange}
//                             >
//                                 <FormControlLabel value="cashOnDelivery" control={<Radio />} label="Оплата при получении" />
//                                 <FormControlLabel value="onlinePayment" control={<Radio />} label="Онлайн оплата" />
//                             </RadioGroup>
//                         </FormControl>
//                     </Box>
//                 </Grid>
//
//                 {/* Right Side */}
//                 <Grid item xs={12} md={4}>
//                     <Box sx={{ p: 2, border: '1px solid gray', borderRadius: 2 }}>
//                         <Typography variant="h4">Корзина</Typography>
//
//                         <Typography variant="h6">Итого:</Typography>
//                         <Typography variant="body1">
//                             ${totalAmount.toFixed(2)}
//                         </Typography>
//                         <Typography variant="body2">
//                             Количество товаров: {totalQuantity}
//                         </Typography>
//                         <FormControlLabel
//                             control={
//                                 <Checkbox
//                                     name="agree"
//                                     color="primary"
//                                     checked={formik.values.agree}
//                                     onChange={formik.handleChange}
//                                 />
//                             }
//                             label="I confirm the order, I accept the terms of the user agreement"
//                         />
//                         {formik.touched.agree && formik.errors.agree && (
//                             <Typography color="error">{formik.errors.agree}</Typography>
//                         )}
//
//                         <Button color="primary" variant="contained" type="submit">
//                             Оформить заказ
//                         </Button>
//                     </Box>
//                 </Grid>
//             </Grid>
//         </form>
//     );
// };
//
// export default CheckoutList;

