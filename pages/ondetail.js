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
        <div className="sub_container onseries_detail">
            <div className="top_area">
                <span className="btn_prev"></span>
                <div className="top_title">온성경</div>
            </div>

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
                        <a href="#">깨어 있으라<br />마가복음 13:24~37</a>
                    </div>
                    <div className="date">2021년 11월 05일</div>
                </div>
            </div>

            <div className="section">
                <ul className="tab_area">
                    <li className="on">순서</li>
                    <li>성경</li>
                </ul>
                <div className="tab_con">
                    {/* 순서 */}
                    <ul className="order_wrap">
                        <li>주신기도</li>
                        <li>성경읽기</li>
                        <li>주신기도</li>
                        <li>다음 시간 안내</li>
                    </ul>

                    {/* 성경 */}
                    <div className="bible_wrap" style={{display : "none"}}>
                        <div className="bible_wrap">데살로니가전서 1장</div>
                        <ol className="list">
                            <li>바울과 실루아노와 디모데는 하나님 아버지와 주 예수 그리스도 안에 있는 데살로니가인의 교회에 편지하노니 은혜와 평강이 너희에게 있을지어다</li>
                            <li>바울과 실루아노와 디모데는 하나님 아버지와 주 예수 그리스도 안에 있는 데살로니가인의 교회에 편지하노니 은혜와 평강이 너희에게 있을지어다</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}