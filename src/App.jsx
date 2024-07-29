import MarkdownEditor from "./componets/MarkdownEditor.jsx";
import React from "react";
import '@toast-ui/editor/dist/toastui-editor.css';


class App extends React.Component{
    render() {
        return (
          <MarkdownEditor onContentChange={console.log}/>
        )
    }
}

export default App
