import React from 'react';
import {Box, Grid, Paper} from "@mui/material";
import {styled} from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const CartWindow = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Item size={12} xs={{maxWidth: 'auto'}}>
                    <Grid size={6}>
                        <Item>size=8</Item>
                    </Grid>
                    <Grid size={3}>
                        <Item>size=4</Item>
                    </Grid>
                    <Grid size={3}>
                        <Item>size=4</Item>
                    </Grid>
                </Item>
            </Grid>
        </Box>
    );
};

export default CartWindow;