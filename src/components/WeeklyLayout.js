import { useRouter } from "next/router";
import Link from "next/link";

export default function Layout(props) {
    const router = useRouter();
    return (
        <>
            <div className="sub_container jubo_wrap sermon_detail">
                <div className="top_area">
                    <span className="btn_prev"></span>
                    <div className="top_title">주보</div>
                    <div className="info">
                        <span className="date">2021. 12. 5</span>
                        <span className="issue">제 51권 50호</span>
                    </div>
                </div>
                <div className="visual">
                    <div className="title">이름으로도 기억되는 자</div>
                    <div className="eng">Those who are Konwn by Name</div>
                    <div className="bible">[마가복음 13:24~37]</div>
                </div>

                <div className="section">
                    <ul className="tab_area">
                        <Link href="/weeklyorder" replace={false}>
                            <li className={router.pathname === "/weeklyorder" ? "on" : ""}>
                                <a>예배순서</a>
                            </li>
                        </Link>
                        <Link href="/weeklysummary">
                            <li className={router.pathname === "/weeklysummary" ? "on" : ""}>
                                <a>설교요지</a>
                            </li>
                        </Link>
                        {/* <Link href="/weeklywords">
                            <li className={router.pathname === "/weeklywords" ? "on" : ""}>
                                <a>주중말씀</a>
                            </li>
                        </Link> */}
                        <Link href="/weeklynews">
                            <li className={router.pathname === "/weeklynews" ? "on" : ""}>
                                <a>교회소식</a>
                            </li>
                        </Link>
                    </ul>
                    <div className="tab_con">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
};