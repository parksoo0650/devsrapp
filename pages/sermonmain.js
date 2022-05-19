import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from 'react-youtube';
import Share from "../src/components/Share";
import Loading from "../src/components/Loading";

export default function Sermonmain() {
    const router = useRouter();
    let kind = "";
    (router.query.kind) ? kind = router.query.kind : kind = "def";
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    // 주일설교
    const API_URL_DEF = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpZXsl4cQEjzBWRUFSCb2MCE`;
    // 주일예배 1부 〔06:30 AM〕 · 3부 〔10:30 AM
    const API_URL_SUN = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpYLa-0kkDLhDAw-Rzq3keT6`;

    const [mainData, setMainData] = useState({ videoId: "", title: "", thumbnails: "", publishedAt: "" });
    const [listData, setListData] = useState([]);
    const [sermon, setSermon] = useState(kind);
    const [isDrop, setIsDrop] = useState(false);
    const [isFilter, setIsFilter] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async (sermon) => {
        let apiData = "";
        if (sermon === "sun") {
            apiData = await axios.get(API_URL_SUN);
            const splitTitle = apiData.data.items[0].snippet.title.split('-');
            const splitDate = apiData.data.items[0].snippet.publishedAt.split('T');
            const videoTitle = splitTitle[1].split('|');
            const videoDate = splitDate[0].split('-');

            setMainData({
                videoId: apiData.data.items[0].snippet.resourceId.videoId,
                title: videoTitle[0],
                thumbnails: apiData.data.items[0].snippet.thumbnails.medium.url,
                publishedAt: videoDate[0] + "년 " + videoDate[1] + "월 " + videoDate[2] + "일"
            });
        } else if (sermon === "def") {
            apiData = await axios.get(API_URL_DEF);
            const splitTitle = apiData.data.items[0].snippet.title.split('-');
            const splitDate = apiData.data.items[0].snippet.publishedAt.split('T');
            const videoTitle = splitTitle[1].split('|');
            const videoDate = splitDate[0].split('-');

            setMainData({
                videoId: apiData.data.items[0].snippet.resourceId.videoId,
                title: videoTitle[0],
                thumbnails: apiData.data.items[0].snippet.thumbnails.medium.url,
                publishedAt: videoDate[0] + "년 " + videoDate[1] + "월 " + videoDate[2] + "일"
            });
        }
        setListData(apiData.data.items);
        setIsLoading(false);
    };

    useEffect(() => {
        getData(sermon);
    }, [sermon]);

    useEffect(() => {
        setSermon(kind);
    }, [router]);

    const opts = {
        width: "320px",
        height: "200px",
        playerVars: {
            autoplay: 1, rel: 0, modestbranding: 1
        },
    };

    return (
        <div className="sub_container">
            <div className="top_area">
                <span className="btn_prev" onClick={() => router.push("/")}></span>
                <div className="top_title">예배 <img src="/icons/ico_arrow.svg"/></div>
                <div className={isDrop ? "tab_wrap active" : "tab_wrap"}>
                    <div className="tab_bar">
                        전체보기
                        <span className="btn_close" onClick={() => setIsDrop(false)}></span>
                    </div>
                    <ul className="tab_area">
                        <li onClick={() => { setSermon("def"); setIsLoading(true); }} className={(sermon == "def") ? "on" : ""}>주일설교</li>
                        <li onClick={() => { setSermon("sun"); setIsLoading(true); }} className={(sermon == "sun") ? "on" : ""}>1,3부 예배</li>
                        <li onClick={() => { setSermon("sun"); setIsLoading(true); }} className={(sermon == "sun") ? "on" : ""}>수요예배</li>
                    </ul>
                    {/* <span className="btn_more" onClick={() => setIsDrop(true)}></span> */}
                </div>
                <div className="dropdown">
                    <ul>
                        <li className="on">수요예배</li>
                        <li>수요저녁예배 및 기도회</li>
                    </ul>
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

            {(isLoading === true) ? (
                <div className="loading_box">
                    <Loading />
                </div>
            ) : (
                <>
                    <div className="section subborder">
                        <div className="movie_wrap">
                            <YouTube videoId={mainData.videoId} opts={opts} containerClassName="iframe_wrap" />
                            <div className="info">
                                <Share title={mainData.title} thum="/images/kakao_def.jpg" vid={mainData.videoId} />
                                <div
                                    className="tit"
                                    onClick={() => {
                                        router.push(`/sermondetail?vid=${mainData.videoId}&vtit=${mainData.title}&vdate=${mainData.publishedAt}`, "/sermondetail");
                                    }}
                                >
                                    {mainData.title}
                                </div>
                                <div className="date">{mainData.publishedAt}</div>
                                <div className="preacher">설교 : 김성현 목사</div>
                            </div>
                        </div>
                    </div>

                    <div className="section subbordert">
                        {/*<div className="title">지난 예배 다시보기
                             <span className="filter" onClick={() => setIsFilter(true)}>필터</span> */}
                            {/* 필터 */}
                            {/* <div className={isFilter ? "layer_filter on" : "layer_filter"}>
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
                            </div> */}
                            {/* 필터 
                        </div>*/}
                        <ul className="sermon_filter">
                            <li className="on">업데이트순</li>
                            <li>회차순</li>
                        </ul>
                        <ul className="sermon_list">
                            {
                                listData.map((doc, i) => {
                                    let splitListDate = doc.snippet.publishedAt.split('T');
                                    let ListDate = splitListDate[0].split('-');
                                    let ListTitle = doc.snippet.title;
                                    let lDate = ListDate[0] + "년 " + ListDate[1] + "월 " + ListDate[2] + "일";
                                    if (i == 0 && sermon != "sun") {
                                        return false;
                                    }
                                    return (
                                        <li
                                            key={doc.id}
                                            onClick={() => {
                                                router.push(`/sermondetail?vid=${doc.snippet.resourceId.videoId}&vtit=${ListTitle}&vdate=${lDate}&kind=${sermon}`, "/sermondetail");
                                            }}
                                        >
                                            <div className="tit">{ListTitle.substring(0, 24)}...</div>
                                            <div className="date">{ListDate[0] + "년 " + ListDate[1] + "월 " + ListDate[2] + "일"}</div>
                                            <div className="preacher">설교 : 김성현 목사</div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}