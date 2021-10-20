import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';

export default function Csdeclaration() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div onClick={() => { router.push("/csmain"); }}>신고접수</div>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <div onClick={() => { router.push("/boardview"); }}>리스트</div>
                    <div onClick={() => { router.push("/boardwrite"); }}>글쓰기</div>
                </div>
            </main>
        </div>
    );
}