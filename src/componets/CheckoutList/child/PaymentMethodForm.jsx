import React from 'react';
import { Box, FormControl, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';

const PaymentMethodForm = ({ formik }) => (
    <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Метод оплаты</Typography>
        <FormControl component="fieldset">
            <RadioGroup
                name="paymentMethod"
                value={formik.values.paymentMethod}
                onChange={formik.handleChange}
            >
                <FormControlLabel value="cashOnDelivery" control={<Radio />} label="Оплата при получении" />
                <FormControlLabel value="onlinePayment" control={<Radio />} label="Онлайн оплата" />
            </RadioGroup>
        </FormControl>
    </Box>
);

export default PaymentMethodForm;
