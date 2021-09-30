import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Search() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/biblemain">
                    <h3>검색결과</h3>
                </Link>
            </header>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <Link href="/bibledetail">
                        <p>리스트1</p>
                    </Link>
                </div>
            </main>
            <footer className={styles.footer}>
                <h3>footer</h3>
            </footer>
        </div>
    );
}