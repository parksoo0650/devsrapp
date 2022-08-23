import { useRouter } from "next/router";
import React, { useState } from "react";
import YouTube from "react-youtube";
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
  const [youtubeTarget, setYoutubeTarget] = useState({});
  const [isMute, setIsMute] = useState(true);
  const onPlayerReady = (event) => {
    event.target.mute();
    event.target.setVolume(0);
    event.target.playVideo();
    setYoutubeTarget(event.target);
  };

  return (
    <div className="sub_container praise_detail">
      <div className="top_area">
        <span
          className="btn_prev"
          onClick={() => router.push(`/returnMain`)}
        ></span>
        <div className="top_title">환언특강</div>
      </div>

      <div className="movie_wrap">
        {isMute && (
          <div
            onClick={() => {
              youtubeTarget.unMute();
              youtubeTarget.setVolume(100);
              setIsMute(false);
            }}
            style={{
              position: "absolute",
              zIndex: "10",
              padding: "15px",
            }}
          >
            <img
              style={{ width: "50%" }}
              src="/images/btn_mute.png"
              alt="음소거"
            />
          </div>
        )}
        <YouTube
          videoId={router.query.vid}
          opts={opts}
          containerClassName="iframe_wrap"
          onReady={onPlayerReady}
        />
        <div className="info">
          <Share
            title={router.query.vtit}
            thum="/images/kakao_tue.jpg"
            vid={router.query.vid}
          />
          <div className="tit">
            <a href="#">{router.query.vtit}</a>
          </div>
          <div className="date">{router.query.vdate}</div>
        </div>
      </div>
    </div>
  );
}
