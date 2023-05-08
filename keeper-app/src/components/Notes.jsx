import React from "react";
import Note from "./Note";

const Notes = ({ allNotes,deleteNote }) => {
  return (
    <div>
      {allNotes.map((entry, index) => {
        return <Note key={index} note={entry} deleteNote={deleteNote} id={index} />;
      })}
    </div>
  );
};

export default Notes;
