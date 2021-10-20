import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';

export default function Biblemain() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div onClick={() => { router.push("/biblelist"); }}>성경</div>
                <div onClick={() => { router.push("/praiselist"); }}>찬송</div>
                <div onClick={() => { router.push("/search"); }}>검색</div>
            </div>
        </div>
    );
}