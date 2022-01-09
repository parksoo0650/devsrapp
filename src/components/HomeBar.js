import Link from "next/link";
import SiteMap from "./SiteMap";

export default function HomeBar() {
    return (
        <>
            <ul id="home_bar" className="on">
                <li>
                    <Link href="/">
                        <a>
                            <i className="ico_home"></i>
                            <div className="menu">홈</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/sermonmain">
                        <a>
                            <i className="ico_sermon"></i>
                            <div className="menu">예배</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/biblelist">
                        <a>
                            <i className="ico_bible"></i>
                            <div className="menu">성경</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/onsub?flag=1">
                        <a>
                            <i className="ico_onseries"></i>
                            <div className="menu">온시리즈</div>
                        </a>
                    </Link>
                </li>
                <li onClick={() => {
                    let allMenu = document.getElementById('all_menu');
                    allMenu.className = 'on';
                }}>
                    <i className="ico_menu"></i>
                    <div className="menu">전체보기</div>
                </li>
            </ul>
            <SiteMap />
        </>
    );
}