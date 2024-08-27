import React from 'react';
import {List, ListItemButton, ListItemIcon, ListItemText, ListSubheader} from "@mui/material";

const Sidebar = () => {
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Categories
                </ListSubheader>
            }
        >
            <ListItemButton>
                <ListItemText primary="Sent mail" />
            </ListItemButton>
        </List>
    );
};

export default Sidebar;