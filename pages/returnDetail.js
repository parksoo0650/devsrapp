import { useRouter } from "next/router";
import React, { useState } from "react";
import YouTube from 'react-youtube';
import Share from "../src/components/Share";

export default function Praisedetail() {
    const router = useRouter();
    const opts = {
        width: "320px",
        height: "200px",
        playerVars: {
            loop: 1,
            controls: 1,
        },
    };
    const onPlayerReady = (event) => {
        event.target.playVideo();
    }

    return (
        <div className="sub_container praise_detail">
            <div className="top_area">
                <span className="btn_prev" onClick={() => router.push(`/returnMain`)}></span>
                <div className="top_title">환언특강</div>
            </div>

            <div className="movie_wrap">
                <YouTube videoId={router.query.vid} opts={opts} containerClassName="iframe_wrap" onReady={onPlayerReady} />
                <div className="info">
                    <Share title={router.query.vtit} thum="/images/kakao_tue.jpg" vid={router.query.vid} />
                    <div className="tit">
                        <a href="#">{router.query.vtit}</a>
                    </div>
                    <div className="date">{router.query.vdate}</div>
                </div>
            </div>
        </div>
    );
}