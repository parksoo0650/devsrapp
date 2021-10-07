import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Biblelist() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/biblemain">
                    <h3>성경목차</h3>
                </Link>
            </header>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <Link href="/bibledetail">
                        <p>창세기</p>
                    </Link>
                </div>
            </main>
            <footer className={styles.footer}>
                <h3>footer</h3>
            </footer>
        </div>
    );
}