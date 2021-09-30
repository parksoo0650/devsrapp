import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Onmain() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/">
                    <h3>온콘텐츠</h3>
                </Link>
            </header>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <Link href="/onm">
                        <p>Youtube api 온특새</p>
                    </Link>
                    <Link href="/on3">
                        <p>Youtube api 온삼분</p>
                    </Link>
                    <Link href="/onb">
                        <p>Youtube api 온성경</p>
                    </Link>
                </div>
            </main>
            <footer className={styles.footer}>
                <h3>footer</h3>
            </footer>
        </div>
    );
}