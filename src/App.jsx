import ListData from "./componets/ListData.jsx";
import React from "react";
import {useGetPostsQuery} from "./store/API_Slice/index.js";

const formDefaultState = {
    title: '',
    body: '',
}
const App = () => {
    const {data, isLoading} = useGetPostsQuery()

    if(isLoading){
        return <h1>Loading...</h1>
    }

    if(!data){
        return <h1>No data available</h1>
    }
    return (
        <div>
            {data && data.map(post => (
                <li key={post.id || post.title}>
                    <ListData title={post.title} body={post.body}/>
                </li>
            ))}
        </div>

    );
};

export default App;
