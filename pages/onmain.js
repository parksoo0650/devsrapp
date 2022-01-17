import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sheet from 'react-modal-sheet';
import YouTube from 'react-youtube';

export default function Onmain() {

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
    }, []);

    const router = useRouter();

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
        <div className="sub_container onseries_wrap">
            <div className="top_area">
                <span className="btn_prev"></span>
                <div className="top_title">온시리즈</div>
                <div className="tab_wrap">
                    <ul className="tab_area">
                        <li className="on">온특새</li>
                        <li>온3분</li>
                        <li>온성경</li>
                        <li>온목장</li>
                    </ul>
                </div>
            </div>
            <div className="guide">온라인 성경읽기는<br />매주 월, 화, 목, 금 (오전 10:30)에 시작됩니다.</div>
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

                        <div className="tit">
                            <a href="/ondetail">온성경<br />갈라디아서 5장~데살로니가전거 4장</a>
                        </div>
                        <div className="date">2021년 11월 05일</div>
                    </div>
                </div>
            </div>

            <div className="section pt0">
                <div className="title">지난 컨텐츠 다시보기 <span className="filter">필터</span></div>
                <ul className="sermon_list">
                    <li>
                        <div className="tit">온성경<br />갈라디아서 5장~데살로니가전거 4장</div>
                        <div className="date">2021년 11월 05일</div>
                    </li>
                    <li>
                        <div className="tit">온성경<br />갈라디아서 5장~데살로니가전거 4장</div>
                        <div className="date">2021년 11월 05일</div>
                    </li>
                    <li>
                        <div className="tit">온성경<br />갈라디아서 5장~데살로니가전거 4장</div>
                        <div className="date">2021년 11월 05일</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}