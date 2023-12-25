import React from "react";
import  '../styles.css';

function Note(props){
  function Delete(){
    props.delete(props.id)
  }
  return (
    <div className="note">
        <div className="item">
          <div className="inputs">
            <h1>{props.item.title}</h1>
            <p>{props.item.content}</p>
          </div>
          <button className="delete-btn" onClick={Delete}><i class="bi bi-trash-fill"></i></button>
        </div>
    </div>
  )
}

export default Note;