import React,{useState} from 'react';


export default function TextForm(props) {
     const handleOnChange=(event)=>{
        setText(event.target.value)
     }
     const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
     }
     const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
     }
     const copyText=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
     }
      const clearSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
     }
    const [text, setText]=useState("enter the text");
  return (
    <>
    
      <div className='conatainer'>
        <h1>{props.heading}</h1>
        
        <textarea className='form-control' id="myBox" rows="8" value={text} onChange={handleOnChange}style={{backgroundColor:props.mode==='light'?'dark':'light'}}></textarea>
         <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert to lower case</button>
      <button className="btn btn-primary  my-3" onClick={copyText}>Copy text</button>
      <button className="btn btn-primary mx-3 my-3" onClick={clearSpace}>Clear Space</button>
      </div>
      <div className='container'>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>
         <h2>Preview</h2>
         <p>{text}</p>
      </div>
      

     

      
    </>
  );
}
