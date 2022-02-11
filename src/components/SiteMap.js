import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function SiteMap() {

    return (
        <div id="all_menu">
            <span className="btn_close" onClick={() => {
                let allMenu = document.getElementById('all_menu');
                allMenu.className = '';
            }}></span>

            <div className="tip">이 메뉴도 이용해보세요!</div>
            <ul className="quick_list">
                <li>
                    <Link href="/chapter/1/1">
                        <a>
                            <i className="ico"><img src="/icons/ico_quick_bible1.svg" /></i>
                            <div className="menu">성경</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/onmain">
                        <a>
                            <i className="ico"><img src="/icons/ico_quick_onseries.svg" /></i>
                            <div className="menu">온시리즈</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/weeklyorder">
                        <a>
                            <i className="ico"><img src="/icons/ico_quick_weekly.svg" /></i>
                            <div className="menu">주보</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/offering">
                        <a>
                            <i className="ico"><img src="/icons/ico_quick_offering.svg" alt="헌금안내" /></i>
                            <div className="menu">헌금안내</div>
                        </a>
                    </Link>
                </li>
            </ul>

            <div className="menu_wrap">
                <ul className="menu_list">
                    <li>
                        <span>예배</span>
                        <ul className="sub_menu">
                            <li>
                                <Link href="/sermonmain">
                                    <a>주일 1부 예배</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/sermonmain">
                                    <a>주일 3부 예배</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/sermonmain">
                                    <a>수요 오전 예배</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/sermonmain">
                                    <a>수요 오후 예배</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/sermonmain">
                                    <a>금요 환언 특강</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span>찬양</span>
                        <ul className="sub_menu">
                            <li>
                                <Link href="/praisemain">
                                    <a>성락교회 성가대</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/praisemain">
                                    <a>성략교회 헌금송</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/chapter/1_1">
                            <a>성경</a>
                        </Link>
                    </li>
                    <li>
                        <span>온시리즈</span>
                        <ul className="sub_menu">
                            <li>
                                <Link href="/onbibledetail">
                                    <a>온성경</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/onprayerdetail">
                                    <a>온특새</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/onthreedetail">
                                    <a>온3분</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/weeklyorder">
                            <a>주보</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/offering">
                            <a>헌금안내</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}