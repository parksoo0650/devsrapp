import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sheet from 'react-modal-sheet';
import YouTube from 'react-youtube';

export default function Praisedetail() {

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
        let praise = ['재생목록', '찬양목록'];
    }, []);

    const router = useRouter();

    const [praiseD, setPraiseD] = useState("재생목록");

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
        <div className="sub_container praise_detail">
            <div className="top_area">
                <span className="btn_prev"></span>
                <div className="top_title">1부 성가대</div>
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
                        <a href="#">주가 나를 사랑하시어<br />뉴헤븐 성가대</a>
                    </div>
                    <div className="date">2021년 11월 05일</div>
                </div>
            </div>

            <div className="section">
                <ul className="tab_area">
                    <li onClick={() => { setPraiseD("재생목록"); }} className={(praiseD == "재생목록") ? "on" : ""}>재생목록</li>
                    <li onClick={() => { setPraiseD("찬양목록"); }} className={(praiseD == "찬양목록") ? "on" : ""}>찬양목록</li>
                </ul>
                <div className="tab_con">

                    {/* 재생목록 */}
                    <div className={(praiseD == "재생목록") ? "praise_wrap" : "praise_wrap hide"}>
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