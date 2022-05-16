import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from 'react-youtube';
import Share from "../src/components/Share";
import Loading from "../src/components/Loading";

export default function Sermonmain() {
    const router = useRouter();
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    // 환언특강 〔화 07:30 PM〕
    const API_URL_TUE = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=30&playlistId=PLCNxYye_JJpZRY6ARfjlBXKScy-QqfXnj`;

    const [mainData, setMainData] = useState({ videoId: "", title: "", thumbnails: "", publishedAt: "" });
    const [listData, setListData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        let apiData = await axios.get(API_URL_TUE);
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
        getData();
    }, []);

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
                <div className="top_title">환언특강</div>
            </div>

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
                                <Share title={mainData.title} thum="/images/kakao_tue.jpg"} vid={mainData.videoId} />
                                <div
                                    className="tit"
                                    onClick={() => {
                                        router.push(`/returnDetail?vid=${mainData.videoId}&vtit=${mainData.title}&vdate=${mainData.publishedAt}`, "/sermondetail");
                                    }}
                                >
                                    {mainData.title}
                                </div>
                                <div className="date">{mainData.publishedAt}</div>
                                <div className="preacher">설교 : 김기동 원로감독</div>
                            </div>
                        </div>
                    </div>

                    <div className="section pt0">
                        <div className="title">지난 예배 다시보기
                        </div>
                        <ul className="sermon_list">
                            {
                                listData.map((doc, i) => {
                                    let splitListDate = doc.snippet.publishedAt.split('T');
                                    let ListDate = splitListDate[0].split('-');
                                    let ListTitle = doc.snippet.title;
                                    let lDate = ListDate[0] + "년 " + ListDate[1] + "월 " + ListDate[2] + "일";
                                    if (i == 0) {
                                        return false;
                                    }
                                    return (
                                        <li
                                            key={doc.id}
                                            onClick={() => {
                                                router.push(`/returnDetail?vid=${doc.snippet.resourceId.videoId}&vtit=${ListTitle}&vdate=${lDate}`, "/sermondetail");
                                            }}
                                        >
                                            <div className="tit">{ListTitle.substring(0, 24)}...</div>
                                            <div className="date">{ListDate[0] + "년 " + ListDate[1] + "월 " + ListDate[2] + "일"}</div>
                                            <div className="preacher">설교 : 김기동 원로감독</div>
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