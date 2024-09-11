import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { incrementQuantity, decrementQuantity, removeFromCart, clearCart } from '../../store/slices/cartCount.js';
import {cardHoverScale, cardHoverWithoutShadow} from "../../styles/Other/CardHover/index.js";

// Стили для компонента
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const CartWindow = () => {
    const cartItems = useSelector((state) => state.cartCount.items);
    const dispatch = useDispatch();
    const [productData, setProductData] = useState({});
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setErrors([]);
            const validProductIds = cartItems.map(item => item.id);
            const fetchedProducts = [];
            const errorsList = [];

            for (const id of validProductIds) {
                try {
                    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                    if (!response.ok) throw new Error(`Ошибка при загрузке продукта с id ${id}`);
                    const data = await response.json();
                    fetchedProducts.push({ id, ...data });
                } catch (error) {
                    console.error(error);
                    errorsList.push(id);
                }
            }

            const productMap = fetchedProducts.reduce((acc, product) => {
                acc[product.id] = product;
                return acc;
            }, {});

            setProductData(productMap);
            setErrors(errorsList);
            setLoading(false);
        };

        fetchProducts();
    }, [cartItems.id]);

    if (loading) {
        return <Typography>Загрузка...</Typography>;
    }

    if (cartItems.length === 0) {
        return (
            <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                <Typography variant="h6">Корзина пуста!</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                {cartItems.map((cartItem) => {
                    const product = productData[cartItem.id];

                    if (!product) {
                        return <Typography key={cartItem.id}>Товар не найден!</Typography>;
                    }

                    return (
                        <Item sx={{ marginBottom: 2 }} key={cartItem.id}>
                            <Grid container spacing={1} alignItems="center" sx={{ marginBottom: '10px' }}>
                                <Grid item xs={1}>
                                    <img src={product.image} alt={product.title} style={{ maxWidth: '100%', height: 'auto' }} />
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography variant="h6">{product.title}</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography>Количество: {cartItem.quantity}</Typography>
                                    <IconButton onClick={() => dispatch(incrementQuantity({ id: cartItem.id }))}>
                                        <AddIcon sx={cardHoverScale}/>
                                    </IconButton>
                                    <IconButton onClick={() => dispatch(decrementQuantity({ id: cartItem.id }))}>
                                        <RemoveIcon sx={cardHoverScale}/>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography>Цена: ${product.price * cartItem.quantity}</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <IconButton onClick={() => dispatch(removeFromCart({ id: cartItem.id }))}>
                                        <DeleteIcon style={{ color: 'red' }} sx={cardHoverScale}/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Item>
                    );
                })}
            </Grid>
            <Box sx={{ marginTop: 2 }}>
                <Button
                    sx={{ ...cardHoverScale, marginRight: 2 }}
                    variant="contained"
                    color="secondary"
                    onClick={() => dispatch(clearCart())}
                >
                    Очистить корзину
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    sx={cardHoverScale}
                >
                    Оформить заказ
                    <ShoppingCartCheckoutIcon style={{ color: 'white', marginLeft: 10 }} />
                </Button>
            </Box>
        </Box>
    );
};

export default CartWindow;



