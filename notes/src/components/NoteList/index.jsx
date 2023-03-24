import { NoteCard } from "./NoteCard";

export const NoteList = ({ noteList, removeNoteFromNoteList }) => {
   return (
      <>
         {noteList.length > 0 ? (
            <ul>
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
            <p>Cadastre sua primeira nota!</p>
         )}
      </>
   );
};
