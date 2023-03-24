import { Header } from "./components/Header";
import { NoteCreateForm } from "./components/NoteCreateForm";
import { NoteNumbers } from "./components/NoteNumbers";
import { NoteList } from "./components/NoteList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/index.css";
import styles from "./styles/pages/home.module.css";

function App() {
   const [noteList, setNoteList] = useState([]);

   const notesNumber = noteList.length;

   const notesLength = noteList.reduce((previousValue, note) => {
      return previousValue + note.message.length + note.title.length;
   }, 0);

   const addNoteToNoteList = (formData) => {
      /* title, message */
      const newNote = { ...formData, id: uuidv4() };
      const newNoteList = [...noteList, newNote];
      setNoteList(newNoteList);
   };

   const removeNoteFromNoteList = (noteId) => {
      console.log(noteId);
      /* true - mantem / false - exclui */
      const newNoteList = noteList.filter((note) => note.id !== noteId);
      //Todas as notas menos a nota a ser removida
      setNoteList(newNoteList);
   };

   return (
      <div>
         <Header />
         <main className="container">
            <div className={styles.flexBox}>
               <div className={styles.left}>
                  <NoteCreateForm addNoteToNoteList={addNoteToNoteList} />
               </div>
               <div className={styles.right}>
                  <h1 className="title one">Lista de notas</h1>
                  <NoteNumbers notesNumber={notesNumber} notesLength={notesLength} />
                  <NoteList
                     noteList={noteList}
                     removeNoteFromNoteList={removeNoteFromNoteList}
                  />
               </div>
            </div>
         </main>
      </div>
   );
}

export default App;
