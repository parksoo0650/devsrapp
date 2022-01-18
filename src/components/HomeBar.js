import Link from "next/link";
import SiteMap from "./SiteMap";

export default function HomeBar() {
    return (
        <>
            <ul id="home_bar" className="on">
                <li>
                    <Link href="/">
                        <a>
                            <div className="ico"><img src="/icons/ico_home.svg" alt="홈" /></div>
                            <div className="menu">홈</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/sermonmain">
                        <a>
                            <div className="ico"><img src="/icons/ico_sermon.svg" alt="예배" /></div>
                            <div className="menu">예배</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/chapter/1_1">
                        <a>
                            <div className="ico"><img src="/icons/ico_bible.svg" alt="성경" /></div>
                            <div className="menu">성경</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/onmain">
                        <a>
                            <div className="ico"><img src="/icons/ico_onseries.svg" alt="온시리즈" /></div>
                            <div className="menu">온시리즈</div>
                        </a>
                    </Link>
                </li>
                <li onClick={() => {
                    let allMenu = document.getElementById('all_menu');
                    allMenu.className = 'on';
                }}>
                    <div className="ico"><img src="/icons/ico_menu.svg" alt="전체보기" /></div>
                    <div className="menu">전체보기</div>
                </li>
            </ul>
            <SiteMap />
        </>
    );
}