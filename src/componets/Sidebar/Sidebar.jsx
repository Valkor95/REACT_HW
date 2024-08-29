import React, {useState} from 'react';
import {List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography} from "@mui/material";
import {
    useGetProductsQuery,
    useLazyGetCategoriesQuery,
    useLazyGetProductsQuery
} from "../../store/API/slices/fakeStoreApi.js";
import {useDispatch, useSelector} from "react-redux";
import {toggleVisibility} from "../../store/slices/visibility.js";
import {Link} from "react-router-dom";


const Sidebar = () => {
    const dispatch = useDispatch();
    const isVisible = useSelector((state) => state.visibility.isVisible)

    const [trigger, {data:categories, isLoading}] = useLazyGetCategoriesQuery()


    const handleSubheaderClick = () => {
        if(categories){
            dispatch(toggleVisibility());
        } else{
            trigger();
            dispatch(toggleVisibility(true))
        }
    }

    if(isLoading) return <Typography variant='body'>Loading...</Typography>
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    onClick={handleSubheaderClick}
                    style={{ cursor: 'pointer' }}
              >
                    CATEGORIES
                </ListSubheader>
            }
        >
            {isVisible && categories && categories.map((category) => (
                <Link
                    key={category}
                    to={`/category/:${category}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton
                    key={category}
                >
                    <ListItemText primary={category.charAt(0).toUpperCase() + category.slice(1)} />
                </ListItemButton>
                </Link>
            ))}
            { isVisible && categories && (
                <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItemButton>
                        <ListItemText primary='All' />
                    </ListItemButton>
                </Link>
                )}

        </List>
    );
};

export default Sidebar;