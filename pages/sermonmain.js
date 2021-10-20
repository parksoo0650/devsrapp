import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';

export default function Sermonmain() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div onClick={() => { router.push("/sermon?flag=1"); }}>대예배</div>
                <div onClick={() => { router.push("/sermon?flag=2"); }}>환언특강</div>
            </div>
        </div>
    );
}