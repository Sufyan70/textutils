import React, {useState} from 'react'

export default function TextForm(props) {
    const ChangetoUpperCase = ()=>{
        let newText = Text.toUpperCase();
        setText(newText)
      props.showAlert("Converted to UpperCase ","success");

    }
    const ChangetoLowerCase = ()=>{
        let newText = Text.toLowerCase();
        setText(newText)
      props.showAlert("Converted to LowerCase","success");

    }
    const handleOnChnage =(event) =>{
        setText(event.target.value)
    }
    const Speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = Text;
        window.speechSynthesis.speak(msg);
      props.showAlert("Window Speak has been enabled","success");

      }
      const Remove = ()=>{
        let newText = ""
        setText(newText)
      props.showAlert("Text Remove","success");

    }
    const CopyText = ()=>{
       navigator.clipboard.writeText(Text);
      props.showAlert("Text Copied to Clipboard","success");

    }

    const [Text, setText] = useState("");
    return (
        <>
        <div className='containers' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={handleOnChnage} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#1f354c':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <div>
            <button className='btn btn-primary mx-1 my-2'disabled={Text.length ===0} onClick={ChangetoUpperCase}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-2 my-2' disabled={Text.length ===0} onClick={ChangetoLowerCase}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-2 my-2' disabled={Text.length ===0} onClick={Speak}>Speak</button>
            <button className='btn btn-primary mx-2 my-2' disabled={Text.length ===0} onClick={Remove}>Clear Text
            </button>
            <button className='btn btn-primary mx-2'disabled={Text.length ===0} onClick={CopyText}>Copy Text
            </button>
            </div>



        </div>

        <div className='conatainer my-3' style={{color:props.mode==='dark'?'white':'black'}}>
         <h2>Text Summary</h2>
         <p> {Text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {Text.length} Characters </p>
         <p>{0.008 * Text.split(" ").filter((element)=>{return element.length !== 0}).length}Minutes Read</p>
        </div>
        <div style={{color:props.mode==='dark'?'white':'black'}}>
          <h2>Preview</h2>
          <p>{Text.length > 0?Text:"Nothing to Preview!"}</p>
          </div>
        </>
    );
}
