import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from 'react-youtube';
import Share from "../src/components/Share";
import Loading from "../src/components/Loading";
import HomeBar from "../src/components/HomeBar";

export default function Sermonmain() {
    const router = useRouter();
    let kind = "";
    (router.query.kind) ? kind = router.query.kind : kind = "def";
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    // 주일설교
    const API_URL_DEF = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpZXsl4cQEjzBWRUFSCb2MCE`;
    // 주일예배 1부 〔06:30 AM〕 · 3부 〔10:30 AM
    const API_URL_SUN = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpYLa-0kkDLhDAw-Rzq3keT6`;
    // 수요예배
    const API_URL_WED = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=50&playlistId=PLCNxYye_JJpZRwb9UsDgmMOJ3ex2VchNy`;

    const [mainData, setMainData] = useState({ videoId: "", title: "", thumbnails: "", publishedAt: "" });
    const [listData, setListData] = useState([]);
    const [sermon, setSermon] = useState(kind);
    const [isFilter, setIsFilter] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async (sermon) => {
        let apiData = "";
        if (sermon === "sun") {
            apiData = await axios.get(API_URL_SUN);
            const splitTitle = apiData.data.items[0].snippet.title.split('|');
            const splitDate = apiData.data.items[0].snippet.publishedAt.split('T');
            const videoDate = splitDate[0].split('-');

            setMainData({
                videoId: apiData.data.items[0].snippet.resourceId.videoId,
                title: splitTitle[0],
                thumbnails: apiData.data.items[0].snippet.thumbnails.medium.url,
                publishedAt: videoDate[0] + ". " + videoDate[1] + ". " + videoDate[2]
            });
        } else if (sermon === "wed") {
            apiData = await axios.get(API_URL_WED);
            if (apiData.data.items[0].snippet.title.includes("수요예배")) {
                const splitTitle = apiData.data.items[0].snippet.title.split('|');
                const splitDate = apiData.data.items[0].snippet.publishedAt.split('T');
                const videoTitle = splitTitle[0];
                const videoDate = splitDate[0].split('-');

                setMainData({
                    videoId: apiData.data.items[0].snippet.resourceId.videoId,
                    title: videoTitle,
                    thumbnails: apiData.data.items[0].snippet.thumbnails.medium.url,
                    publishedAt: videoDate[0] + ". " + videoDate[1] + ". " + videoDate[2]
                });
            } else {
                const splitTitle = apiData.data.items[1].snippet.title.split('|');
                const splitDate = apiData.data.items[1].snippet.publishedAt.split('T');
                const videoTitle = splitTitle[0];
                const videoDate = splitDate[0].split('-');

                setMainData({
                    videoId: apiData.data.items[1].snippet.resourceId.videoId,
                    title: videoTitle,
                    thumbnails: apiData.data.items[1].snippet.thumbnails.medium.url,
                    publishedAt: videoDate[0] + ". " + videoDate[1] + ". " + videoDate[2]
                });
            }
        } else {
            apiData = await axios.get(API_URL_DEF);
            const splitTitle = apiData.data.items[0].snippet.title.split('-');
            const splitDate = apiData.data.items[0].snippet.publishedAt.split('T');
            const videoTitle = splitTitle[1].split('|');
            const videoDate = splitDate[0].split('-');

            setMainData({
                videoId: apiData.data.items[0].snippet.resourceId.videoId,
                title: videoTitle[0],
                thumbnails: apiData.data.items[0].snippet.thumbnails.medium.url,
                publishedAt: videoDate[0] + ". " + videoDate[1] + ". " + videoDate[2]
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
        <>
            <div className="sub_container">
                <div className="top_area">
                    <span className="btn_prev" onClick={() => router.push("/")}></span>
                    <div className="top_title">예배</div>
                    <div className="tab_wrap">
                        <ul className="tab_area">
                            <li onClick={() => { if (sermon != "def") { setSermon("def"); setIsLoading(true); } }} className={(sermon == "def") ? "on" : ""}>주일설교</li>
                            <li onClick={() => { if (sermon != "sun") { setSermon("sun"); setIsLoading(true); } }} className={(sermon == "sun") ? "on" : ""}>1,3부 예배</li>
                            <li onClick={() => { if (sermon != "wed") { setSermon("wed"); setIsLoading(true); } }} className={(sermon == "wed") ? "on" : ""}>수요예배</li>
                        </ul>
                    </div>
                </div>

                {(isLoading === true) ? (
                    <div className="loading_box">
                        <Loading />
                    </div>
                ) : (
                    <>
                        <div className="section pt0 subborder">
                            <div className="movie_wrap">
                                <YouTube videoId={mainData.videoId} opts={opts} containerClassName="iframe_wrap" />
                                <div className="info">
                                    <Share title={mainData.title} thum="/images/kakao_def_new.jpg" vid={mainData.videoId} />
                                    <div
                                        className="tit"
                                        onClick={() => {
                                            router.push(`/sermondetail?vid=${mainData.videoId}&vtit=${mainData.title}&vdate=${mainData.publishedAt}`, "/sermondetail");
                                        }}
                                    >
                                        {mainData.title}
                                    </div>
                                    <div className="date">{mainData.publishedAt}</div>
                                    {(sermon != "wed") && <div className="preacher">설교 : 김성현 목사</div>}
                                </div>
                            </div>
                        </div>

                        <div className="section subbordert pt15">
                            <ul className="sermon_list">
                                {
                                    listData.map((doc, i) => {
                                        let splitListDate = doc.snippet.publishedAt.split('T');
                                        let ListDate = splitListDate[0].split('-');
                                        let ListTitle = doc.snippet.title;
                                        let lDate = ListDate[0] + ". " + ListDate[1] + ". " + ListDate[2];
                                        if (i == 0 && sermon != "sun") {
                                            return false;
                                        }
                                        if ((sermon == "wed") && !ListTitle.includes("수요예배")) {
                                            return false;
                                        }
                                        return (
                                            <li
                                                key={doc.id}
                                                onClick={() => {
                                                    router.push(`/sermondetail?vid=${doc.snippet.resourceId.videoId}&vtit=${ListTitle}&vdate=${lDate}&kind=${sermon}`, "/sermondetail");
                                                }}
                                            >
                                                <div className="tit_box">
                                                    <div className="tit">{ListTitle}</div>
                                                    <div className="date">{ListDate[0] + ". " + ListDate[1] + ". " + ListDate[2]}</div>
                                                    {(sermon != "wed") && <div className="preacher">설교 : 김성현 목사</div>}
                                                </div>
                                                <div className="play_icon">
                                                    <img src="/icons/ico_play.svg" alt="play" />
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </>
                )}
            </div>
            <HomeBar />
        </>
    );
}