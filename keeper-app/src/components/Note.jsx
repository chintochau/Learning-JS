import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


const Note = ({ note, deleteNote, id }) => {
  const { title, content } = note;
  return (
    <div className="note box">
      <h1>{title}</h1>
      <p>{content}</p>
      <button className="delete-button" onClick={() => deleteNote(id)}><DeleteIcon /></button>
    </div>
  );
};

export default Note;
