import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Gnb() {

    let [isSearch, setIsSearch] = useState(false);
    const router = useRouter();

    return (
        <div className="inner">
            <h1 className="logo" onClick={() => { router.push("/"); }}>
                <img src="../images/logo.svg" alt="성락교회" />
            </h1>
            <div className="live">라이브 <img src="/icons/ico_live.svg" alt="라이브" /></div>
            {/* <a href="/settings" className="alarm on"></a> */}
            {/* <span className="btn_search" onClick={() => { router.push("/search"); }}><img src="../icons/ico_search.svg" alt="검색" /></span> */}
            {/* <div className={isSearch ? "search_area on" : "search_area"}>
                <div className="top">
                    <span className="btn_prev" onClick={() => setIsSearch(false)}></span>
                    <input type="text" placeholder="검색어를 입력하세요." />
                </div>
                <div className="recent">
                    <div className="title">
                        <strong>최근 검색어</strong>
                        <span className="btn_delete">전체삭제</span>
                    </div>
                    <ul className="list">
                        <li>
                            <span>온특새</span>
                            <div className="btn_delete"></div>
                        </li>
                        <li>
                            <span>3부 예배</span>
                            <div className="btn_delete"></div>
                        </li>
                        <li>
                            <span>말씀하시되</span>
                            <div className="btn_delete"></div>
                        </li>
                    </ul>
                </div>
            </div> */}
        </div>
    );
}
