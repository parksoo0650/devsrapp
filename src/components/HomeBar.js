import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isIOS } from 'react-device-detect';

export default function HomeBar() {
    const router = useRouter();
    const [bottomPadding, setBottomPadding] = useState("");
    const pathNameSplit = router.pathname.split('/');
    const contentPages = ["/onmain", "/prayerMain", "/returnMain"];

    useEffect(() => {
        if(isIOS) {
            setBottomPadding("26px");
        }
    }, []);

    return (
        <>
            <ul id="home_bar">
                <li>
                    <Link href="/">
                        <a>
                            <div className="ico">
                                <img src={(router.pathname == "/") ? "/icons/ico_home.svg" : "/icons/ico_home_off.svg"} alt="홈" />
                            </div>
                            <div className="menu">홈</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/sermonmain">
                        <a>
                            <div className="ico">
                                <img src={(router.pathname == "/sermonmain") ? "/icons/ico_sermonnew_on.svg" : "/icons/ico_sermonnew_off.svg"} alt="예배" />
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
                                <img src={(contentPages.includes(router.pathname)) ? "/icons/ico_content.svg" : "/icons/ico_content_off.svg"} alt="콘텐츠" />
                            </div>
                            <div className="menu">콘텐츠</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/SiteMap">
                        <a>
                            <div className="ico">
                                <img src={(router.pathname == "/SiteMap") ? "/icons/ico_menu.svg" : "/icons/ico_menu_off.svg"} alt="전체보기" />
                            </div>
                            <div className="menu">전체보기</div>
                        </a>
                    </Link>
                </li>
            </ul>
            <style jsx>
            {`
            #home_bar {
                padding-bottom: ${bottomPadding};
            }
            `}
            </style>
        </>
    );
}