import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from 'react-youtube';
import Share from "../src/components/Share";
import Loading from "../src/components/Loading";
import HomeBar from "../src/components/HomeBar";

export default function Praisemain() {
    const router = useRouter();
    let kind = "";
    (router.query.kind) ? kind = router.query.kind : kind = "prc";
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

    // 성가대
    const API_URL_PRC = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=50&playlistId=PLCNxYye_JJpZu77kdDQL8br9UXmYybrw7`;
    // 헌금송
    const API_URL_PRO = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=50&playlistId=PLCNxYye_JJpZ0jAa8IiITarzB-YF6aYdl`;

    const [mainData, setMainData] = useState({ videoId: "", title: "", thumbnails: "", publishedAt: "" });
    const [listData, setListData] = useState([]);
    const [praise, setPraise] = useState(kind);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async (praise) => {
        let apiData = "";
        if (praise === "prc") {
            apiData = await axios.get(API_URL_PRC);
        } else if (praise === "pro") {
            apiData = await axios.get(API_URL_PRO);
        }
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
        setListData(apiData.data.items);
        setIsLoading(false);
    };

    useEffect(() => {
        getData(praise);
    }, [praise]);

    useEffect(() => {
        setPraise(kind);
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
                    <div className="top_title">찬양</div>
                    <div className="tab_wrap">
                        <ul className="tab_area">
                            <li onClick={() => { if (praise != "prc") { setPraise("prc"); setIsLoading(true); } }} className={(praise == "prc") ? "on" : ""}>성가대</li>
                            <li onClick={() => { if (praise != "pro") { setPraise("pro"); setIsLoading(true); } }} className={(praise == "pro") ? "on" : ""}>헌금송</li>
                        </ul>
                    </div>
                </div>
                {(isLoading === true) ? (
                    <div className="loading_box">
                        <Loading />
                    </div>
                ) : (
                    <>
                        <div className="section subborder pt0">
                            <div className="movie_wrap">
                                <YouTube videoId={mainData.videoId} opts={opts} containerClassName="iframe_wrap" />
                                <div className="info">
                                    <Share title={mainData.title} thum={`/images/kakao_${praise}.jpg`} vid={mainData.videoId} />
                                    <div
                                        className="tit"
                                        onClick={() => {
                                            router.push(`/praisedetail?vid=${mainData.videoId}&vtit=${mainData.title}&vdate=${mainData.publishedAt}`, "/praisedetail");
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
                                        let splitListTitle = doc.snippet.title.split('|');
                                        let ListTitle = splitListTitle[0];
                                        let splitListDate = doc.snippet.publishedAt.split('T');
                                        let ListDate = splitListDate[0].split('-');
                                        let lDate = ListDate[0] + ". " + ListDate[1] + ". " + ListDate[2];
                                        return (
                                            <li
                                                key={doc.id}
                                                onClick={() => {
                                                    router.push(`/praisedetail?vid=${doc.snippet.resourceId.videoId}&vtit=${ListTitle}&vdate=${lDate}&kind=${praise}`, "/praisedetail");
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