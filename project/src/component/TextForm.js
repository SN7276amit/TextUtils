import React,{useState} from 'react'

export default function TextForm(props) {
    const handleLoClick=()=>{
        // console.log("LowerCase Was Clicked"+text)
        setText(text.toLowerCase())
        props.showAlert("Converted To Lowercase !","success")
    }

    const handleUpClick=()=>{
    //  console.log("UpperCase was Clicked" + text)
     setText(text.toUpperCase())
     props.showAlert("Converted To Uppercase !","success")
    }  
    const handleClearClick=()=>{
      setText("")
      props.showAlert("All Cleared !","success")
    }
    const handleCopy=()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Data Copied !","success")

    }
    const handleExtraSpaces=()=>{
      let newText= text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed !","success")
    }

    const handleOnChange=(event)=>{
       console.log("on change");
       setText(event.target.value)
    }

    const [text,setText]=useState("");
    
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-1" disabled={text.length===0}  onClick={handleUpClick}>Convert To UpperCase</button> &nbsp;
        <button className="btn btn-primary my-1" disabled={text.length===0}  onClick={handleLoClick}>Convert To LowerCase</button> &nbsp; 
        <button className="btn btn-primary my-1" disabled={text.length===0}  onClick={handleClearClick}>Clear Text</button> &nbsp;
        <button className="btn btn-primary my-1" disabled={text.length===0}  onClick={handleCopy}>Copy Text</button> &nbsp;
        <button className="btn btn-primary my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra spaces</button> &nbsp;

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
