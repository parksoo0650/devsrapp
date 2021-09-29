import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Bible() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/">
                    <h3>Home</h3>
                </Link>
            </header>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <p>성경 api</p>
                </div>
            </main>
            <footer className={styles.footer}>
                <h3>footer</h3>
            </footer>
        </div>
    );
}