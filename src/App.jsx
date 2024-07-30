import PostCatalog from "./componets";
import React, {Component, useEffect, useState} from "react";


const App = () => {

    const [usersPosts, setUsersPosts] = useState([]);



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
