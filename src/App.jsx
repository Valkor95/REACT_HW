import PostCatalog from "./componets";
import React, {useState} from "react";


import React from 'react';

const App = () => {

    const [usersPosts, setUsersPosts] = useState([]);



    return (
        <div>

        </div>
    );
};


// class App extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             usersPosts: []
//         }
//
//         this.fetchUsersPosts()
//     }
//
//     async fetchUsersPosts() {
//         const request = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await request.json();
//         const filtredData = data.map(({id, title, body}) => {
//             return {id, title, body}
//         })
//         this.setState({usersPosts: filtredData})
//     }
//
//     render() {
//         return (
//           <PostCatalog
//               className='PostCatalog'
//               data={this.state.usersPosts}
//           />
//         )
//     }
// }

export default App
