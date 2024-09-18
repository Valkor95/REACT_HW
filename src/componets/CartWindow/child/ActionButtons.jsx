import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../store/slices/cartCount.js';
import { ROUTES } from '../../../utils/routes.js';
import { cardHoverScale } from '../../../styles/Other/CardHover/index.js';

const ActionButtons = () => {
    const dispatch = useDispatch();

    return (
        <Box sx={{ marginTop: 2 }}>
            <Button
                sx={{ ...cardHoverScale, marginRight: 2 }}
                variant="contained"
                color="secondary"
                onClick={() => dispatch(clearCart())}
            >
                Очистить корзину
            </Button>
            <Link to={ROUTES.CHECKOUT}>
                <Button
                    variant="contained"
                    color="success"
                    sx={cardHoverScale}
                >
                    Оформить заказ
                    <ShoppingCartCheckoutIcon style={{ color: 'white', marginLeft: 10 }} />
                </Button>
            </Link>
        </Box>
    );
};

export default ActionButtons;
