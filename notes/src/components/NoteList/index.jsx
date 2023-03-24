import { NoteCard } from "./NoteCard";
import styles from "./style.module.css";

export const NoteList = ({ noteList, removeNoteFromNoteList }) => {
   return (
      <>
         {noteList.length > 0 ? (
            <ul className={styles.noteList}>
               {/* para cada objeto na minha lista, escreva um NoteCard */}
               {noteList.map((note) => {
                  return (
                     <NoteCard
                        key={note.id}
                        note={note}
                        removeNoteFromNoteList={removeNoteFromNoteList}
                     />
                  );
               })}
            </ul>
         ) : (
            <p className="paragraph">Cadastre sua primeira nota!</p>
         )}
      </>
   );
};
