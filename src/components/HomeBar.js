import Link from "next/link";
import SiteMap from "./SiteMap";
import { useState } from "react";

export default function HomeBar() {
    const [menus, setMenus] = useState("home");

    return (
        <>
            <ul id="home_bar">
                <li onClick={() => { setMenus("home"); }}>
                    <Link href="/">
                        <a>
                            <div className="ico">
                                <img src={(menus == "home") ? "/icons/ico_home.svg" : "/icons/ico_home_off.svg"} alt="홈" />
                            </div>
                            <div className="menu">홈</div>
                        </a>
                    </Link>
                </li>
                <li onClick={() => { setMenus("sermon"); }}>
                    <Link href="/sermonmain">
                        <a>
                            <div className="ico">
                                <img src={(menus == "sermon") ? "/icons/ico_sermon.svg" : "/icons/ico_sermon_off.svg"} alt="예배" />
                            </div>
                            <div className="menu">예배</div>
                        </a>
                    </Link>
                </li>
                <li onClick={() => { setMenus("bible"); }}>
                    <Link href="/chapter/1/1">
                        <a>
                            <div className="ico">
                                <img src={(menus == "bible") ? "/icons/ico_bible.svg" : "/icons/ico_bible_off.svg"} alt="성경" />
                            </div>
                            <div className="menu">성경</div>
                        </a>
                    </Link>
                </li>
                <li onClick={() => { setMenus("onseries"); }}>
                    <Link href="/onmain">
                        <a>
                            <div className="ico">
                                <img src={(menus == "onseries") ? "/icons/ico_onseries.svg" : "/icons/ico_onseries_off.svg"} alt="온시리즈" />
                            </div>
                            <div className="menu">온시리즈</div>
                        </a>
                    </Link>
                </li>
                <li onClick={() => {
                    let allMenu = document.getElementById('all_menu');
                    allMenu.className = 'on';
                }}>
                    <div className="ico">
                        <img src="/icons/ico_menu_off.svg" alt="전체보기" />
                    </div>
                    <div className="menu">전체보기</div>
                </li>
            </ul>
            <SiteMap />
        </>
    );
}