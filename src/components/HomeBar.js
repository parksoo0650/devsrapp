import Link from "next/link";
import SiteMap from "./SiteMap";

export default function HomeBar() {
    return (
        <>
            <ul id="home_bar" class="on">
                <li>
                    <Link href="/">
                        <a>
                            <i class="ico_home"></i>
                            <div class="menu">홈</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/sermonmain">
                        <a>
                            <i class="ico_sermon"></i>
                            <div class="menu">예배</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/biblelist">
                        <a>
                            <i class="ico_bible"></i>
                            <div class="menu">성경</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/onsub?flag=1">
                        <a>
                            <i class="ico_onseries"></i>
                            <div class="menu">온시리즈</div>
                        </a>
                    </Link>
                </li>
                <li onClick={() => {
                    let allMenu = document.getElementById('all_menu');
                    allMenu.className = 'on';
                }}>
                    <i class="ico_menu"></i>
                    <div class="menu">전체보기</div>
                </li>
            </ul>
            <SiteMap />
        </>
    );
}