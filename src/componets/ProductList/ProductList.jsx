import React, { useEffect } from 'react';
import {
    useGetProductsQuery,
    useLazyGetProductsByCategoryQuery
} from "../../store/API/slices/fakeStoreApi.js";
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, useMediaQuery} from "@mui/material";

const ProductList = () => {
    const {data: allProducts, isLoading: isLoadingAllProducts} = useGetProductsQuery();

    const isSmallScreen = useMediaQuery('(max-width:1400px)');


    if(isLoadingAllProducts) return <Typography variant='body'>Loading...</Typography>

    return  (
        <Grid container spacing={2} sx={{ padding: 2 }}>
            {allProducts.map((product) => (
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

                            {isSmallScreen ? (
                                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.price}$
                                    </Typography>
                                </Box>
                            ) : (
                                <Typography gutterBottom variant="h2" component="div">
                                    {product.price}$
                                </Typography>
                            )}

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
