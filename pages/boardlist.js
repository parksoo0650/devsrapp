import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';

export default function Boardlist() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div onClick={() => { router.push("/csnotice"); }}>공지사항</div>
                <div onClick={() => { router.push("/csdeclaration"); }}>신고접수</div>
                <div onClick={() => { router.push("/settings"); }}>앱설정</div>
            </div>
        </div>
    );
}