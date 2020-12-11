import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([
    { title: "Test Title", content: "Text Content" },
    { title: "Test Title2", content: "Text Content2" }
  ]);

  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((note, index) => {
        return <Note key={index} title={note.title} content={note.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
