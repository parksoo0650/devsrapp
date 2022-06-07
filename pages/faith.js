import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from 'react-youtube';
import Share from "../src/components/Share";
import Loading from "../src/components/Loading";
import ContentTab from "../src/components/ContentTab";
import Popup from 'reactjs-popup';
import HomeBar from "../src/components/HomeBar";
import useSWR from "swr";

export default function faith() {
    const { data } = useSWR("/api/contents", false);
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const API_URL_SHORTS = `https://www.googleapis.com/youtube/v3/search/?key=${API_KEY}&part=snippet&maxResults=20&channelId=UCWi7MvGUsaJLlGMkN5yWKZQ&q=성락숏츠&order=date`;

    const [listData, setListData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        let apiData = await axios.get(API_URL_SHORTS);
        setListData(apiData.data.items);
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    const opts = {
        width: "320px",
        height: "700px",
        playerVars: {
            autoplay: 0, rel: 0, modestbranding: 1
        },
    };

    return (
        <>
            <div className="sub_container faith_wrap">
                <div className="top_area">
                    <ContentTab />
                </div>
                {(isLoading === true) ? (
                    <div className="loading_box">
                        <Loading />
                    </div>
                ) : (
                    <div className="section subborder">
                        <ul className="faithmovie">
                            {data?.contents?.map((content) => (
                                <li key={content.id}>
                                    <Popup
                                        trigger={<div className="moviebox"><img src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${content.image}/shorts`} /></div>}
                                        modal
                                        nested
                                    >
                                        {close => (
                                            <div className="modal">
                                                <div className="header">
                                                    <button className="close" onClick={close}>
                                                        <img src="/icons/btn_close_w.svg" alt="닫기" />
                                                    </button>
                                                    <Share title={content.name} thum={`/images/kakao_shorts.jpg`} vid={content.videoId} type="white" />
                                                </div>
                                                <div className="content">
                                                    <YouTube videoId={content.videoId} opts={opts} containerClassName="iframe_wrap" />
                                                </div>
                                            </div>
                                        )}
                                    </Popup>
                                    <div className="info">
                                        <div className="tit">1분은혜 - {content.name}</div>
                                        <div className="date">{content.publishedAt}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <HomeBar />
        </>
    );
}