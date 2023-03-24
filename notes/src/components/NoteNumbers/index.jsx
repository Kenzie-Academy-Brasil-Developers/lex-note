export const NoteNumbers = ({notesNumber, notesLength}) => {
   return (
      <div>
         <span>
            Notas: <strong>{notesNumber}</strong>
         </span>
         <span>
            Caracteres: <strong>{notesLength}</strong>
         </span>
      </div>
   );
};
