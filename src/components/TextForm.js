import React, {useState} from 'react'

export default function TextForm(props) {
   
    const handleUpClick = ()=>{
       // console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{
        //console.log("UpperCase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase!", "success");
    }

    const handleclearClick = ()=>{
        //console.log("UpperCase was Clicked" + text);
        let newText ='';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const handlecopy = ()=>{ 
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpace = ()=>{ 
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed!", "success");
    }

    const [text, setText] = useState(' ');

    return (
     <>
     <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
            color: props.mode==='dark'?'white':'#042743' }} 
          id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
     </div> 
     <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743' }}>
        <h2>Your text summary</h2>   
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words, {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

     </div>
     </>  
    )
}

