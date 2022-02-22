import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sheet from 'react-modal-sheet';
import YouTube from 'react-youtube';

export default function Sermonmain() {
    const router = useRouter();
    // 주일설교
    const API_URL_DEF = "/youtube/playlistItems/&part=snippet,contentDetails&maxResults=1&playlistId=PLCNxYye_JJpZXsl4cQEjzBWRUFSCb2MCE";
    // 주일예배 1부 〔06:30 AM〕 · 3부 〔10:30 AM
    const API_URL_SUN = "/youtube/playlistItems/&part=snippet,contentDetails&maxResults=2&playlistId=PLCNxYye_JJpYLa-0kkDLhDAw-Rzq3keT6";
    // 환언특강 〔화 07:30 PM〕
    const API_URL_TUE = "/youtube/playlistItems/&part=snippet,contentDetails&maxResults=1&playlistId=PLCNxYye_JJpZRY6ARfjlBXKScy-QqfXnj";

    const [defData, setDefData] = useState({ videoId: "", title: "", subTitle: "", thumbnails: "", publishedAt: "" });
    const [sunData, setSunData] = useState({ videoId: "", title: "", subTitle: "", thumbnails: "", publishedAt: "" });
    const [tueData, setTueData] = useState({ videoId: "", title: "", subTitle: "", thumbnails: "", publishedAt: "" });

    const getData = async () => {
        const dataDef = await axios.get(API_URL_DEF);
        setDefData(dataDef.data.items);

        const dataSun = await axios.get(API_URL_SUN);
        setSunData(dataSun.data.items);

        const dataTue = await axios.get(API_URL_TUE);
        setTueData(dataTue.data.items);
    };

    useEffect(() => {
        getData();
    }, []);

    const sermon = ['주일설교', '1,3부 예배', '환언특강'];
    const [sermon, setSermon] = useState("주일설교");
    const [isOpen, setIsOpen] = useState(false);
    const [isDrop, setIsDrop] = useState(false);
    const [isFilter, setIsFilter] = useState(false);

    const opts = {
        width: "320px",
        height: "200px",
        playerVars: {
            autoplay: 0,
            controls: 0,
        },
    };

    return (
        <div className="sub_container">
            <div className="top_area">
                <span className="btn_prev"></span>
                <div className="top_title">예배</div>
                <div className={isDrop ? "tab_wrap active" : "tab_wrap"}>
                    <div className="tab_bar">
                        전체보기
                        <span className="btn_close" onClick={() => setIsDrop(false)}></span>
                    </div>
                    <ul className="tab_area">
                        <li onClick={() => { setSermon("주일설교"); }} className={(sermon == "주일설교") ? "on" : ""}>주일설교</li>
                        <li onClick={() => { setSermon("1,3부 예배"); }} className={(sermon == "1,3부 예배") ? "on" : ""}>1,3부 예배</li>
                        <li onClick={() => { setSermon("환언특강"); }} className={(sermon == "환언특강") ? "on" : ""}>환언특강</li>
                    </ul>
                    <span className="btn_more" onClick={() => setIsDrop(true)}></span>
                </div>
            </div>
            {/* 드롭다운 메뉴가 활성화 되면 display:block */}
            <div className="shadow"></div>
            <style jsx>
                {`
            .shadow {
                display: ${isDrop ? "block" : "none"};
            }
            `}
            </style>

            <div className="section pt30">
                <div className="title">최신 컨텐츠</div>
                <div className="movie_wrap">
                    <YouTube videoId={defData} opts={opts} containerClassName="iframe_wrap" />
                    <div className="info">

                        {/* 공유하기 */}
                        <span className="btn_share" onClick={() => setIsOpen(true)}></span>
                        <Sheet
                            isOpen={isOpen}
                            onClose={() => setIsOpen(false)}
                            snapPoints={[0.4]}
                        >
                            <Sheet.Container>
                                <Sheet.Header />
                                <Sheet.Content>
                                    <div className="pop_toast">
                                        <button className="btn_close" onClick={() => setIsOpen(false)}></button>
                                        <div className="title">공유하기</div>
                                        <ul className="sns_list">
                                            <li>
                                                <a href="#" target="_blank">
                                                    <img src="../icons/ico_youtube.svg" alt="youtube" />
                                                    <div className="tit">카카오톡</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <img src="../icons/ico_blog.svg" alt="blog" />
                                                    <div className="tit">SNS</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <img src="../icons/ico_instar.svg" alt="instar" />
                                                    <div className="tit">URL</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <img src="../icons/ico_blog.svg" alt="blog" />
                                                    <div className="tit">블로그</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </Sheet.Content>
                            </Sheet.Container>
                            <Sheet.Backdrop />
                        </Sheet>
                        {/* 공유하기 */}

                        <div className="tit" onClick={() => { router.push("/sermondetail"); }}>주일 3부 예배 (건축자들이 버린 머릿돌)</div>
                        <div className="date">2021년 11월 05일</div>
                        <div className="preacher">설교: 김성현 감독</div>
                    </div>
                </div>
            </div>

            <div className="section pt0">
                <div className="title">지난 예배 다시보기

                    <span className="filter" onClick={() => setIsFilter(true)}>필터</span>

                    {/* 필터 */}
                    <div className={isFilter ? "layer_filter on" : "layer_filter"}>
                        <button className="btn_close" onClick={() => setIsFilter(false)}></button>
                        <div className="title">필터 선택</div>
                        <ul className="filter_list">
                            <li className="on">콘텐츠 전체보기</li>
                            <li>3부예배</li>
                            <li>3부예배</li>
                            <li>3부예배</li>
                        </ul>
                        <div className="btn_area">
                            <span className="btn_reset">초기화</span>
                            <span className="btn_select">선택</span>
                        </div>
                    </div>
                    {/* 필터 */}
                </div>
                <ul className="sermon_list">
                    <li>
                        <div className="tit">우리의 소망은 부활이다</div>
                        <div className="date">2021년 11월 05일</div>
                        <div className="preacher">설교: 김성현 감독</div>
                    </li>
                    <li>
                        <div className="tit">우리의 소망은 부활이다</div>
                        <div className="date">2021년 11월 05일</div>
                        <div className="preacher">설교: 김성현 감독</div>
                    </li>
                    <li>
                        <div className="tit">우리의 소망은 부활이다</div>
                        <div className="date">2021년 11월 05일</div>
                        <div className="preacher">설교: 김성현 감독</div>
                    </li>
                </ul>
            </div>

        </div>
    );
}