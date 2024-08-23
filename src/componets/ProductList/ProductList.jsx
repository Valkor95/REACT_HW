import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const products = [
    // Пример товаров
    { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
    return (
        <Grid container spacing={3} style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
            {products.map(product => (
                <Grid item
                      style={{display: 'flex', justifyContent: 'center'}}
                      xs={12} sm={6} md={4} key={product.id}>
                    <Card>
                        <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                        <CardContent>
                            <Typography variant="h6">{product.name}</Typography>
                            <Typography variant="body1">{product.price}</Typography>
                            {/*<Button component={Link} to={`/product/${product.id}`}>View Details</Button>*/}
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;