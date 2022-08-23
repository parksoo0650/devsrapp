import YouTube from "react-youtube";
import Share from "../src/components/Share";
import Loading from "../src/components/Loading";
import ContentTab from "../src/components/ContentTab";
import Popup from "reactjs-popup";
import HomeBar from "../src/components/HomeBar";
import useSWR from "swr";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function faith() {
  const { data } = useSWR("/api/contents?kind=shorts");
  const opts = {
    width: "320px",
    height: "700px",
    playerVars: {
      loop: 1,
      controls: 1,
    },
  };
  const [youtubeTarget, setYoutubeTarget] = useState({});
  const [isMute, setIsMute] = useState(false);
  const onPlayerReady = (event) => {
    event.target.mute();
    event.target.setVolume(0);
    event.target.playVideo();
    setYoutubeTarget(event.target);
    setIsMute(true);
  };

  return (
    <>
      <div className="sub_container faith_wrap">
        <div className="top_area">
          <ContentTab />
        </div>
        {!data ? (
          <div className="loading_box">
            <Loading />
          </div>
        ) : (
          <div className="section subborder">
            <ul className="faithmovie">
              {data?.contents?.map((content) => (
                <li key={content.id}>
                  <Popup
                    trigger={
                      <div className="relative pb-80">
                        {/* <img src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${content.image}/shorts`} /> */}
                        <Image
                          src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${content.image}/shorts`}
                          className="bg-slate-300 object-cover"
                          layout="fill"
                        />
                      </div>
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="modal">
                        <div className="header">
                          <button className="close" onClick={close}>
                            <img src="/icons/btn_close_w.svg" alt="닫기" />
                          </button>
                          <Share
                            title={content.name}
                            thum={`/images/kakao_shorts.jpg`}
                            vid={content.videoId}
                            type="white"
                          />
                        </div>
                        <div className="content">
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
                            videoId={content.videoId}
                            opts={opts}
                            containerClassName="iframe_wrap"
                            onReady={onPlayerReady}
                          />
                        </div>
                      </div>
                    )}
                  </Popup>
                  <div className="pt-3">
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
