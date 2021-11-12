import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';

const weeklyHeader = () => {
    const router = useRouter();

    return (
        <div>
            <Link href="/weeklymain" replace={false}>
                <a className={router.pathname === "/weeklymain" ? styles.active : ""}>메인</a>
            </Link>
            &nbsp;|&nbsp;
            <Link href="/weeklyorder" replace={false}>
                <a className={router.pathname === "/weeklyorder" ? styles.active : ""}>예배순서</a>
            </Link>
            &nbsp;|&nbsp;
            <Link href="/weeklysummary">
                <a className={router.pathname === "/weeklysummary" ? styles.active : ""}>설교요약</a>
            </Link>
            &nbsp;|&nbsp;
            <Link href="/weeklywords">
                <a className={router.pathname === "/weeklywords" ? styles.active : ""}>주중말씀</a>
            </Link>
            &nbsp;|&nbsp;
            <Link href="/weeklynews">
                <a className={router.pathname === "/weeklynews" ? styles.active : ""}>교회소식</a>
            </Link>
        </div>
    )
}

export default weeklyHeader;