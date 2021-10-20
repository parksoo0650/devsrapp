import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';

export default function Weeklynews() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div onClick={() => { router.push("/weeklymain"); }}>교회소식</div>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <p>내용</p>
                </div>
            </main>
        </div>
    );
}