import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Notes from "./components/Notes";
import InputArea from "./components/InputArea";
import notes from "./notes";

function App() {
  const [count, setCount] = useState(0);

  const [allNotes, setNotes] = useState(notes);

  const addNote = (note) => {
    setNotes((prev) => {
      return [...prev, note];
    });
  };

  const deleteNote = (index) => {
    setNotes((prev) => {
      return prev.filter((_, idx) => {
        return idx !== index;
      });
    });
  };

  return (
    <>
      <Header />
      <InputArea addNote={addNote} />
      <Notes allNotes={allNotes} deleteNote={deleteNote} />
      <Footer />
    </>
  );
}

export default App;
