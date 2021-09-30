import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Praiselist() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/biblemain">
                    <h3>찬송목차</h3>
                </Link>
            </header>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <Link href="/praisedetail">
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