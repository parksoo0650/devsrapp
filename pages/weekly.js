import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Weekly() {
    return (
        <div className={styles.container}>
            <div>
                <Link href="/">Home</Link>
            </div>
            <div>주보</div>
        </div>
    );
}