import React from 'react';
import { Grid, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../store/slices/cartCount.js';
import { styled } from "@mui/material/styles";
import { cardHoverScale } from '../../../styles/Other/CardHover/index.js';
import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';
import ProductQuantity from './ProductQuantity';
import ProductPrice from './ProductPrice';

// Стили для Item
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ProductItem = ({ product, cartItem }) => {
    const dispatch = useDispatch();

    return (
        <Item sx={{ marginBottom: 2 }}>
            <Grid container spacing={1} alignItems="center" sx={{ marginBottom: '10px' }}>
                <ProductImage image={product.image} title={product.title} />
                <ProductTitle title={product.title} />
                <ProductQuantity id={cartItem.id} quantity={cartItem.quantity} />
                <ProductPrice price={product.price} quantity={cartItem.quantity} />
                <Grid item xs={1}>
                    <IconButton onClick={() => dispatch(removeFromCart({ id: cartItem.id }))}>
                        <DeleteIcon style={{ color: 'red' }} sx={cardHoverScale} />
                    </IconButton>
                </Grid>
            </Grid>
        </Item>
    );
};

export default ProductItem;
