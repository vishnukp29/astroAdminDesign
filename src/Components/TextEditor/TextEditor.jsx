import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";


const TextEditor = () => {
  const modules = {
    toolbar:[
      [
        'bold', 'italic', 'underline', 'strike',
        'align', 'list', 'indent',
        'size', 'header',
        'link', 'color', 'background',
        'clean',
      ]
    ]
  }

  const { quill, quillRef } = useQuill(modules);
  const [value,setValue] = useState()

  useEffect(()=>{
    if(quill){
      quill.on("text-change",()=>{
        console.log(quillRef.current.firstChild.innerHTML);
        setValue(quillRef.current.firstChild.innerHTML);
      })
    }
  },[quill])

  console.log(value,'This is quill editor')

  return (
    <div>
      <div className="w-full " >
        <div ref={quillRef} />
      </div>
      {/* <div style={{ width: 800, height: 90 }} >
        <div ref={quillRef} />
      </div> */}
    </div>
  );
};

export default TextEditor;
