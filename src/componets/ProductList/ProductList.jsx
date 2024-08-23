import React, {useEffect} from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../store/API/slices/apiFakeStore.js';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts } from '../../store/slices/productsSlice.js';


const ProductList = () => {
    const { data: products = [], isLoading } = useGetProductsQuery();
    const filteredProducts = useSelector(state => state.products.filteredProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (products.length) {
            dispatch(filterProducts());
        }
    }, [products, dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

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
                            <Button component={Link} to={`/product/${product.id}`}>View Details</Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;