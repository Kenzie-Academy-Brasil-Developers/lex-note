import { useState } from "react"

export const NoteCreateForm = ({ addNoteToNoteList }) => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const submit = (event) => {
        event.preventDefault();
        const formData = {title, message};
        addNoteToNoteList(formData);
    }

    return(
        <div>
            <h2>Cadastre a sua nota</h2>
            <form onSubmit={submit}>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                <textarea value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
                <button type="submit">Criar nota</button>
            </form>
        </div>
    )
}