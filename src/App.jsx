import ListData from "./componets/ListData.jsx";
import React, {useEffect, useState} from "react";
import {useGetPostsQuery} from "./store/API_Slice/index.js";
import {Button, CircularProgress, Stack} from "@mui/material";
import {centredStyle} from "./style/index.js";
import DataForm from "./componets/DataForm.jsx";


const App = () => {
    const {data, isLoading, refetch } = useGetPostsQuery()

    useEffect(() => {
        if (!isLoading && data){
            setDataArr(data)
        }
    }, [data, isLoading]);


    const [dataArr, setDataArr] = useState([])

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
            <Stack spacing={3}>
                <DataForm/>
                {data && dataArr.map(post => (
                        <ListData
                            key={post.id || post.title}
                            title={post.title}
                            body={post.body}
                            id={post.id}
                        />
                ))}
            </Stack>
        </div>

    );
};

export default App;
