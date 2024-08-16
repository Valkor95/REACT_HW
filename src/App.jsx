import ListData from "./componets/ListData.jsx";
import React from "react";
import {useGetPostsQuery} from "./store/API_Slice/index.js";
import {Button, CircularProgress} from "@mui/material";
import {centredStyle} from "./style/index.js";

const formDefaultState = {
    title: '',
    body: '',
}
const App = () => {
    const {data, isLoading, refetch } = useGetPostsQuery()

    if(isLoading){
        return <CircularProgress sx={centredStyle}/>
    }

    if(!data){
        return <h1>No data available</h1>
    }
    return (
        <div>
            {!data && (
                <Button
                    sx={centredStyle}
                    onClick={() => refetch()}
                >
                    Refetch Data
                </Button>
            )}

            {data && data.map(post => (
                    <ListData
                        key={post.id || post.title}
                        title={post.title}
                        body={post.body}
                    />
            ))}
        </div>

    );
};

export default App;
