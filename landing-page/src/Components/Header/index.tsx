import logo from "../../assets/logo.svg";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />
            <form className={styles.newTaskForm}>
                <input type="text" placeholder="Add a new task" />
                <button type="submit">
                    Add
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}