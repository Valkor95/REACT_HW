import React from 'react';
import {Grid, IconButton, Paper, Typography} from '@mui/material';
import { styled } from "@mui/material/styles";
import ProductImage from '../../CartWindow/child/ProductImage.jsx';
import ProductTitle from '../../CartWindow/child/ProductTitle';
import ProductQuantity from '../../CartWindow/child/ProductQuantity';
import ProductPrice from '../../CartWindow/child/ProductPrice';
import {useSelector} from "react-redux";
import {useGetProductByIdQuery} from "../../../store/API/slices/fakeStoreApi.js";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ProductList = () => {
    const cartItems = useSelector((state) => state.cartCount.items);
    const {data: product, isLoading} = useGetProductByIdQuery()

    return (
        <>
            {cartItems.map((cartItem) => {
                const {data: product, isLoading} = useGetProductByIdQuery(cartItem.id);

                if (isLoading) {
                    return <div key={cartItem.id}>Loading...</div>;
                }

                if (!product) {
                    return <div key={cartItem.id}>Product not found</div>;
                }

                return (
                <Item sx={{marginBottom: 1}}>
                    <Grid container spacing={1} alignItems="baseline" justifyContent='center' sx={{marginBottom: '10px'}}>
                        <ProductImage image={product.image} title={product.title}/>
                        <ProductTitle title={product.title}/>
                        <Typography>Количество: {cartItem.quantity}</Typography>
                        <ProductPrice price={product.price} quantity={cartItem.quantity}/>
                    </Grid>
                </Item>
                )
            })}
        </>
    );
};

export default ProductList;