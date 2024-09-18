import React from 'react';
import { Grid, Typography } from '@mui/material';

const ProductTitle = ({ title }) => {
    return (
        <Grid item xs={5}>
            <Typography variant="h6">{title}</Typography>
        </Grid>
    );
};

export default ProductTitle;
