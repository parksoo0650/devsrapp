import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';
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
        <div className="sub_container sermon_detail">
            <div className="top_area">
                <span className="btn_prev"></span>
                <div className="top_title">주일 3부 예배</div>
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
                    <li>예배순서</li>
                    <li className="on">설교요지</li>
                    <li>교회소식</li>
                </ul>
                <div className="tab_con">
                    {/* 예배순서 */}
                    <ul className="order_wrap" style={{display : "none"}}>
                        <li>
                            <span>찬송</span>
                            <span>30장</span>
                            <span>일어서서</span>
                        </li>
                        <li>
                            <span>기원</span>
                            <span></span>
                            <span>사회자</span>
                        </li>
                        <li>
                            <span>주신기도</span>
                            <span></span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>찬송</span>
                            <span>93장</span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>참회기도</span>
                            <span></span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>찬송</span>
                            <span>주님을 의지합니다</span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>기도</span>
                            <span>①원유신 ②김영태</span>
                            <span></span>
                        </li>
                        <li>
                            <span>성시합독</span>
                            <span>시편 23편</span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>헌금</span>
                            <span>헌금송</span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>찬송</span>
                            <span>할렐루야</span>
                            <span>일어서서</span>
                        </li>
                        <li>
                            <span>봉헌기도</span>
                            <span></span>
                            <span>목사</span>
                        </li>
                        <li>
                            <span>찬양</span>
                            <span>성가대</span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>성경교독</span>
                            <span>마가복음<br />12:35~37</span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>합심기도</span>
                            <span></span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>설교</span>
                            <span>하나님의 아들 그리스도</span>
                            <span>김성현 감독</span>
                        </li>
                        <li>
                            <span>찬송</span>
                            <span></span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>축도</span>
                            <span></span>
                            <span>목사</span>
                        </li>
                    </ul>
                    
                    {/* 설교요지 */}
                    <div className="gist_wrap">
                        <div className="gist_title">
                            하나님의 아들 그리스도
                            <span className="translation"></span>
                        </div>
                        <div className="main_bible">마가복음 1:35~37</div>
                        <div className="gist">
                            하나님은<br />
                            사랑이시다<br />
                            그가 자기의 사랑의 대상을 독생자로 하셨으니 <span className="bible">(마 17:5)</span><br />
                            하나님이 유일하심같이 아들을 유일하게 하심이다<br />
                            그가 유일하심은 유일하신 <span className="bible">(요 1:18)</span><br />
                            하나님의 후사로 세우시려 하심이다 <span className="bible">(히 1:1~2)</span><br />
                            그러므로 우리의 신앙고백은 유일하신<br />
                            참 하나님과 그가 보내신 예수 그리스도를 믿음이다 <span className="bible">(요 17:3)</span><br />
                            그가 아버지 안에 계실 때는 말씀 (로고스)이시니 <span className="bible">(요 1:1)</span><br />
                            하나님의 말씀은  의(의)와 뜻이요 불변의<br />
                            진리이다 <span className="bible">(요 14:6)</span><br />
                            그는 아브라함보다 먼저 계신 자다<span className="bible">(요 8:52~59)</span><br />
                            아브라함은 주의 종이요 예언자니<br />
                            하나님의 언약을 맡은 자다 <span className="bible">(시 105:4~11)</span><br />
                            하나님의 말씀은 자기 앞에 선지자를 보내시고 <span className="bible">(요 5:39)</span><br />
                            선지자는 첩경(길)을 닦는 자로 사용하셨다 <span className="bible">(마 3:1~3)</span><br />
                            아브라함에게 하신 언약을 이삭에게 맹세하시고<br />
                            야곱에게 율례(율법)로 정하셨으니<br />
                            율법이 복음보다 먼저 있고 엘리야가 먼저 와야<br />
                            그리스도가 뒤에 오심이다 <span className="bible">(마 4:5~6)</span><br />
                            예언 없이 있는 자는 진리가 아니요 종교요 <span className="bible">(요일 4:2~3)</span><br />
                            종교는 실상이 아닌 것을 찾아가는 신념이다

                            <ul className="important">
                                <li>
                                    ◎ 그리스도는 첩경 없이 나타나지 않으시고<br />
                                    예언이 있고 예언 따라 오셔야 진리이다
                                </li>
                                <li>
                                    ◎ 우리의 믿음이 이것이니 태초부터<br />
                                    그에 대한 예언이 있고 그 예언을 응해야만<br />
                                    하나님이 보내신 자요 진리이다
                                </li>
                                <li>
                                    ◎ 아브라함과 유다와 다윗은 주의 첩경이니<br />
                                    다른 길로 오는 자는 그리스도가 아니요<br />
                                    거짓 그리스도이다
                                </li>
                                <li>
                                    ※ 예수 그리스도 앞에는 수많은 예언자들이 있어<br />
                                    피 흘려 주의 첩경을 예비하였다 이를<br />
                                    하나님이 증거하셨으니 그가 침례 받을실 때이다 (시무언)
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* 교회소식 */}
                    <div className="notice_wrap" style={{display : "none"}}>
                        <div className="notice_title">1월은 성경 일독의 달입니다</div>
                        <ol className="list">
                            <li>
                                <div className="tit">2022 성락교회 신년 전교인 성경통독사경회</div>
                                일시: 1. 8 (토), 22(토) 오전 9:30 ~ 오후 4:20<br />
                                범위: 모세오경, 여호수아, 사사기, 사복음서, 요한계시록<br />
                                대상: 모든 성도<br />
                                주관: 성락 베뢰아 아카데미<br />
                                문의: 070-7300-6400~4<br />
                                ※ 온라인 실황 중계
                            </li>
                            <li>
                                <div className="tit">2022 성락교회 신년 전교인 성경통독사경회</div>
                                일시: 1. 8 (토), 22(토) 오전 9:30 ~ 오후 4:20<br />
                                범위: 모세오경, 여호수아, 사사기, 사복음서, 요한계시록<br />
                                대상: 모든 성도<br />
                                주관: 성락 베뢰아 아카데미<br />
                                문의: 070-7300-6400~4<br />
                                ※ 온라인 실황 중계
                            </li>
                            <li>
                                <div className="tit">2022 성락교회 신년 전교인 성경통독사경회</div>
                                일시: 1. 8 (토), 22(토) 오전 9:30 ~ 오후 4:20<br />
                                범위: 모세오경, 여호수아, 사사기, 사복음서, 요한계시록<br />
                                대상: 모든 성도<br />
                                주관: 성락 베뢰아 아카데미<br />
                                문의: 070-7300-6400~4<br />
                                ※ 온라인 실황 중계
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>
    );
}