import { useRouter } from "next/router";
import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function Search() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div onClick={() => { router.push("/biblemain"); }}>검색결과</div>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <p>리스트</p>
                </div>
            </main>
        </div>
    );
}