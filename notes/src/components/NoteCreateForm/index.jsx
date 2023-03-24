import { useState } from "react"
import styles from "./style.module.css";

export const NoteCreateForm = ({ addNoteToNoteList }) => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const submit = (event) => {
        event.preventDefault();
        const formData = {title, message};
        addNoteToNoteList(formData);
    }

    return(
        <div className={styles.formBox}> 
            <h2 className="title two">Cadastre a sua nota</h2>
            <form onSubmit={submit} className="form">
                <input placeholder="Título da nota" type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                <textarea placeholder="Mensagem" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
                <button className="btn lg solid1" type="submit">Criar nota</button>
            </form>
        </div>
    )
}