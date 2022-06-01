import { useRouter } from "next/router";
import React, { useState } from "react";
import YouTube from 'react-youtube';
import Share from "../src/components/Share";

export default function Praisedetail() {
    const router = useRouter();
    let kind = "";
    (router.query.kind) ? kind = router.query.kind : kind = "prc";
    let praise = ['재생목록', '찬양목록'];
    const pra_kind = { "prc": "성가대", "pro": "헌금송" }
    const [praiseD, setPraiseD] = useState("재생목록");
    const opts = {
        width: "320px",
        height: "200px",
        playerVars: {
            autoplay: 1, rel: 0, modestbranding: 1
        },
    };

    return (
        <div className="sub_container praise_detail">
            <div className="top_area">
                <span className="btn_close" onClick={() => router.push(`/praisemain?kind=${kind}`)}></span>
                <div className="top_title">{pra_kind[kind]}</div>
            </div>

            <div className="movie_wrap subborder">
                <YouTube videoId={router.query.vid} opts={opts} containerClassName="iframe_wrap" />
                <div className="info">
                    <Share title={router.query.vtit} thum={`/images/kakao_${kind}.jpg`} vid={router.query.vid} />
                    <div className="tit">
                        <a href="#">{router.query.vtit}</a>
                    </div>
                    <div className="date">{router.query.vdate}</div>
                </div>
            </div>

            {/* <div className="section" style={{ display: "none" }}> */}
            <div className="section" style={{ display: "none" }}>
                {/* <ul className="tab_area">
                    <li onClick={() => { setPraiseD("재생목록"); }} className={(praiseD == "재생목록") ? "on" : ""}>재생목록</li>
                    <li onClick={() => { setPraiseD("찬양목록"); }} className={(praiseD == "찬양목록") ? "on" : ""}>찬양목록</li>
                </ul> */}
                <div className="tab_con">

                    {/* 재생목록 */}
                    <div className={(praiseD == "재생목록") ? "praise_wrap" : "praise_wrap hide"}>
                  
                        <ul className="sermon_list">
                            <li>
                                <div className="tit">주가 나를 사랑하시어 - 뉴헤븐 성가대</div>
                                <div className="date">2021년 11월 05일</div>
                            </li>
                            <li>
                                <div className="tit">주가 나를 사랑하시어 - 뉴헤븐 성가대</div>
                                <div className="date">2021년 11월 05일</div>
                            </li>
                            <li>
                                <div className="tit">주가 나를 사랑하시어 - 뉴헤븐 성가대</div>
                                <div className="date">2021년 11월 05일</div>
                            </li>
                        </ul>
                    </div>

                    {/* 찬양목록 */}
                    <div className={(praiseD == "찬양목록") ? "praise_wrap" : "praise_wrap hide"}>
                        <ul className="sermon_list">
                            <li>
                                <div className="tit">복의 근원 강림하사<br />뉴헤븐 성가대</div>
                                <div className="date">2022년 01월 15일</div>
                            </li>
                            <li>
                                <div className="tit">복의 근원 강림하사<br />뉴헤븐 성가대</div>
                                <div className="date">2022년 01월 15일</div>
                            </li>
                            <li>
                                <div className="tit">복의 근원 강림하사<br />뉴헤븐 성가대</div>
                                <div className="date">2022년 01월 15일</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}