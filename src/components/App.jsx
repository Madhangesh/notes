import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import TextArea from './TextArea.jsx';
import Note from './Note.jsx';


function App() {
  const [notes ,setNotes]=useState([]);
  
  function addNewNote(addnote){

    setNotes(prevNote => {
      return [...prevNote,addnote];
      
    });
  }

  function deleteItem(id){
    
      setNotes((prevNotes)=>{
        return prevNotes.filter((value,index)=>{
          return index!==id;
        });
      });
      
    for(let i=0;i<notes.length;i++){
      console.log(notes[i]);
    }
  }
  return (
    <div>
      <Header />
      <TextArea Add={addNewNote}/>
      <div className="grid-notes">
        {
          notes.map((value,index)=>{
            return (<Note key={index} id={index} item={value} delete={deleteItem} />)
          })
        }

      </div>
      <Footer />
      
    </div>
  );
}

export default App;
