import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';

export default function Onmain() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div onClick={() => { router.push("/onsub?flag=1"); }}>온특새</div>
                <div onClick={() => { router.push("/onsub?flag=2"); }}>온삼분</div>
                <div onClick={() => { router.push("/onsub?flag=3"); }}>온성경</div>
            </div>
        </div>
    );
}