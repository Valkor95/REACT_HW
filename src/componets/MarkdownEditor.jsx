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
        });

        editorInstanceRef.current.addHook('change', () =>{
            const content = editorInstanceRef.current.getMarkdown();
            onContentChange(content);
        });

        return () => {
            editorInstanceRef.current.destroy();
        };
    }, [onContentChange]);

        return <div ref={editorRef}/>

}

export default MarkdownEditor