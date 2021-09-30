import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Sermonmain() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/">
                    <h3>말씀메인</h3>
                </Link>
            </header>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <Link href="/sermon">
                        <p>Youtube api 대예배</p>
                    </Link>
                    <Link href="/berea">
                        <p>Youtube api 환언특강</p>
                    </Link>
                </div>
            </main>
            <footer className={styles.footer}>
                <h3>footer</h3>
            </footer>
        </div>
    );
}