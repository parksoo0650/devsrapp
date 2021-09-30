import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Boardwrite() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/csmain">
                    <h3>게시판글쓰기</h3>
                </Link>
            </header>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <p>내용</p>
                </div>
            </main>
            <footer className={styles.footer}>
                <h3>footer</h3>
            </footer>
        </div>
    );
}