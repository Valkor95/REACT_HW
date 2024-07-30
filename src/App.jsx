import PostCatalog from "./componets";
import React, {Component, useEffect, useState} from "react";


const App = () => {

    const [usersPosts, setUsersPosts] = useState([]);

    const fetchData = async () => {
        const request = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await request.json()
        const filtredData = data.map(({id, title, body}) => {
            return {id, title, body}
        })
        setUsersPosts(filtredData)
    }

    useEffect(() => {
        (async () => {
            await fetchData();
        })();
    }, []);

    return (
        <PostCatalog
              className='PostCatalog'
              data={usersPosts}
          />
    );
};

export default App
