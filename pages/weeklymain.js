import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';

export default function Weeklymain() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div onClick={() => { router.push("/weeklyorder"); }}>예배순서</div>
                <div onClick={() => { router.push("/weeklysummary"); }}>설교요약</div>
                <div onClick={() => { router.push("/weeklywords"); }}>주중말씀</div>
                <div onClick={() => { router.push("/weeklynews"); }}>교회소식</div>
            </div>
        </div>
    );
}