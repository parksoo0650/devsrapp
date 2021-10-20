import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';

export default function Praisemain() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div onClick={() => { router.push("/praisesub?flag=1"); }}>주일예배찬양</div>
                <div onClick={() => { router.push("/praisesub?flag=2"); }}>연합예배찬양</div>
                <div onClick={() => { router.push("/praisesub?flag=3"); }}>성가대찬양</div>
                <div onClick={() => { router.push("/praisesub?flag=4"); }}>헌금송</div>
            </div>
        </div>
    );
}