import Link from "next/link";
import SiteMap from "./SiteMap";
import { useState } from "react";
import { useRouter } from "next/router";

export default function HomeBar() {
    const router = useRouter();
    const pathNameSplit = router.pathname.split('/');

    return (
        <>
            <ul id="home_bar">
                <li>
                    <Link href="/">
                        <a>
                            <div className="ico">
                                <img src={(router.pathname=="/") ? "/icons/ico_home.svg" : "/icons/ico_home_off.svg"} alt="홈" />
                            </div>
                            <div className="menu">홈</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/sermonmain">
                        <a>
                            <div className="ico">
                                <img src={(router.pathname=="/sermonmain") ? "/icons/ico_sermon.svg" : "/icons/ico_sermon_off.svg"} alt="예배" />
                            </div>
                            <div className="menu">예배</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/chapter/1/1">
                        <a>
                            <div className="ico">
                                <img src={(pathNameSplit[1] == "chapter") ? "/icons/ico_bible.svg" : "/icons/ico_bible_off.svg"} alt="성경" />
                            </div>
                            <div className="menu">성경</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/onmain">
                        <a>
                            <div className="ico">
                                <img src={(router.pathname=="/onmain") ? "/icons/ico_onseries.svg" : "/icons/ico_onseries_off.svg"} alt="온시리즈" />
                            </div>
                            <div className="menu">콘텐츠</div>
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