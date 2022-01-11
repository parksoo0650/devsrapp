import { useRouter } from "next/router";
import Link from "next/link";

export default function Layout(props) {
    const router = useRouter();
    return (
        <>
            <header>
                <div>
                    <Link href="/weeklymain" replace={false}>
                        <a className={router.pathname === "/weeklymain" ? "active" : ""}>메인</a>
                    </Link>
                    &nbsp;|&nbsp;
                    <Link href="/weeklyorder" replace={false}>
                        <a className={router.pathname === "/weeklyorder" ? "active" : ""}>예배순서</a>
                    </Link>
                    &nbsp;|&nbsp;
                    <Link href="/weeklysummary">
                        <a className={router.pathname === "/weeklysummary" ? "active" : ""}>설교요약</a>
                    </Link>
                    &nbsp;|&nbsp;
                    <Link href="/weeklywords">
                        <a className={router.pathname === "/weeklywords" ? "active" : ""}>주중말씀</a>
                    </Link>
                    &nbsp;|&nbsp;
                    <Link href="/weeklynews">
                        <a className={router.pathname === "/weeklynews" ? "active" : ""}>교회소식</a>
                    </Link>
                </div>
                {props.children}
            </header>
            <style jsx>{`
            header {
                margin-top:60px;
            }
            .active {
                color: red;
            }
            `}</style>
        </>
    )
};