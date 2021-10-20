import { useRouter } from "next/router";
import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function Praiselist() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div onClick={() => { router.push("/biblemain"); }}>찬송</div>
            <main className={styles.main}>
                <div className={styles.grid}>
                    <Link href="/praisedetail">
                        <p>리스트</p>
                    </Link>
                </div>
            </main>
        </div>
    );
}