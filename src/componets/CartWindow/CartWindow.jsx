import React, {useEffect} from 'react';
import {Box, Button, Grid, IconButton, Paper, Typography} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useGetProductsByIdQuery } from "../../store/API/slices/fakeStoreApi.js";
import {useSelector, useDispatch} from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { incrementQuantity, decrementQuantity, removeFromCart, clearCart } from '../../store/slices/cartCount.js'

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

    useEffect(() => {
    }, [cartItems]);

    if (cartItems.length === 0) {
        return (
            <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                <Typography variant="h6">Корзина пуста</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                {cartItems.map((cartItem) => {
                    const { data: product, isLoading, error } = useGetProductsByIdQuery(cartItem.id);

                    if (isLoading) return <Typography key={cartItem.id}>Loading...</Typography>;
                    if (error) return <Typography key={cartItem.id}>Something is wrong! Try again!</Typography>;

                    return (
                        <Item sx={{marginBottom: 2}} key={cartItem.id}>
                            <Grid container spacing={1} alignItems="center" sx={{ marginBottom: '10px' }}>
                                <Grid item xs={1}>
                                    <img src={product.image} alt={product.title}
                                         style={{maxWidth: '100%', height: 'auto'}}/>
                                </Grid>
                                <Grid item xs={5}>
                                        <Typography variant="h6">{product.title}</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                        <Typography>Количество: {cartItem.quantity}</Typography>
                                        <IconButton onClick={() => dispatch(incrementQuantity({ id: cartItem.id }))}>
                                            <AddIcon />
                                        </IconButton>
                                        <IconButton onClick={() => dispatch(decrementQuantity({ id: cartItem.id }))}>
                                            <RemoveIcon />
                                        </IconButton>
                                </Grid>
                                <Grid item xs={2}>
                                        <Typography>Цена: ${product.price*cartItem.quantity}</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <IconButton onClick={() => dispatch(removeFromCart({ id: cartItem.id }))}>
                                        <DeleteIcon style={{ color: 'red' }} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Item>
                    );
                })}
            </Grid>
            <Box sx={{ marginTop: 2 }}>
                <Button
                    sx={{ marginRight: 2 }}
                    variant="contained"
                    color="secondary"
                    onClick={() => dispatch(clearCart())}
                >
                    Clear cart
                </Button>
                <Button
                    variant="contained"
                    color="success"
                >
                    Checkout
                    <ShoppingCartCheckoutIcon style={{ color: 'white', marginLeft: 10}} />
                </Button>
            </Box>
        </Box>
    );
};

export default CartWindow;
