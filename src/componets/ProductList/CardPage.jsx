import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useGetProductByIdQuery} from "../../store/API/slices/fakeStoreApi.js";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/slices/cartCount.js";
import LoadingIndicator from "./LoadingIndicator.jsx";
import NoProductsMessage from "./NoProductsMesssage.jsx";
import {Box, Button, CardMedia, Grid, Typography} from "@mui/material";
import {ROUTES} from "../../utils/routes.js";

const CardPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {data:product, isLoading, isError} = useGetProductByIdQuery(id)

    const handleAddToCart = () => {
        dispatch(addToCart({id: product.id}));
    };

    if(isLoading) return <LoadingIndicator/>
    if (isError)  return <NoProductsMessage/>;

    return (
        <Box sx={{ padding: 1 }}>
            <Grid container spacing={2} >
                <Grid item xs={6} md={6}>
                    <CardMedia
                        component="img"
                        image={product.image}
                        alt={product.title}
                        sx={{ width: '80%', height: 'auto' }}
                    />
                </Grid>
                    <Grid item xs={6} md={6}>
                        <Typography variant="h4" gutterBottom>
                            {product.title}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" gutterBottom>
                            Price: ${product.price}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Category: {product.category}
                        </Typography>
                        <Typography variant="body2" paragraph>
                            {product.description}
                        </Typography>
                        <Button variant="contained" color="primary" onClick={handleAddToCart}>
                            Add to Cart
                        </Button>
                        <Link to={ROUTES.HOME} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                style={{marginLeft: 10}}
                                onClick={handleAddToCart}>
                                Back to menu
                            </Button>
                        </Link>
                    </Grid>
            </Grid>
        </Box>
    );
};

export default CardPage;