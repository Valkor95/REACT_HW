import PostCatalog from "./componets";
import React, {Component, useEffect, useState} from "react";
import {fetchData} from "./componets";


const App = () => {

    const [usersPosts, setUsersPosts] = useState([]);



    useEffect(() => {
        (async () => {
            const fetchedData = await fetchData()
            setUsersPosts(fetchedData);
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
