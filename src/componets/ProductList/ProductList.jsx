import React, { useEffect } from 'react';
import {useGetProductsQuery, useLazyGetCategoriesQuery} from "../../store/API/slices/fakeStoreApi.js";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const ProductList = () => {
    const {data: products, isLoading} = useGetProductsQuery()

    if(isLoading) return <Typography variant='body'>Loading...</Typography>

    return  (
        <Grid container spacing={2} sx={{ padding: 2 }}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt={product.title}
                            image={product.image}
                            title={product.title}
                            sx={{ objectFit: 'contain', height: 'auto', maxHeight: 500 }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Typography gutterBottom variant="h2" component="div">
                                {product.price}$
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {product.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Detail</Button>
                            <Button size="small">Add to cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
