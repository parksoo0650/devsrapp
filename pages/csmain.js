import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Csmain() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/">
                    <h3>더보기메인</h3>
                </Link>
            </header>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <Link href="/csnotice">
                        <p>공지사항</p>
                    </Link>
                    <Link href="/csdeclaration">
                        <p>신고접수</p>
                    </Link>
                    <Link href="/settings">
                        <p>앱설정</p>
                    </Link>
                </div>
            </main>
            <footer className={styles.footer}>
                <h3>footer</h3>
            </footer>
        </div>
    );
}