import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';

export default function Settings() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div onClick={() => { router.push("/csmain"); }}>앱설정</div>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <p>알림설정</p>
                </div>
            </main>
        </div>
    );
}