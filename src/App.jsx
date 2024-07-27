import PostCatalog from "./componets/PostCatalog.jsx";
import React from "react";


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            usersPosts: []
        }

        this.fetchUsersPosts()
    }

    async fetchUsersPosts() {
        const request = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await request.json();
        const filtredData = data.map(({id, title, body}) => {
            return {id, title, body}
        })
        this.setState({usersPosts: filtredData})
    }

    render() {
        return (
          <PostCatalog
              className='p-5 m-5'
              data={this.state.usersPosts}
          />
        )
    }
}

export default App
