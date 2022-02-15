import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function SiteMap() {

    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);

    const menuClose = () => {
        let allMenu = document.getElementById('all_menu');
        allMenu.className = '';
    }

    return (
        <div id="all_menu">
            <span className="btn_close" onClick={menuClose}></span>
            <div className="tip">이 메뉴도 이용해보세요!</div>
            <ul className="quick_list">
                <li>
                    <Link href="/chapter/1/1" >
                        <a onClick={menuClose}>
                            <i className="ico"><img src="/icons/ico_quick_bible1.svg" /></i>
                            <div className="menu">성경</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/onmain">
                        <a onClick={menuClose}>
                            <i className="ico"><img src="/icons/ico_quick_onseries.svg" /></i>
                            <div className="menu">온시리즈</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/weeklyorder">
                        <a onClick={menuClose}>
                            <i className="ico"><img src="/icons/ico_quick_weekly.svg" /></i>
                            <div className="menu">주보</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/offering">
                        <a onClick={menuClose}>
                            <i className="ico"><img src="/icons/ico_quick_offering.svg" alt="헌금안내" /></i>
                            <div className="menu">헌금안내</div>
                        </a>
                    </Link>
                </li>
            </ul>

            <div className="menu_wrap">
                <ul className="menu_list">
                    <li>
                        <span onClick={() => setToggle1(!toggle1)}>예배</span>
                        {toggle1 ? (
                            <ul className="sub_menu">
                                <li>
                                    <Link href="/sermonmain">
                                        <a onClick={menuClose}>주일 1부 예배</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sermonmain">
                                        <a onClick={menuClose}>주일 3부 예배</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sermonmain">
                                        <a onClick={menuClose}>수요 오전 예배</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sermonmain">
                                        <a onClick={menuClose}>수요 오후 예배</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sermonmain">
                                        <a onClick={menuClose}>금요 환언 특강</a>
                                    </Link>
                                </li>
                            </ul>
                        ) : (null)}
                    </li>
                    <li>
                        <span onClick={() => setToggle2(!toggle2)}>찬양</span>
                        {toggle2 ? (
                        <ul className="sub_menu">
                            <li>
                                <Link href="/praisemain">
                                    <a onClick={menuClose}>성락교회 성가대</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/praisemain">
                                    <a onClick={menuClose}>성략교회 헌금송</a>
                                </Link>
                            </li>
                        </ul>
                        ) : (null)}
                    </li>
                    <li>
                        <Link href="/chapter/1/1">
                            <a onClick={menuClose}>성경</a>
                        </Link>
                    </li>
                    <li>
                        <span onClick={() => setToggle3(!toggle3)}>온시리즈</span>
                        {toggle3 ? (
                        <ul className="sub_menu">
                            <li>
                                <Link href="/onbibledetail">
                                    <a onClick={menuClose}>온성경</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/onprayerdetail">
                                    <a onClick={menuClose}>온특새</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/onthreedetail">
                                    <a onClick={menuClose}>온3분</a>
                                </Link>
                            </li>
                        </ul>
                        ) : (null)}
                    </li>
                    <li>
                        <Link href="/weeklyorder">
                            <a onClick={menuClose}>주보</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/offering">
                            <a onClick={menuClose}>헌금안내</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}