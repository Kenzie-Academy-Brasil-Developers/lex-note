import Logo from "../../assets/LexNote.png"
import styles from "./style.module.css"

export const Header = () => {
    return(
        <header className={styles.header}>
            <img src={Logo} alt="Logo Lexnote" />
        </header>
    )
}