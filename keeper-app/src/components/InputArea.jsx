import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Fab from "@mui/material/Fab";

import Zoom from "@mui/material/Zoom";

const InputArea = ({ addNote }) => {
  const [note, writeNote] = useState({
    title: "",
    content: "",
  });

  const updateNote = (e) => {
    const { value, name } = e.target;

    writeNote((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const [isExpanded, setExpand] = useState(false);

  return (
    <div className="inputBox">
      <div className="innerBox box">
        {isExpanded && (
          <input
            name="title"
            className="input first"
            placeholder="Title"
            value={note.title}
            onChange={updateNote}
          />
        )}
        <textarea
          name="content"
          className="input second"
          placeholder="Take a note..."
          value={note.content}
          onChange={updateNote}
          onClick={() => setExpand(true)}
        />
      </div>
      <Zoom in={isExpanded}>
        <Fab
          color="primary"
          onClick={() => {
            addNote(note);
            writeNote({ title: "", content: "" });
          }}
          className="button box"
        >
          <AddCircleIcon />
        </Fab>
      </Zoom>
    </div>
  );
};

export default InputArea;
