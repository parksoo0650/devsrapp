import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Weeklymain() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/">
                    <h3>온라인주보</h3>
                </Link>
            </header>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <Link href="/weeklyorder">
                        <p>예배순서</p>
                    </Link>
                    <Link href="/weeklysummary">
                        <p>설교요약</p>
                    </Link>
                    <Link href="/weeklywords">
                        <p>주중말씀</p>
                    </Link>
                    <Link href="/weeklynews">
                        <p>교회소식</p>
                    </Link>
                </div>
            </main>
            <footer className={styles.footer}>
                <h3>footer</h3>
            </footer>
        </div>
    );
}