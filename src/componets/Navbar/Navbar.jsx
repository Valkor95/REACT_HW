// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <NavLink to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Интернет-магазин
                    </NavLink>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
