import React from 'react';
import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useGetProductsByIdQuery } from "../../store/API/slices/fakeStoreApi.js";
import {useDispatch} from "react-redux";

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
    const cartItems = JSON.parse(localStorage.getItem('cartCount')) || [];
    const dispatch = useDispatch();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                {cartItems.map((cartItem) => {
                    const { data: product, isLoading, error } = useGetProductsByIdQuery(cartItem.id);

                    if (isLoading) return <Typography key={cartItem.id}>Загрузка...</Typography>;
                    if (error) return <Typography key={cartItem.id}>Ошибка при загрузке продукта</Typography>;

                    return (
                        <Grid container key={cartItem.id} spacing={1} sx={{ marginBottom: '10px' }}>
                            <Grid item xs={6}>
                                <Item>
                                    <Typography variant="h6">{product.title}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>
                                    <Typography>Количество: {cartItem.quantity}</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item>
                                    <Typography>Цена: ${product.price*cartItem.quantity}</Typography>
                                </Item>
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default CartWindow;
