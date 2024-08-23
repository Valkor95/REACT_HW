import React from 'react';
import { Card, CardContent, Typography, Button, List, ListItem } from '@mui/material';

const cartItems = [
    { id: 1, name: 'Product 1', price: '$10', quantity: 1 },
    { id: 2, name: 'Product 2', price: '$20', quantity: 2 },
];
const Cart = () => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * parseFloat(item.price.slice(1)), 0);
    return (
        <div>
            <h1>Shopping Cart</h1>
            <Card>
                <CardContent>
                    <List>
                        {cartItems.map(item => (
                            <ListItem key={item.id}>
                                <Typography>{item.name} - {item.quantity} x {item.price}</Typography>
                            </ListItem>
                        ))}
                    </List>
                    <Typography variant="h6">Total: ${totalPrice}</Typography>
                    <Button>Proceed to Checkout</Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default Cart;