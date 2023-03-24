import styles from "./style.module.css";

export const NoteCard = ({note, removeNoteFromNoteList}) => {
    return(
        <li className={styles.noteCard}>
            <h3 className="title two">{note.title}</h3>
            <p className="paragraph">{note.message}</p>
            <button className="btn sm solid1" onClick={() => removeNoteFromNoteList(note.id)}>Excluir</button>
        </li>
    )
}