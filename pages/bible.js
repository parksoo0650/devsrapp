import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Bible() {
    return (
        <div className={styles.container}>
            <div>
                <Link href="/">Home</Link>
            </div>
            <div>성경</div>
        </div>
    );
}