import React, {useEffect, useRef} from "react";
import Editor from "@toast-ui/editor";
import '@toast-ui/editor/dist/toastui-editor.css'

const MarkdownEditor = ({onContentChange}) => {
    const editorRef = useRef(null);
    const editorInstanceRef = useRef(null);

    useEffect(() => {
        editorInstanceRef.current = new Editor({
            el: editorRef.current,
            hideModeSwitch: true,
        })

        editorInstanceRef.current.addHook('change', () =>{

        })
    }, []);

        return <h1>Hello</h1>

}

export default MarkdownEditor