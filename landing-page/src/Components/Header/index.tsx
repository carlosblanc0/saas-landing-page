import logo from "../../assets/logo.svg";
import styles from "./header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />
            <form className={styles.newTaskForm}>
                <input type="text" placeholder="Add a new task" />
                <button type="submit">Add</button>
            </form>
        </header>
    )
}