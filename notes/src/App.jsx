import { Header } from "./components/Header"
import { NoteCreateForm } from "./components/NoteCreateForm"
import { NoteNumbers } from "./components/NoteNumbers"
import { NoteList } from "./components/NoteList"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [noteList, setNoteList] = useState([]);
  console.log(noteList);

  const notesNumber = noteList.length;

  const notesLength = noteList.reduce((previousValue, note) => {
    return previousValue + note.message.length + note.title.length;
  }, 0)

  const addNoteToNoteList = (formData) => {
    /* title, message */
    const newNote = { ...formData, id: uuidv4() }
    const newNoteList = [...noteList, newNote];
    setNoteList(newNoteList);
  }

  const removeNoteFromNoteList = (noteId) => {
    console.log(noteId);
    /* true - mantem / false - exclui */
    const newNoteList = noteList.filter(note => note.id !== noteId);
    //Todas as notas menos a nota a ser removida
    setNoteList(newNoteList);
  }
  
  return (
    <div>
      <Header />
      <main>
        <div>
          <NoteCreateForm addNoteToNoteList={addNoteToNoteList} />
        </div>
        <div>
          <h1>Lista de notas</h1>
          <NoteNumbers notesNumber={notesNumber} notesLength={notesLength}  />
          <NoteList noteList={noteList} removeNoteFromNoteList={removeNoteFromNoteList} />
        </div>
      </main>      
    </div>
  )
}

export default App
