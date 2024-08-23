import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../store/API/slices/apiFakeStore.js';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/slices/cartSlice.js';

const ProductDetail = () => {
    const { id } = useParams();
    const { data: product, isLoading } = useGetProductByIdQuery(id);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItemToCart({ id: product.id, name: product.title, price: product.price, quantity: 1 }));
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Typography variant='h1'>{product.title}</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={product.image} alt={product.title} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{product.title}</Typography>
                            <Typography variant="body1">{`$${product.price}`}</Typography>
                            <Typography variant="body2">{product.description}</Typography>
                            <Button variant="contained" color="primary" onClick={handleAddToCart}>
                                Add to Cart
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductDetail;