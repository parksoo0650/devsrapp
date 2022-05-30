import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from 'react-youtube';
import Share from "../src/components/Share";
import Loading from "../src/components/Loading";
import ContentTab from "../src/components/ContentTab";
import Popup from 'reactjs-popup';

export default function faith() {
    const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const API_URL_SHORTS = `https://www.googleapis.com/youtube/v3/search/?key=${API_KEY}&part=snippet&maxResults=20&
    channelId=UCWi7MvGUsaJLlGMkN5yWKZQ&q=성락교회설교숏츠&order=date`;

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
                        {
                            listData.map((doc, i) => {
                                let listTitle = doc.snippet.title.split('-');
                                let splitListDate = doc.snippet.publishedAt.split('T');
                                let ListDate = splitListDate[0].split('-');
                                let lDate = ListDate[0] + ". " + ListDate[1] + ". " + ListDate[2];
                                return (
                                    <li key={i}>
                                        {/* <div className="popup-content">
                                            <a className="close" onClick={close}>
                                                &times;
                                            </a>
                                            <YouTube videoId={doc.id.videoId} opts={opts} containerClassName="iframe_wrap" />
                                        </div> */}
                                        <Popup
                                            trigger={<div className="moviebox"></div>}
                                            modal
                                            nested
                                        >
                                            {close => (
                                                <div className="modal">
                                                    <button className="close" onClick={close}>
                                                        &times;
                                                    </button>
                                                    <div className="header"></div>
                                                    <div className="content">
                                                        <YouTube videoId={doc.id.videoId} opts={opts} containerClassName="iframe_wrap" />
                                                    </div>
                                                </div>
                                            )}
                                        </Popup>
                                        <style jsx>
                                            {`
                                            .moviebox {
                                                background-image: url(${doc.snippet.thumbnails.high.url});
                                                background-position: center;
                                            }
                                            `}
                                        </style>
                                        <div className="info">
                                            <div className="tit">{listTitle[0]}</div>
                                            <div className="date">{lDate}</div>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            )}
        </div>
    );
}