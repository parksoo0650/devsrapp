import Link from "next/link";
import SiteMap from "./SiteMap";

export default function HomeBar() {
    return (
        <>
            <ul id="home_bar" className="on">
                <li>
                    <Link href="/">
                        <a>
                            <img src="/icons/ico_home.svg" alt="" />
                            <div className="menu">홈</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/sermonmain">
                        <a>
                            <img src="/icons/ico_sermon.svg" alt="" />
                            <div className="menu">예배</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/biblelist">
                        <a>
                            <img src="/icons/ico_bible.svg" alt="" />
                            <div className="menu">성경</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/onsub?flag=1">
                        <a>
                            <img src="/icons/ico_onseries.svg" alt="" />
                            <div className="menu">온시리즈</div>
                        </a>
                    </Link>
                </li>
                <li onClick={() => {
                    let allMenu = document.getElementById('all_menu');
                    allMenu.className = 'on';
                }}>
                    <img src="/icons/ico_menu.svg" alt="" />
                    <div className="menu">전체보기</div>
                </li>
            </ul>
            <SiteMap />
        </>
    );
}