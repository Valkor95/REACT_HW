import React from 'react';
import { Grid } from '@mui/material';

const ProductImage = ({ image, title }) => {
    return (
        <Grid item xs={1}>
            <img src={image} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>
    );
};

export default ProductImage;
