import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sheet from 'react-modal-sheet';
import YouTube from 'react-youtube';

export default function Praisemain() {

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
        let praise = ['1부 성가대', '1부 헌금송', '3부 성가대', '3부 헌금송', '연합 성가대', '연합 헌금송', '예수로 찬양', '주일 예배 찬양', '주일 연합 예배 찬양'];
    }, []);

    const router = useRouter();

    const [praise, setPraise] = useState("1부 성가대");

    let [isDrop, setIsDrop] = useState(false);
    let [isOpen, setOpen] = useState(false);

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
                <div className="top_title">찬양</div>

                {/* active 클래스를 tab_wrap에 추가하여 메뉴 드롭다운 활성화 // 동시에 shadow 엘리먼트도 display:block 설정하여야 함 */}
                <div className={isDrop ? "tab_wrap active" : "tab_wrap"}>
                    <div className="tab_bar">
                        전체보기
                        <span className="btn_close" onClick={() => setIsDrop(false)}></span>
                    </div>
                    <ul className="tab_area">
                        <li onClick={() => { setPraise("1부 성가대"); }} className={(praise == "1부 성가대") ? "on" : ""}>1부 성가대</li>
                        <li onClick={() => { setPraise("1부 헌금송"); }} className={(praise == "1부 헌금송") ? "on" : ""}>1부 헌금송</li>
                        <li onClick={() => { setPraise("3부 성가대"); }} className={(praise == "3부 성가대") ? "on" : ""}>3부 성가대</li>
                        <li onClick={() => { setPraise("3부 헌금송"); }} className={(praise == "3부 헌금송") ? "on" : ""}>3부 헌금송</li>
                        <li onClick={() => { setPraise("연합 성가대"); }} className={(praise == "연합 성가대") ? "on" : ""}>연합 성가대</li>
                        <li onClick={() => { setPraise("연합 헌금송"); }} className={(praise == "연합 헌금송") ? "on" : ""}>연합 헌금송</li>
                        <li onClick={() => { setPraise("예수로 찬양"); }} className={(praise == "예수로 찬양") ? "on" : ""}>예수로 찬양</li>
                        <li onClick={() => { setPraise("주일 예배 찬양"); }} className={(praise == "주일 예배 찬양") ? "on" : ""}>주일 예배 찬양</li>
                        <li onClick={() => { setPraise("주일 연합 예배 찬양"); }} className={(praise == "주일 연합 예배 찬양") ? "on" : ""}>주일 연합 예배 찬양</li>
                    </ul>
                    <span className="btn_more" onClick={() => setIsDrop(true)}></span>
                </div>
            </div>
            {/* 드롭다운 메뉴가 활성화 되면 display:block */}
            <style jsx>
            {`
            .shadow {
                display: ${isDrop ? "block" : "none"};
            }
            `}
            </style>

            <div className="section">
                <div className="title">최신 컨텐츠</div>
                <div className="movie_wrap">
                    <YouTube videoId={datas} opts={opts} containerClassName="iframe_wrap" />
                    <div className="info">

                        {/* 공유하기 */}
                        <span className="btn_share" onClick={() => setOpen(true)}></span>
                        <Sheet
                            isOpen={isOpen}
                            onClose={() => setOpen(false)}
                            snapPoints={[0.4]}
                        >
                            <Sheet.Container>
                                <Sheet.Header />
                                <Sheet.Content>
                                    <div className="pop_toast">
                                        <button className="btn_close" onClick={() => setOpen(false)}></button>
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

                        <div className="tit" onClick={() => { router.push("/praisedetail"); }}>주가 나를 사랑하시어<br />뉴헤븐 성가대</div>
                        <div className="date">2021년 11월 05일</div>
                    </div>
                </div>
            </div>

            <div className="section pt0">
                <div className="title">지난 찬양 다시보기 <span className="filter">필터</span></div>
                <ul className="sermon_list">
                    <li>
                        <div className="tit">주가 나를 사랑하시어<br />뉴헤븐 성가대</div>
                        <div className="date">2021년 11월 05일</div>
                    </li>
                    <li>
                        <div className="tit">주가 나를 사랑하시어<br />뉴헤븐 성가대</div>
                        <div className="date">2021년 11월 05일</div>
                    </li>
                    <li>
                        <div className="tit">주가 나를 사랑하시어<br />뉴헤븐 성가대</div>
                        <div className="date">2021년 11월 05일</div>
                    </li>
                </ul>
            </div>

        </div>
    );
}