import React from 'react';
import { TextField, Button, Grid, Card, CardContent, Typography } from '@mui/material';

const CheckoutForm = () => {
    return (
        <div>
            <h1>Checkout</h1>
            <Card>
                <CardContent>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField label="First Name" fullWidth margin="normal"/>
                                <TextField label="Last Name" fullWidth margin="normal"/>
                                <TextField label="Phone" fullWidth margin="normal"/>
                                <TextField label="Email" fullWidth margin="normal"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Address" fullWidth margin="normal"/>
                                <TextField label="City" fullWidth margin="normal"/>
                                <TextField label="Postal Code" fullWidth margin="normal"/>
                                <TextField label="Country" fullWidth margin="normal"/>
                            </Grid>
                        </Grid>
                        <Button type="submit" variant="contained" color="primary">Place Order</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default CheckoutForm;