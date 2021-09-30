import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Praisemain() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/">
                    <h3>찬송메인</h3>
                </Link>
            </header>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <Link href="/praisemorning">
                        <p>Youtube api 주일예배찬양</p>
                    </Link>
                    <Link href="/praiseafternoon">
                        <p>Youtube api 연합예배찬양</p>
                    </Link>
                    <Link href="/praisechoir">
                        <p>Youtube api 성가대찬양</p>
                    </Link>
                    <Link href="/praiseoffering">
                        <p>Youtube api 헌금송</p>
                    </Link>
                </div>
            </main>
            <footer className={styles.footer}>
                <h3>footer</h3>
            </footer>
        </div>
    );
}