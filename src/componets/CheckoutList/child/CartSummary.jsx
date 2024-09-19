import React from 'react';
import { Box, Typography, Button, Checkbox, FormControlLabel } from '@mui/material';

const CartSummary = ({ formik, totalAmount, totalQuantity }) => (
    <Box sx={{ p: 2, border: '1px solid gray', borderRadius: 2, width: '70%' }}>
        <Typography variant="h4">Корзина</Typography>
        <Typography variant="h6">Итого:</Typography>
        <Typography variant="body1">${totalAmount.toFixed(2)}</Typography>
        <Typography variant="body2">Количество товаров: {totalQuantity}</Typography>
        <FormControlLabel
            control={
                <Checkbox
                    name="agree"
                    color="primary"
                    checked={formik.values.agree}
                    onChange={formik.handleChange}
                />
            }
            label="I confirm the order, I accept the terms of the user agreement"
        />
        {formik.touched.agree && formik.errors.agree && (
            <Typography color="error">{formik.errors.agree}</Typography>
        )}
        <Button color="primary" variant="contained" type="submit">
            Оформить заказ
        </Button>
    </Box>
);

export default CartSummary;
