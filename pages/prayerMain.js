import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from 'react-youtube';
import Share from "../src/components/Share";
import Loading from "../src/components/Loading";

export default function Sermonmain() {
    const router = useRouter();
    let kind = "";
    (router.query.kind) ? kind = router.query.kind : kind = "wed";

    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
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
        if (sermon === "wed") {
            apiData = await axios.get(API_URL_WED);
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
        } else if (sermon === "fri") {
            apiData = await axios.get(API_URL_FRI);
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
                <span className="btn_prev" onClick={() => router.push("/contents")}></span>
                <div className="top_title">기도회</div>
                <div className={isDrop ? "tab_wrap active" : "tab_wrap"}>
                    <div className="tab_bar">
                        전체보기
                        <span className="btn_close" onClick={() => setIsDrop(false)}></span>
                    </div>
                    <ul className="tab_area">
                        <li onClick={() => { setSermon("wed"); setIsLoading(true); }} className={(sermon == "wed") ? "on" : ""}>수요예배</li>
                        <li onClick={() => { setSermon("fri"); setIsLoading(true); }} className={(sermon == "fri") ? "on" : ""}>금요기도회</li>
                    </ul>
                    <span className="btn_more" onClick={() => setIsDrop(true)}></span>
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
                    <div className="section pt30">
                        <div className="title">최신 컨텐츠</div>
                        <div className="movie_wrap">
                            <YouTube videoId={mainData.videoId} opts={opts} containerClassName="iframe_wrap" />
                            <div className="info">
                                <Share title={mainData.title} thum={mainData.thumbnails} vid={mainData.videoId} />
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

                    <div className="section pt0">
                        <div className="title">지난 기도회 다시보기</div>
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
                                                router.push(`/prayerDetail?vid=${doc.snippet.resourceId.videoId}&vtit=${ListTitle}&vdate=${lDate}&kind=${sermon}`, "/sermondetail");
                                            }}
                                        >
                                            <div className="tit">{ListTitle.substring(0, 24)}...</div>
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