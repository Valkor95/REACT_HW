import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/slices/cartCount.js";
import {cardHover} from "../../styles/Other/CardHover/index.js";

const ProductCard = ({ product }) => {
    const isSmallScreen = useMediaQuery('(max-width:1400px)');
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({id: product.id}));
    };

    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    };

    return (
        <Card sx={{ maxWidth: 345, ...cardHover, padding: "15px"}}>
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
                        <Typography gutterBottom variant="h5" component="div">
                            {product.price}$
                        </Typography>
                    </Box>
                ) : (
                    <Typography gutterBottom variant="h4" component="div">
                        {product.price}$
                    </Typography>
                )}

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {truncateText(product.description, 10)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Detail</Button>
                <Button size="small" onClick={handleAddToCart}>Add to cart</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;