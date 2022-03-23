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
                    <Link href={`/chapter/1/1`} >
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
                <li
                    onClick={() => {
                        alert("준비중입니다.");
                    }}
                >
                    <i className="ico"><img src="/icons/ico_quick_weekly.svg" /></i>
                    <div className="menu">주보</div>
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
                                    <Link
                                        href={{
                                            pathname: '/sermonmain',
                                            query: { kind: 'def' },
                                        }}
                                    >
                                        <a onClick={menuClose}>주일설교</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={{
                                            pathname: '/sermonmain',
                                            query: { kind: 'sun' },
                                        }}
                                    >
                                        <a onClick={menuClose}>1,3부 예배</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sermonmain?kind=tue">
                                        <a onClick={menuClose}>환언특강</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sermonmain?kind=wed">
                                        <a onClick={menuClose}>수요예배</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sermonmain?kind=fri">
                                        <a onClick={menuClose}>금요기도회</a>
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
                                    <Link
                                        href={{
                                            pathname: '/praisemain',
                                            query: { kind: 'prc' },
                                        }}
                                    >
                                        <a onClick={menuClose}>성락교회 성가대</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={{
                                            pathname: '/praisemain',
                                            query: { kind: 'pro' },
                                        }}
                                    >
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
                    <li
                        onClick={() => {
                            alert("준비중입니다.");
                        }}
                    >
                        주보
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