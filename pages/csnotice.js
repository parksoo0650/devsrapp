import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Csnotice() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/csmain">
                    <h3>공지사항</h3>
                </Link>
            </header>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <Link href="/boardview">
                        <p>리스트</p>
                    </Link>
                    <Link href="/boardwrite">
                        <p>글쓰기</p>
                    </Link>
                </div>
            </main>
            <footer className={styles.footer}>
                <h3>footer</h3>
            </footer>
        </div>
    );
}