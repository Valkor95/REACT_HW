import React, { useEffect } from 'react';
import {useGetProductsQuery} from "../../store/API/slices/apiFakeStore.js";
import {Box, Card, Grid, ImageList, ImageListItem, Typography} from "@mui/material";

const ProductList = () => {
    const {data: product, error, isLoading} = useGetProductsQuery()

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;
    return (
        <div>
            <Box sx={{ width: '100%', height: 'auto' }}>
                <ImageList sx={{ width: '100%', height: 'auto' }} cols={3} rowHeight='auto'>
                    {product.map(item => (
                        <ImageListItem key={item.id} sx={{ width: '100%', height: 'auto' }}>
                            <Box sx={{ position: 'relative' }}>
                                <img
                                    srcSet={`${item.image}?w=248&fit=crop&auto=format`}
                                    src={`${item.image}?w=248&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                />
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    padding: '8px',
                                    textAlign: 'center'
                                }}>
                                    <Typography variant="h6" component="div">{item.title}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ padding: '8px', textAlign: 'center' }}>
                                <Typography variant="body2">{item.description}</Typography>
                                <Typography variant="body2">Price: ${item.price}</Typography>
                                <Typography variant="body2">Category: {item.category}</Typography>
                            </Box>
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div>
    );
};

export default ProductList;
