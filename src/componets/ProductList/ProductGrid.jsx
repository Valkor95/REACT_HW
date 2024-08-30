import React from 'react';
import { Grid } from "@mui/material";
import ProductCard from './ProductCard.jsx';

const ProductGrid = ({ products }) => (
    <Grid container spacing={2} sx={{ padding: 2 }}>
        {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard product={product} />
            </Grid>
        ))}
    </Grid>
);

export default ProductGrid;
