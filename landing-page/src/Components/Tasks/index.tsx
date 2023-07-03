import styles from './tasks.module.css';

export function Tasks() {
    return (
        <section className={styles.task}>
            <header>
                <div>
                    <p>Today</p>
                    <span>10</span>
                </div>

                <div>
                    <p>Complete</p>
                    <span>1 of 10</span>
                </div>
            </header>
        </section>
    )
}