import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import Share from "../src/components/Share";
import useSWR from "swr";
import Weeklyorder from "../src/components/Weeklyorder";
import Weeklysummary from "../src/components/Weeklysummary";

export default function Sermonmain() {
  const router = useRouter();
  const { data } = useSWR(
    router.query.vdate ? `/api/weekly/date?pdate=${router.query.vdate}` : null
  );

  let kind = "";
  router.query.kind ? (kind = router.query.kind) : (kind = "def");
  const ser_kind = {
    def: "주일설교",
    sun: "1,3부 예배",
    tue: "환언특강",
    wed: "수요예배",
    fri: "금요기도회",
  };

  const [tabKind, setTabKind] = useState("ord");

  const opts = {
    width: "320px",
    height: "200px",
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

  useEffect(() => {
    setTabKind("ord");
  }, [router]);

  return (
    <div className="sub_container sermon_detail">
      <div className="top_area">
        <span
          className="btn_prev"
          onClick={() => router.push(`/sermonmain?kind=${kind}`)}
        ></span>
        <div className="top_title">{ser_kind[kind]}</div>
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
            <img style={{ width: "50%" }} src="/images/btn_mute.png" alt="음소거" />
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
            thum="/images/kakao_def_new.jpg"
            vid={router.query.vid}
          />
          <div className="tit">
            <a href="#">{router.query.vtit}</a>
          </div>
          <div className="date">{router.query.vdate}</div>
        </div>
      </div>

      {(kind == "def" || kind == "sun") && data?.weekly[0] && (
        <div className="section">
          <ul className="tab_area">
            <li
              onClick={() => {
                if (tabKind != "ord") {
                  setTabKind("ord");
                }
              }}
              className={tabKind == "ord" ? "on" : ""}
            >
              예배순서
            </li>
            <li
              onClick={() => {
                if (tabKind != "ser") {
                  setTabKind("ser");
                }
              }}
              className={tabKind == "ser" ? "on" : ""}
            >
              설교요지
            </li>
          </ul>
          <div className="tab_con">
            {tabKind == "ord" && <Weeklyorder data={data?.weekly[0]} />}
            {tabKind == "ser" && <Weeklysummary data={data?.weekly[0]} />}
          </div>
        </div>
      )}
    </div>
  );
}
