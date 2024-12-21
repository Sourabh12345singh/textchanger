import React, {useState} from 'react'

export default function Textform(props) {
  
const handleupclick = () => {
 // console.log("upper case was clicked" + text);
  let newtext = text.toUpperCase();
  settext(newtext);
}


const cleartext = () => {
   let newtext = '';
   settext(newtext);
 }


 const handleflclick = () => {
  let newtext = cp(text);
  settext(newtext);
}
function cp(str) {
  
  return str
      .split(' ') // Split the string by spaces into an array of words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(' '); // Join the array back into a single string
}

const handlefclclick = () => {
  let newtext = fcl(text);
  settext(newtext);
}
function fcl(str) {
  return str
    .split('. ') // Split the string by ". " to separate sentences
    .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1)) // Capitalize the first letter of each sentence
    .join('. '); // Join the sentences back with ". "
}

const removeextraspaces = () => {
  let newtext = text.split(/\s+/); // Matches one or more spaces
  settext(newtext.join(" ").trim()); // Joins words with a single space and trims leading/trailing spaces
};


const copytext = () => {
  let textbox = document.getElementById("box"); // Access the textarea/input by its ID
  textbox.select(); // Selects the text inside the element
  navigator.clipboard.writeText(textbox.value); // Copies the text to the clipboard
};




const handleloclick = () => {
  let newtext = text.toLocaleLowerCase();
  settext(newtext);
}

const handleonchnage = (event) => {
  //console.log("onchange");
  settext(event.target.value);
}

  const [text, settext] = useState('Enter the text here');

  return (

    <>
      <div 
  className="container mb-3" 
  style={{ color: props.mode === 'light' ? 'black' : 'white' }}
>

    <div  className='container ' style={{ color: props.mode === 'light' ? '#2b2a2cc7' : '#000000c7' }} > 
       <h1>{props.heading}</h1>
       </div>
        <div className="my-3">
            {/* <label for="box " className="form-label"> area to write</label> */}
            <textarea className="form-control" value={text} onChange={handleonchnage}   style={{
    background: props.mode === 'light' ? 'white' : 'black',
    color: props.mode === 'light' ? 'black' : 'white',
  }} id="box"  rows = "10"  >  </textarea>
        </div>
        <button className="btn btn-dark mx-2" onClick={handleupclick}>Convert to UpperCase  </button>
        <button className="btn btn-dark mx-2" onClick={handleloclick}>Convert to lowercase  </button>
        <button className="btn btn-dark mx-2" onClick={handlefclclick}>Convert to basic form  </button>
        <button className="btn btn-dark mx-2" onClick={cleartext}>clear text  </button>
        <button className="btn btn-dark mx-2" onClick={handleflclick}>Convert to first letter capital  </button>
        <button className="btn btn-dark mx-2" onClick={removeextraspaces}>Remove Extra spaces  </button>
        <button className="btn btn-dark mx-2" onClick={copytext}>copy text </button>
    </div>

    <div class = "container my-3">
    <h3>   Your Text Summary </h3>
    <p> {text.split(" ").length -1} words and {text.length} Characters</p>
    <p> { (0.0075 ) * text.split(" ").length  } seconds will take only</p>
    <h3  >Preview</h3> 
    <p style={{color: props.mode === 'light' ? 'black' : 'white',
      background: props.mode === 'light' ? 'white' : 'black'}} rows = "10" >{text}</p>
    </div>

    </>
  )
}
