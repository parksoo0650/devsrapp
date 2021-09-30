import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Biblemain() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/">
                    <h3>성경메인</h3>
                </Link>
            </header>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <Link href="/biblelist">
                        <p>성경목차</p>
                    </Link>
                    <Link href="/praiselist">
                        <p>찬송목차</p>
                    </Link>
                    <Link href="/search">
                        <p>검색결과</p>
                    </Link>
                </div>
            </main>
            <footer className={styles.footer}>
                <h3>footer</h3>
            </footer>
        </div>
    );
}