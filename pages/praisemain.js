import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from 'react-youtube';
import Share from "../src/components/Share";
import Loading from "../src/components/Loading";

export default function Praisemain() {
    const router = useRouter();

    // 성가대
    const API_URL_PRC = "/youtube/playlistItems/&part=snippet,contentDetails&maxResults=50&playlistId=PLCNxYye_JJpZu77kdDQL8br9UXmYybrw7";
    // 헌금송
    const API_URL_PRO = "/youtube/playlistItems/&part=snippet,contentDetails&maxResults=50&playlistId=PLCNxYye_JJpZ0jAa8IiITarzB-YF6aYdl";

    const [mainData, setMainData] = useState({ videoId: "", title: "", thumbnails: "", publishedAt: "" });
    const [listData, setListData] = useState([]);
    const [praise, setPraise] = useState("prc");
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
            publishedAt: videoDate[0] + "년 " + videoDate[1] + "월 " + videoDate[2] + "일"
        });
        setListData(apiData.data.items);
        setIsLoading(false);
    };

    useEffect(() => {
        getData(praise);
    }, [praise]);

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
                <span className="btn_prev" onClick={() => router.push("/")}></span>
                <div className="top_title">찬양</div>

                <div className="tab_wrap">
                    <div className="tab_bar">
                        전체보기
                        <span className="btn_close" onClick={() => setIsDrop(false)}></span>
                    </div>
                    <ul className="tab_area">
                        <li onClick={() => { setPraise("prc"); setIsLoading(true); }} className={(praise == "prc") ? "on" : ""}>성가대</li>
                        <li onClick={() => { setPraise("pro"); setIsLoading(true); }} className={(praise == "pro") ? "on" : ""}>헌금송</li>
                    </ul>
                </div>
            </div>
            {(isLoading === true) ? (
                <div className="loading_box">
                    <Loading />
                </div>
            ) : (
                <>
                    <div className="section">
                        <div className="title">최신 컨텐츠</div>
                        <div className="movie_wrap">
                            <YouTube videoId={mainData.videoId} opts={opts} containerClassName="iframe_wrap" />
                            <div className="info">
                                <Share />
                                <div className="tit" onClick={() => { router.push("/praisedetail"); }}>{mainData.title}</div>
                                <div className="date">{mainData.publishedAt}</div>
                            </div>
                        </div>
                    </div>
                    <div className="section pt0">
                        <div className="title">지난 찬양 다시보기 
                            {/* <span className="filter">필터</span> */}
                        </div>
                        <ul className="sermon_list">
                            {
                                listData.map((doc, i) => {
                                    let splitListTitle = doc.snippet.title.split('|');
                                    let ListTitle = splitListTitle[0];
                                    let splitListDate = doc.snippet.publishedAt.split('T');
                                    let ListDate = splitListDate[0].split('-');
                                    return (
                                        <li key={doc.id}>
                                            <div className="tit">{ListTitle.substring(0, 24)}{(ListTitle.length > 24) ? "..." : ""}</div>
                                            <div className="date">{ListDate[0] + "년 " + ListDate[1] + "월 " + ListDate[2] + "일"}</div>
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