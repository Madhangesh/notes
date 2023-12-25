import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import  '../styles.css';



function TextArea(props){

  const [note,setNote]= useState({
    title:"",
    content:""
  });
  const[showTitle,setShowTitle]=useState(false);
  const[showTitleRow,setShowTitleRow]=useState(1);

  function HandleChange(event){
    let {name,value}=event.target;
    
    setNote(prev=>{
        return {...prev,[name]:value}
      });
  }

  function HandleClick(event){
    props.Add(note);
    setNote({
      title:"",
      content:""
    });
    event.preventDefault();
    
  }
  function ToggleShow(){
    setShowTitle(true);
    setShowTitleRow(2.7);

  }
  
  return (
    <div className="form-area">

      <form action="/">
        <div className="inputs" >
          {showTitle &&
          <input 
          name="title"
          className="input-title Width" 
          placeholder="Title" 
          type="text" 
          value={note.title}

          onChange={HandleChange}
          />
          }

          <textarea 
          name="content"
          className="input-area Width" 
          placeholder="Content" 
          id="textArea" 
          onChange={HandleChange}
          onClick={ToggleShow}
          value={note.content}
          cols="50" 
          rows={showTitleRow}></textarea>
        </div>
        
        {showTitle &&<button className="submit-btn" onClick={HandleClick} type="submit">+</button>}
      </form>
    </div>
  );
}

export default TextArea;