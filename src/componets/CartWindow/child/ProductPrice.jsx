import React from 'react';
import { Grid, Typography } from '@mui/material';

const ProductPrice = ({ price, quantity }) => {
    return (
        <Grid item xs={2}>
            <Typography>Цена: ${price * quantity}</Typography>
        </Grid>
    );
};

export default ProductPrice;
