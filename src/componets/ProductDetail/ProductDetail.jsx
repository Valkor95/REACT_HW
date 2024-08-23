import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

const product = { // Пример товара
    id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150', description: 'Product description', inStock: true
};

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