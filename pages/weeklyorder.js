import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';

export default function Weeklyorder() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div onClick={() => { router.push("/weeklymain"); }}>예배순서</div>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <p>내용</p>
                </div>
            </main>
        </div>
    );
}