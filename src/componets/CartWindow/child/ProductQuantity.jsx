import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../../../store/slices/cartCount.js';
import { cardHoverScale } from '../../../styles/Other/CardHover/index.js';

const ProductQuantity = ({ id, quantity }) => {
    const dispatch = useDispatch();

    return (
        <Grid item xs={3}>
            <Typography>Количество: {quantity}</Typography>
            <IconButton onClick={() => dispatch(incrementQuantity({ id }))}>
                <AddIcon sx={cardHoverScale} />
            </IconButton>
            <IconButton onClick={() => dispatch(decrementQuantity({ id }))}>
                <RemoveIcon sx={cardHoverScale} />
            </IconButton>
        </Grid>
    );
};

export default ProductQuantity;
