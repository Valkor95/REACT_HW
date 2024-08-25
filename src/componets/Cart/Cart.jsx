// src/components/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, updateItemQuantity } from '../../store/slices/cartSlice.js';
import { Button, IconButton, Typography, TextField, Grid, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items); // Получаем товары из корзины

    const handleRemove = (id) => {
        dispatch(removeItemFromCart(id)); // Удаление товара из корзины
    };

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateItemQuantity({ id, quantity: parseInt(quantity) })); // Обновление количества товара
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Подсчет общей стоимости

    return (
        <Paper style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>Корзина</Typography>
            {cartItems.length === 0 ? (
                <Typography variant="h6">Ваша корзина пуста</Typography>
            ) : (
                <Grid container spacing={2}>
                    {cartItems.map((item) => (
                        <Grid item xs={12} key={item.id}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={3}>
                                    <img src={item.image} alt={item.title} style={{ width: '100px' }} />
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="subtitle1">{item.title}</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                        inputProps={{ min: 1 }}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography variant="subtitle1">{`$${item.price}`}</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography variant="subtitle1">{`$${(item.price * item.quantity).toFixed(2)}`}</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <IconButton color="secondary" onClick={() => handleRemove(item.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Typography variant="h6" align="right">
                            Общая стоимость: ${totalPrice.toFixed(2)}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth component={Link} to="/checkout">
                            Перейти к оформлению
                        </Button>
                    </Grid>
                </Grid>
            )}
        </Paper>
    );
};

export default Cart;
