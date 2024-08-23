import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../store/API/slices/apiFakeStore.js';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/slices/cartSlice.js';

const ProductDetail = () => {
    const { id } = useParams();
    return (
        <div>
            <Typography variant='h1'>{product.name}</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={product.image} alt={product.name} style={{width: '100%'}}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{product.name}</Typography>
                            <Typography variant="h6">{product.price}</Typography>
                            <Typography variant="body1">{product.description}</Typography>
                            <Typography variant="body2">{product.inStock ? 'In Stock' : 'Out of Stock'}</Typography>
                            <Button>Add to Cart</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductDetail;