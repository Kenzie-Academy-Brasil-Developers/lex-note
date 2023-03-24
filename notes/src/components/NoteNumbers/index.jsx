import styles from "./style.module.css";

export const NoteNumbers = ({notesNumber, notesLength}) => {
   return (
      <div className={styles.numberBox}>
         <span className="paragraph">
            Notas: <strong>{notesNumber}</strong>
         </span>
         <span className="paragraph">
            Caracteres: <strong>{notesLength}</strong>
         </span>
      </div>
   );
};
