import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from 'react-youtube';
import Share from "../src/components/Share";
import Loading from "../src/components/Loading";
import ContentTab from "../src/components/ContentTab";
import HomeBar from "../src/components/HomeBar";

export default function Sermonmain() {
    const router = useRouter();
    let kind = "";
    (router.query.kind) ? kind = router.query.kind : kind = "wed";

    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    // 온특새
    const API_URL_ONM = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpY-KpZNb-R3VMkoIEkMZSfG`;
    // 수요예배
    const API_URL_WED = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=50&playlistId=PLCNxYye_JJpZRwb9UsDgmMOJ3ex2VchNy`;
    // 금요기도회
    const API_URL_FRI = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=50&playlistId=PLCNxYye_JJpbJIiNzZwu52Q_WgMi3uh51`;

    const [mainData, setMainData] = useState({ videoId: "", title: "", thumbnails: "", publishedAt: "" });
    const [listData, setListData] = useState([]);
    const [sermon, setSermon] = useState(kind);
    const [isDrop, setIsDrop] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async (sermon) => {
        let apiData = "";
        if (sermon === "onm") {
            apiData = await axios.get(API_URL_ONM);
        } else if (sermon === "wed") {
            apiData = await axios.get(API_URL_WED);
        } else if (sermon === "fri") {
            apiData = await axios.get(API_URL_FRI);
        }
        let splitTitle = "";
        let splitDate = "";
        if (sermon === "wed") {
            if (apiData.data.items[0].snippet.title.includes("수요저녁예배")) {
                splitTitle = apiData.data.items[0].snippet.title.split('|');
                splitDate = apiData.data.items[0].snippet.publishedAt.split('T');
            } else {
                splitTitle = apiData.data.items[1].snippet.title.split('|');
                splitDate = apiData.data.items[1].snippet.publishedAt.split('T');
            }
        } else {
            splitTitle = apiData.data.items[0].snippet.title.split('|');
            splitDate = apiData.data.items[0].snippet.publishedAt.split('T');
        }
        const videoTitle = splitTitle[0];
        const videoDate = splitDate[0].split('-');

        setMainData({
            videoId: apiData.data.items[0].snippet.resourceId.videoId,
            title: videoTitle,
            thumbnails: apiData.data.items[0].snippet.thumbnails.medium.url,
            publishedAt: videoDate[0] + ". " + videoDate[1] + ". " + videoDate[2]
        });

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
                    <ContentTab />
                    <div className="dropdown">
                        <ul>
                            <li onClick={() => { if (sermon != "onm") { setSermon("onm"); setIsLoading(true); } }} className={(sermon == "onm") ? "on" : ""}>온특새</li>
                            <li onClick={() => { if (sermon != "wed") { setSermon("wed"); setIsLoading(true); } }} className={(sermon == "wed") ? "on" : ""}>수요저녁예배 및 기도회</li>
                            <li onClick={() => { if (sermon != "fri") { setSermon("fri"); setIsLoading(true); } }} className={(sermon == "fri") ? "on" : ""}>금요기도회</li>
                        </ul>
                    </div>
                </div>

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
                                    <Share title={mainData.title} thum={`/images/kakao_${sermon}.jpg`} vid={mainData.videoId} />
                                    <div
                                        className="tit"
                                        onClick={() => {
                                            router.push(`/prayerDetail?vid=${mainData.videoId}&vtit=${mainData.title}&vdate=${mainData.publishedAt}&kind=${sermon}`, "/sermondetail");
                                        }}
                                    >
                                        {mainData.title}
                                    </div>
                                    <div className="date">{mainData.publishedAt}</div>
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
                                        if ((sermon == "wed") && !ListTitle.includes("수요저녁예배")) {
                                            return false;
                                        }
                                        return (
                                            <li
                                                key={doc.id}
                                                onClick={() => {
                                                    router.push(`/prayerDetail?vid=${doc.snippet.resourceId.videoId}&vtit=${ListTitle}&vdate=${lDate}&kind=${sermon}`, "/sermondetail");
                                                }}
                                            >
                                                <div className="tit_box">
                                                    <div className="tit">{ListTitle}</div>
                                                    <div className="date">{ListDate[0] + ". " + ListDate[1] + ". " + ListDate[2]}</div>
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