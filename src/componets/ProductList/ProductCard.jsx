import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const ProductCard = ({ product }) => {
    const isSmallScreen = useMediaQuery('(max-width:1400px)');

    return (
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
    );
};

export default ProductCard;