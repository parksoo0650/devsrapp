import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sheet from 'react-modal-sheet';
import YouTube from 'react-youtube';

export default function Sermonmain() {

    const YOUTUBE_URL = "https://www.googleapis.com/youtube/v3";
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_21_SERVICE;
    const API_URL = YOUTUBE_URL + "/playlistItems?part=snippet,contentDetails&maxResults=10&playlistId=" + PLAYLIST_ID + "&key=" + API_KEY;

    const [datas, setDatas] = useState([]);

    const getData = async () => {
        const api_data = await axios.get(API_URL);
        setDatas(api_data.data.items[0].snippet.resourceId.videoId);
    };

    useEffect(() => {
        getData();
        let sermon = ['주일 1부 예배', '주일 3부 예배', '수요 오전 예배', '수요 오후 예배', '금요 환언 특강'];
    }, []);

    const router = useRouter();

    const [sermon, setSermon] = useState("주일 1부 예배");

    let [isOpen, setIsOpen] = useState(false);
    let [isDrop, setIsDrop] = useState(false);
    let [isFilter, setIsFilter] = useState(false);

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

                {/* active 클래스로 메뉴 드롭다운 조절 */}
                <div className={isDrop ? "tab_wrap active" : "tab_wrap"}>
                    <div className="tab_bar">
                        전체보기
                        <span className="btn_close" onClick={() => setIsDrop(false)}></span>
                    </div>
                    <ul className="tab_area">
                        <li onClick={() => { setSermon("주일 1부 예배"); }} className={(sermon == "주일 1부 예배") ? "on" : ""}>주일 1부 예배</li>
                        <li onClick={() => { setSermon("주일 3부 예배"); }} className={(sermon == "주일 3부 예배") ? "on" : ""}>주일 3부 예배</li>
                        <li onClick={() => { setSermon("수요 오전 예배"); }} className={(sermon == "수요 오전 예배") ? "on" : ""}>수요 오전 예배</li>
                        <li onClick={() => { setSermon("수요 오후 예배"); }} className={(sermon == "수요 오후 예배") ? "on" : ""}>수요 오후 예배</li>
                        <li onClick={() => { setSermon("금요 환언 특강"); }} className={(sermon == "금요 환언 특강") ? "on" : ""}>금요 환언 특강</li>
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
                    <YouTube videoId={datas} opts={opts} containerClassName="iframe_wrap" />
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
                            <li>콘텐츠 전체보기</li>
                            <li>3부예배</li>
                            <li>3부예배</li>
                            <li>3부예배</li>
                        </ul>
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