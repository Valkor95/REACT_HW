import ListData from "./componets/ListData.jsx";
import React from "react";
import {useGetPostsQuery} from "./store/API_Slice/index.js";
import {CircularProgress} from "@mui/material";
import {centredStyle} from "./style/index.js";

const formDefaultState = {
    title: '',
    body: '',
}
const App = () => {
    const {data, isLoading} = useGetPostsQuery()

    if(isLoading){
        return <CircularProgress sx={centredStyle}/>
    }

    if(!data){
        return <h1>No data available</h1>
    }
    return (
        <div>
            {data && data.map(post => (

                    <ListData key={post.id} title={post.title} body={post.body}/>

            ))}
        </div>

    );
};

export default App;
