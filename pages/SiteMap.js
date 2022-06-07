import Link from "next/link";
import React, { useState } from "react";
import HomeBar from "../src/components/HomeBar";

export default function SiteMap() {
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);

    const menuClose = () => {
        let allMenu = document.getElementById('all_menu');
        allMenu.className = '';
    }

    return (
        <>
            <div id="all_menu" className="on">
                <ul className="quick_list">
                    <li>
                        <Link href={`/sermonmain`} >
                            <a>
                                <div className="img"><img src="/icons/ico_sermon_new.svg" alt="예배" /></div>
                                <div className="txt">예배</div>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/praisemain`} >
                            <a onClick={menuClose}>
                                <div className="img"><img src="/icons/ico_quick_praise_new.svg" alt="예배" /></div>
                                <div className="txt">찬양</div>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/chapter/1/1`} >
                            <a onClick={menuClose}>
                                <div className="img"><img src="/icons/ico_quick_bible1.svg" alt="예배" /></div>
                                <div className="txt">성경</div>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/returnMain`} >
                            <a onClick={menuClose}>
                                <div className="img"><img src="/icons/ico_return.svg" alt="환언특강" /></div>
                                <div className="txt">환언특강</div>
                            </a>
                        </Link>
                    </li>
                </ul>

                <div className="menu_wrap">
                    <ul className="menu_list">
                        <li onClick={() => { setToggle2(false); setToggle3(false); setToggle1(!toggle1); }}>
                            <span>예배</span>
                            <img className="drop_iocn" src={(toggle1) ? "/icons/ico_drop_up.svg" : "/icons/ico_drop_down.svg"} alt="drop" />
                            {toggle1 ? (
                                <ul className="sub_menu">
                                    <li>
                                        <Link
                                            href={{
                                                pathname: '/sermonmain',
                                                query: { kind: 'def' },
                                            }}
                                        >
                                            <a onClick={menuClose} style={{ display: "block" }}>주일설교</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={{
                                                pathname: '/sermonmain',
                                                query: { kind: 'sun' },
                                            }}
                                        >
                                            <a onClick={menuClose} style={{ display: "block" }}>1,3부 예배</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={{
                                                pathname: '/sermonmain',
                                                query: { kind: 'wed' },
                                            }}
                                        >
                                            <a onClick={menuClose} style={{ display: "block" }}>수요예배</a>
                                        </Link>
                                    </li>
                                </ul>
                            ) : (null)}
                        </li>
                        <li onClick={() => { setToggle1(false); setToggle3(false); setToggle2(!toggle2); }}>
                            <span>찬양</span>
                            <img className="drop_iocn" src={(toggle2) ? "/icons/ico_drop_up.svg" : "/icons/ico_drop_down.svg"} alt="drop" />
                            {toggle2 ? (
                                <ul className="sub_menu">
                                    <li>
                                        <Link
                                            href={{
                                                pathname: '/praisemain',
                                                query: { kind: 'prc' },
                                            }}
                                        >
                                            <a onClick={menuClose} style={{ display: "block" }}>성가대</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={{
                                                pathname: '/praisemain',
                                                query: { kind: 'pro' },
                                            }}
                                        >
                                            <a onClick={menuClose} style={{ display: "block" }}>헌금송</a>
                                        </Link>
                                    </li>
                                </ul>
                            ) : (null)}
                        </li>
                        <li>
                            <Link href="/chapter/1/1">
                                <a onClick={menuClose} style={{ display: "block" }}>성경</a>
                            </Link>
                        </li>
                        <li onClick={() => { setToggle1(false); setToggle2(false); setToggle3(!toggle3); }}>
                            <span>콘텐츠</span>
                            <img className="drop_iocn" src={(toggle3) ? "/icons/ico_drop_up.svg" : "/icons/ico_drop_down.svg"} alt="drop" />
                            {toggle3 ? (
                                <ul className="sub_menu">
                                    <li>
                                        <Link
                                            href={{
                                                pathname: '/onmain',
                                            }}
                                        >
                                            <a onClick={menuClose} style={{ display: "block" }}>온시리즈</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={{
                                                pathname: '/returnMain',
                                            }}
                                        >
                                            <a onClick={menuClose} style={{ display: "block" }}>환언특강</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={{
                                                pathname: '/prayerMain',
                                            }}
                                        >
                                            <a onClick={menuClose} style={{ display: "block" }}>주중 기도회</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={{
                                                pathname: '/faith',
                                            }}
                                        >
                                            <a onClick={menuClose} style={{ display: "block" }}>1분 은혜</a>
                                        </Link>
                                    </li>
                                </ul>
                            ) : (null)}
                        </li>
                        <li>
                            <Link href="/offering">
                                <a onClick={menuClose} style={{ display: "block" }}>헌금안내</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <HomeBar />
        </>
    );
}