import ListData from "./componets/ListData.jsx";
import React from "react";
import {useGetPostsQuery} from "./store/API_Slice/index.js";

const formDefaultState = {
    title: '',
    body: '',
}
const App = () => {
    const {data, isLoading} = useGetPostsQuery()

    return (
        <div>
            {data.map(post => (
                <li key={post.id || post.title}>
                    <ListData title={post.title} body={post.body}/>
                </li>
            ))}
        </div>

    );
};

export default App;
