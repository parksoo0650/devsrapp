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
        <div className="sub_container faith_wrap">
            <div className="top_area">
                <span className="btn_prev" onClick={() => router.push("/contents")}></span>
                <div className="top_title">콘텐츠  <img src="/icons/ico_arrow.svg"/></div>
                <div className="tab_wrap">
                    <ul className="tab_area">
                        <li>온시리즈</li>
                        <li>환언특강</li>
                        <li>주중 기도회</li>
                        <li className="on">1분 은혜</li>
                    </ul>
                </div>
            </div>
            <div className="section subborder">
                <ul className="faithmovie">
                    <li>
                        <div className="moviebox"><img src="/images/faithmovie.png"/></div>
                        <div className="info">
                            <div className="tit">1분은혜 -  하나님의 아들을 믿으라 (Believe the...</div>
                            <div className="date">2021.01. 01</div>
                        </div>
                    </li>
                    <li>
                        <div className="moviebox"><img src="/images/faithmovie.png"/></div>
                        <div className="info">
                            <div className="tit">1분은혜 -  하나님의 아들을 믿으라 (Believe the...</div>
                            <div className="date">2021.01. 01</div>
                        </div>
                    </li>
                    <li>
                        <div className="moviebox"><img src="/images/faithmovie.png"/></div>
                        <div className="info">
                            <div className="tit">1분은혜 -  하나님의 아들을 믿으라 (Believe the...</div>
                            <div className="date">2021.01. 01</div>
                        </div>
                    </li>
                    <li>
                        <div className="moviebox"><img src="/images/faithmovie.png"/></div>
                        <div className="info">
                            <div className="tit">1분은혜 -  하나님의 아들을 믿으라 (Believe the...</div>
                            <div className="date">2021.01. 01</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}