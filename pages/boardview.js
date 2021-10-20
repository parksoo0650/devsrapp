import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';

export default function Boardview() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div onClick={() => { router.push("/csmain"); }}>리스트</div>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <p>내용</p>
                </div>
            </main>
        </div>
    );
}