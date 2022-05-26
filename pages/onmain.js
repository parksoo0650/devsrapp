import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from 'react-youtube';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, {
    Pagination
} from 'swiper';
import Share from "../src/components/Share";
import Loading from "../src/components/Loading";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Onmain() {
    const router = useRouter();
    let con_kind = "";
    (router.query.kind) ? con_kind = router.query.kind : con_kind = "onm";
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

    // 온특새
    const API_URL_ONM = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpY-KpZNb-R3VMkoIEkMZSfG`;
    // 온삼분
    const API_URL_ONT = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpZmSoNBoZdnZ0CnpEGh3pQA`;
    // 온성경
    const API_URL_ONB = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpbN_Vhx8arRhZutfQfiYhvr`;

    const [mainData, setMainData] = useState({ videoId: "", title: "", thumbnails: "", publishedAt: "" });
    const [listData, setListData] = useState([]);
    const [series, setSeries] = useState(con_kind);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async (series) => {
        let apiData = "";
        if (series === "onm") {
            apiData = await axios.get(API_URL_ONM);
        } else if (series === "ont") {
            apiData = await axios.get(API_URL_ONT);
        } else if (series === "onb") {
            apiData = await axios.get(API_URL_ONB);
        }
        const splitTitle = apiData.data.items[0].snippet.title.split('|');
        const splitDate = apiData.data.items[0].snippet.publishedAt.split('T');
        const videoTitle = splitTitle[0];
        const videoDate = splitDate[0].split('-');
        setMainData({
            videoId: apiData.data.items[0].snippet.resourceId.videoId,
            title: videoTitle,
            thumbnails: apiData.data.items[0].snippet.thumbnails.medium.url,
            publishedAt: videoDate[0] + "년 " + videoDate[1] + "월 " + videoDate[2] + "일"
        });
        setListData(apiData.data.items);
        setIsLoading(false);
    };

    useEffect(() => {
        getData(series);
    }, [series]);

    useEffect(() => {
        setSeries(con_kind);
    }, [router]);

    const opts = {
        width: "320px",
        height: "200px",
        playerVars: {
            autoplay: 1, rel: 0, modestbranding: 1
        },
    };

    return (
        <div className="sub_container onseries_wrap">
            <div className="top_area">
                <span className="btn_prev" onClick={() => router.push("/contents")}></span>
                <div className="top_title">콘텐츠  <img src="/icons/ico_arrow.svg"/></div>
                <div className="tab_wrap">
                    <ul className="tab_area">
                        <li className="on">온시리즈</li>
                        <li>환언특강</li>
                        <li>주중 기도회</li>
                        <li>1분 은혜</li>
                    </ul>
                </div>
                <div className="dropdown">
                    <ul>
                        <li onClick={() => { setSeries("ont"); setIsLoading(true); }} className={(series == "ont") ? "on" : ""}>온3분</li>
                        <li onClick={() => { setSeries("onm"); setIsLoading(true); }} className={(series == "onm") ? "on" : ""}>온특새</li>
                        <li onClick={() => { setSeries("onb"); setIsLoading(true); }} className={(series == "onb") ? "on" : ""}>온성경</li>
                    </ul>
                </div>
            </div>

            {/* 온특새 */}
            {(isLoading === true) ? (
                <div className="loading_box">
                    <Loading />
                </div>
            ) : (
                <>
                    <div className={(series == "onm") ? "onPrayer" : "onPrayer hide"}>
                        <div className="section subborder">
                            <div className="movie_wrap">
                                <YouTube videoId={mainData.videoId} opts={opts} containerClassName="iframe_wrap" />
                                <div className="info">
                                    <Share title={mainData.title} thum={`/images/kakao_${series}.jpg`} vid={mainData.videoId} />
                                    <div className="tit" onClick={() => {
                                        router.push(`/onprayerdetail?vid=${mainData.videoId}&vtit=${mainData.title}&vdate=${mainData.publishedAt}`, "/onprayerdetail");
                                    }}>{mainData.title}</div>
                                    <div className="date">{mainData.publishedAt}</div>
                                </div>
                            </div>
                        </div>

                        <div className="section subbordert">
                            <ul className="sermon_filter">
                                <li className="on">업데이트순</li>
                                <li>회차순</li>
                            </ul>
                            <ul className="sermon_list">
                                {
                                    listData.map((doc, i) => {
                                        let splitListTitle = doc.snippet.title.split('|');
                                        let ListTitle = splitListTitle[0];
                                        let splitListDate = doc.snippet.publishedAt.split('T');
                                        let ListDate = splitListDate[0].split('-');
                                        let lDate = ListDate[0] + "년 " + ListDate[1] + "월 " + ListDate[2] + "일";
                                        return (
                                            <li key={doc.id}
                                                onClick={() => {
                                                    router.push(`/onprayerdetail?vid=${doc.snippet.resourceId.videoId}&vtit=${ListTitle}&vdate=${lDate}`, "/onprayerdetail");
                                                }}
                                            >
                                                <div className="tit">{ListTitle.substring(0, 24)}{(ListTitle.length > 24) ? "..." : ""}</div>
                                                <div className="date">{lDate}</div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>


                    {/* 온3분 */}
                    <div className={(series == "ont") ? "onthree" : "onthree hide"}>
                        <div className="guide">온3분은 매주 금 (오전 10:30)에 시작됩니다.</div>
                        <div className="section pt30">
                            <div className="title">최신 컨텐츠</div>
                            <div className="movie_wrap">
                                <YouTube videoId={mainData.videoId} opts={opts} containerClassName="iframe_wrap" />
                                <div className="info">
                                    <Share title={mainData.title} thum={`/images/kakao_${series}.jpg`} vid={mainData.videoId} />
                                    <div className="tit" onClick={() => {
                                        router.push(`/onthreedetail?vid=${mainData.videoId}&vtit=${mainData.title}&vdate=${mainData.publishedAt}`, "/onthreedetail");
                                    }}>{mainData.title}</div>
                                    <div className="date">{mainData.publishedAt}</div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="section three_swiper">
                            <Swiper
                                className="slide_wrap"
                                spaceBetween={10}
                                slidesPerView={1}
                                resistanceRatio={0}
                                loop={true}
                                pagination={{
                                    type: "fraction",
                                    renderFraction: function (currentClass, totalClass) {
                                        return '<span className="' + currentClass + '"></span> / ' +
                                            '<span className="' + totalClass + '"></span>';
                                    }
                                }}
                            >
                                <SwiperSlide>
                                    <img src="/images/onthree/img_three01.png" alt="온3분 배너 01" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/images/onthree/img_three01.png" alt="온3분 배너 01" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/images/onthree/img_three02.png" alt="온3분 배너 02" />
                                </SwiperSlide>
                            </Swiper>
                        </div> */}

                        <div className="section pt0">
                            <div className="title">지난 컨텐츠 다시보기 
                                {/* <span className="filter">필터</span> */}
                            </div>
                            <ul className="sermon_list">
                                {
                                    listData.map((doc, i) => {
                                        let splitListTitle = doc.snippet.title.split('|');
                                        let ListTitle = splitListTitle[0];
                                        let splitListDate = doc.snippet.publishedAt.split('T');
                                        let ListDate = splitListDate[0].split('-');
                                        let lDate = ListDate[0] + "년 " + ListDate[1] + "월 " + ListDate[2] + "일";
                                        return (
                                            <li key={doc.id} onClick={() => {
                                                router.push(`/onthreedetail?vid=${doc.snippet.resourceId.videoId}&vtit=${ListTitle}&vdate=${lDate}`, "/onthreedetail");
                                            }}>
                                                <div className="tit">{ListTitle.substring(0, 24)}{(ListTitle.length > 24) ? "..." : ""}</div>
                                                <div className="date">{lDate}</div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    {/* 온성경 */}
                    <div className={(series == "onb") ? "onBible" : "onBible hide"}>
                        <div className="guide">온라인 성경읽기는<br />매주 월, 화, 목, 금 (오전 10:30)에 시작됩니다.</div>
                        <div className="section pt30">
                            <div className="title">최신 컨텐츠</div>
                            <div className="movie_wrap">
                                <YouTube videoId={mainData.videoId} opts={opts} containerClassName="iframe_wrap" />
                                <div className="info">
                                    <Share title={mainData.title} thum={`/images/kakao_${series}.jpg`} vid={mainData.videoId} />
                                    <div className="tit" onClick={() => {
                                        router.push(`/onbibledetail?vid=${mainData.videoId}&vtit=${mainData.title}&vdate=${mainData.publishedAt}`, "/onbibledetail");
                                    }}>{mainData.title}</div>
                                    <div className="date">{mainData.publishedAt}</div>
                                </div>
                            </div>
                        </div>

                        <div className="section pt0">
                            <div className="title">지난 컨텐츠 다시보기 <span className="filter">필터</span></div>
                            <ul className="sermon_list">
                                {
                                    listData.map((doc, i) => {
                                        let splitListTitle = doc.snippet.title.split('|');
                                        let ListTitle = splitListTitle[0];
                                        let splitListDate = doc.snippet.publishedAt.split('T');
                                        let ListDate = splitListDate[0].split('-');
                                        let lDate = ListDate[0] + "년 " + ListDate[1] + "월 " + ListDate[2] + "일";
                                        return (
                                            <li key={doc.id} onClick={() => {
                                                router.push(`/onbibledetail?vid=${doc.snippet.resourceId.videoId}&vtit=${ListTitle}&vdate=${lDate}`, "/onbibledetail");
                                            }}>
                                                <div className="tit">{ListTitle.substring(0, 24)}{(ListTitle.length > 24) ? "..." : ""}</div>
                                                <div className="date">{lDate}</div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}