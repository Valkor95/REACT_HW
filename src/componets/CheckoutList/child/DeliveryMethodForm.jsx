import React from 'react';
import { Box, TextField, FormControl, RadioGroup, FormControlLabel, Radio, Typography, Select, MenuItem, InputLabel } from '@mui/material';

const DeliveryMethodForm = ({ formik, deliveryMethod, setDeliveryMethod, warehouses }) => (
    <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Выбор способа доставки</Typography>
        <FormControl component="fieldset">
            <RadioGroup
                name="deliveryMethod"
                value={deliveryMethod}
                onChange={(e) => setDeliveryMethod(e.target.value)}
            >
                <FormControlLabel value="pickup" control={<Radio />} label="Самовывоз" />
                <FormControlLabel value="novaPoshta" control={<Radio />} label="Новая Почта" />
            </RadioGroup>
        </FormControl>

        {deliveryMethod === 'novaPoshta' && (
            <>
                <TextField
                    fullWidth
                    id="receiverLastName"
                    name="receiverLastName"
                    label="Фамилия получателя"
                    value={formik.values.receiverLastName}
                    onChange={formik.handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="receiverFirstName"
                    name="receiverFirstName"
                    label="Имя получателя"
                    value={formik.values.receiverFirstName}
                    onChange={formik.handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="receiverPatronymic"
                    name="receiverPatronymic"
                    label="Отчество получателя"
                    value={formik.values.receiverPatronymic}
                    onChange={formik.handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="receiverPhone"
                    name="receiverPhone"
                    label="Телефон получателя"
                    value={formik.values.receiverPhone}
                    onChange={formik.handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="deliveryDate"
                    name="deliveryDate"
                    label="Дата доставки"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={formik.values.deliveryDate}
                    onChange={formik.handleChange}
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel id="warehouse-label">Склад</InputLabel>
                    <Select
                        labelId="warehouse-label"
                        id="warehouse"
                        name="warehouse"
                        value={formik.values.warehouse}
                        onChange={formik.handleChange}
                    >
                        {warehouses.length > 0 ? (
                            warehouses.map((warehouse) => (
                                <MenuItem key={warehouse.WarehouseID} value={warehouse.Description}>
                                    {warehouse.Description}
                                </MenuItem>
                            ))
                        ) : (
                            <MenuItem value="" disabled>
                                Нет доступных складов
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>
            </>
        )}
    </Box>
);

export default DeliveryMethodForm;
