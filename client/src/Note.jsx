import React from "react";


function Note(props){
    return (
    
        <div className="container">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <button className="editbut">EDIT</button>
        <button className="deletebut">DELETE</button>
    </div>
  )
}
export default Note;