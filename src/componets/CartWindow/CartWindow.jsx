import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ProductItem from '../CartWindow/child/ProductItem.jsx';

const CartWindow = () => {
    const cartItems = useSelector((state) => state.cartCount.items);
    const [productData, setProductData] = useState({});
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setErrors([]);
            const validProductIds = cartItems.map(item => item.id);
            const fetchedProducts = [];
            const errorsList = [];

            for (const id of validProductIds) {
                try {
                    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                    if (!response.ok) throw new Error(`Ошибка при загрузке продукта с id ${id}`);
                    const data = await response.json();
                    fetchedProducts.push({ id, ...data });
                } catch (error) {
                    console.error(error);
                    errorsList.push(id);
                }
            }

            const productMap = fetchedProducts.reduce((acc, product) => {
                acc[product.id] = product;
                return acc;
            }, {});

            setProductData(productMap);
            setErrors(errorsList);
            setLoading(false);
        };

        fetchProducts();
    }, [cartItems.id]);

    if (loading) {
        return <Typography>Загрузка...</Typography>;
    }

    if (cartItems.length === 0) {
        return (
            <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                <Typography variant="h6">Корзина пуста!</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                {cartItems.map((cartItem) => {
                    const product = productData[cartItem.id];

                    if (!product) {
                        return <Typography key={cartItem.id}>Товар не найден!</Typography>;
                    }

                    return (
                        <ProductItem key={cartItem.id} product={product} cartItem={cartItem} />
                    );
                })}
            </Grid>
        </Box>
    );
};

export default CartWindow;
