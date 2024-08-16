import React from "react";
import {Box} from "@mui/material";

const ListData = ({title, body}) => {
    return (
        <div>
            <Box component="section" sx={{p: 2, border: '1px solid grey'}}>
                <h1>{title}</h1>
                <p>{body}</p>
            </Box>


        </div>
    );
};

export default ListData;
