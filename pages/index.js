import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from 'react-youtube';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import Link from "next/link";
import Loading from "../src/components/Loading";
import Share from "../src/components/Share";
import HomeBar from "../src/components/HomeBar";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Home() {
  const router = useRouter();
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  // 주일설교
  const API_URL_DEF = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=1&playlistId=PLCNxYye_JJpZXsl4cQEjzBWRUFSCb2MCE`;
  // 주일예배 1부 〔06:30 AM〕 · 3부 〔10:30 AM
  const API_URL_SUN = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=2&playlistId=PLCNxYye_JJpYLa-0kkDLhDAw-Rzq3keT6`;
  // 온특새
  const API_URL_ONM = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=5&playlistId=PLCNxYye_JJpY-KpZNb-R3VMkoIEkMZSfG`;
  // 온성경
  const API_URL_ONB = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=5&playlistId=PLCNxYye_JJpZKRGb7hy_FJ1OIv4fxTF7S`;
  // 온3분
  const API_URL_ONS = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=1&playlistId=PLCNxYye_JJpZmSoNBoZdnZ0CnpEGh3pQA`;
  // 성가대
  const API_URL_PRC = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=6&playlistId=PLCNxYye_JJpZu77kdDQL8br9UXmYybrw7`;
  // 헌금송
  const API_URL_PRO = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=6&playlistId=PLCNxYye_JJpZ0jAa8IiITarzB-YF6aYdl`;

  const date = new Date();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const opts = { width: "320px", height: "200px", playerVars: { autoplay: 1, rel: 0, modestbranding: 1 } };
  const [isLoading, setIsLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [weeks, setWeeks] = useState("");
  const [weekDataOnm, setWeekDataOnm] = useState([]);
  const [weekDataOnb, setWeekDataOnb] = useState([]);
  const [weekDataOns, setWeekDataOns] = useState([]);
  const [praiseDataPrc, setPraiseDataPrc] = useState([]);
  const [praiseDataPro, setPraiseDataPro] = useState([]);
  const [liveDatas, setLiveDatas] = useState({ videoId: "", title: "", thumbnails: "", publishedAt: "" });
  const [weekSelectDataOnm, setWeekSelectDataOnm] = useState({ title: "", date: "", videoId: "", thumbnails: "" });
  const [weekSelectDataOnb, setWeekSelectDataOnb] = useState({ title: "", date: "", videoId: "", thumbnails: "" });
  const [weekSelectDataOns, setWeekSelectDataOns] = useState({ title: "", date: "", videoId: "", thumbnails: "" });

  const getLiveData = async () => {
    const api_data = {};
    const splitTitle = "";
    const splitDate = "";
    const videoTitle = "";
    const videoDate = "";

    if (week[date.getDay()] === "일") {
      api_data = await axios.get(API_URL_SUN);
      splitTitle = api_data.data.items[0].snippet.title.split('-');
      splitDate = api_data.data.items[0].snippet.publishedAt.split('T');
      videoTitle = splitTitle[1].split('|');
      videoDate = splitDate[0].split('-');

      let hours = new Date().getHours();
      if (hours > 7 && hours < 13) {
        setIsLive(true);
      }
    } else {
      api_data = await axios.get(API_URL_DEF);
      splitTitle = api_data.data.items[0].snippet.title.split('-');
      splitDate = api_data.data.items[0].snippet.publishedAt.split('T');
      videoTitle = splitTitle[1].split('|');
      videoDate = splitDate[0].split('-');
    }
    setLiveDatas({
      videoId: api_data.data.items[0].snippet.resourceId.videoId,
      title: videoTitle[0],
      thumbnails: api_data.data.items[0].snippet.thumbnails.medium.url,
      publishedAt: videoDate[0] + ". " + videoDate[1] + ". " + videoDate[2]
    });

    setIsLoading(false);
  };

  const getOnData = async () => {
    const dataOnm = await axios.get(API_URL_ONM);
    setWeekDataOnm(dataOnm.data.items);

    const dataOnb = await axios.get(API_URL_ONB);
    setWeekDataOnb(dataOnb.data.items);

    const dataOns = await axios.get(API_URL_ONS);
    setWeekDataOns(dataOns.data.items);

    const dataPrc = await axios.get(API_URL_PRC);
    setPraiseDataPrc(dataPrc.data.items);

    const dataPro = await axios.get(API_URL_PRO);
    setPraiseDataPro(dataPro.data.items);
  };

  const getWeekData = (day) => {
    onInint();

    weekDataOnm.forEach((doc) => {
      if (doc.snippet.title !== "Private video") {
        let splitDateOnm = doc.snippet.publishedAt.split('T');
        if (getDate(splitDateOnm[0]) === day) {
          let splitTitleOnm1 = doc.snippet.title.split('-');
          let splitTitleOnm2 = splitTitleOnm1[1].split('|');
          setWeekSelectDataOnm({
            title: splitTitleOnm2[0],
            date: splitTitleOnm2[1],
            videoId: doc.snippet.resourceId.videoId,
            thumbnails: doc.snippet.thumbnails
          });
        }
        return false;
      }
    });

    weekDataOnb.forEach((doc) => {
      if (doc.snippet.title !== "Private video") {
        let splitDateOnb = doc.snippet.publishedAt.split('T');
        let splitTitleOnb1 = [];
        if (getDate(splitDateOnb[0]) === day) {
          splitTitleOnb1 = doc.snippet.title.split('|');
          setWeekSelectDataOnb({
            title: splitTitleOnb1[0],
            date: splitTitleOnb1[1],
            videoId: doc.snippet.resourceId.videoId,
            thumbnails: doc.snippet.thumbnails
          });
        }
        return false;
      }
    });

    if (day === "금") {
      weekDataOns.forEach((doc) => {
        if (doc.snippet.title !== "Private video") {
          let splitDateOns = doc.snippet.publishedAt.split('T');
          if (getDate(splitDateOns[0]) === day) {
            let splitTitleOns1 = doc.snippet.title.split('-');
            let splitTitleOns2 = splitTitleOns1[1].split('|');
            setWeekSelectDataOns({
              title: splitTitleOns2[0],
              date: splitTitleOns2[1],
              videoId: doc.snippet.resourceId.videoId,
              thumbnails: doc.snippet.thumbnails
            });
          }
          return false;
        }
      });
    } else {
      setWeekSelectDataOns({});
    }
  }

  // 날짜를 요일로 전환함수
  const getDate = (day) => {
    let dayOfWeek = week[new Date(day).getDay() + 1];
    return dayOfWeek;
  }

  // On 콘텐츠 초기화
  const onInint = () => {
    setWeekSelectDataOnm({});
    setWeekSelectDataOnb({});
    setWeekSelectDataOns({});
  }

  useEffect(() => {
    setTimeout(scrollTo, 0, 0, 1);
    setWeeks(week[date.getDay()]);
    getLiveData();
    getOnData();
  }, []);

  useEffect(() => {
    getWeekData(week[date.getDay()]);
  }, [weekDataOnm, weekDataOnb, weekDataOns]);

  return (
    <>
      <header>
        <div className="inner">
          <h1 className="logo" onClick={() => { router.push("/"); }}>
            <img src="../images/logo.svg" alt="성락교회" />
          </h1>
          {isLive && <div className="live">라이브 <img src="/icons/ico_live.svg" alt="라이브" /></div>}
        </div>
      </header>
      <div className="container">
        {(isLoading === false) ? (
          <div className="section pt0">
            <div className="movie_wrap">
              <YouTube videoId={liveDatas.videoId} opts={opts} containerClassName="iframe_wrap" />
              <div className="info">
                <Share title={liveDatas.title} thum="/images/kakao_def.jpg" vid={liveDatas.videoId} />
                <div
                  className="tit pr25"
                  onClick={() => {
                    router.push(`/sermondetail?vid=${liveDatas.videoId}&vtit=${liveDatas.title}&vdate=${liveDatas.publishedAt}`, "/sermondetail");
                  }}
                >
                  <a href="#">{liveDatas.title}</a>
                </div>
                <div className="date">{liveDatas.publishedAt}</div>
                <div className="preacher">설교: 김성현 목사</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="loading_box">
            <Loading />
          </div>
        )}

        <div className={(liveDatas.videoId) ? "section pt0" : "section pt25"}>
          <div className="title">주중 콘텐츠</div>
          <div className="days_wrap">
            <ul className="day_list">
              <li onClick={() => { getWeekData("월"); setWeeks("월"); }} className={(weeks == "월") ? "on" : ""}>월요일</li>
              <li onClick={() => { getWeekData("화"); setWeeks("화"); }} className={(weeks == "화") ? "on" : ""}>화요일</li>
              <li onClick={() => { getWeekData("수"); setWeeks("수"); }} className={(weeks == "수") ? "on" : ""}>수요일</li>
              <li onClick={() => { getWeekData("목"); setWeeks("목"); }} className={(weeks == "목") ? "on" : ""}>목요일</li>
              <li onClick={() => { getWeekData("금"); setWeeks("금"); }} className={(weeks == "금") ? "on" : ""}>금요일</li>
            </ul>
            <ul className="con_list">
              {(weekSelectDataOnm.title) &&
                <li
                  onClick={() => {
                    router.push(`/onprayerdetail?vid=${weekSelectDataOnm.videoId}&vtit=${weekSelectDataOnm.title}&vdate=${weekSelectDataOnm.date}&kind=onm`, "/onprayerdetail");
                  }}
                >
                  <div className="movie">
                    {(weekSelectDataOnm.thumbnails) ? (
                      <img src={weekSelectDataOnm.thumbnails.medium.url} />
                    ) : (null)}
                  </div>
                  <div className="info">
                    <div className="tit">
                      {weekSelectDataOnm.title}
                      {/* <span className="tag_up">UP</span> */}
                    </div>
                    <div className="date">{weekSelectDataOnm.date.substring(0,10)}</div>
                  </div>
                </li>
              }
              {(weeks != "수" && weekSelectDataOnb.title) &&
                <li
                  onClick={() => {
                    router.push(`/onbibledetail?vid=${weekSelectDataOnb.videoId}&vtit=${weekSelectDataOnb.title}&vdate=${weekSelectDataOnb.date}&kind=onb`, "/onbibledetail");
                  }}
                >
                  <div className="movie">
                    {(weekSelectDataOnb.thumbnails) ? (
                      <img src={weekSelectDataOnb.thumbnails.medium.url} />
                    ) : (null)}
                  </div>
                  <div className="info">
                    <div className="tit">
                      {weekSelectDataOnb.title}
                    </div>
                    <div className="date">{weekSelectDataOnb.date.substring(0,10)}</div>
                  </div>
                </li>
              }
              {(weekSelectDataOns.title) &&
                <li
                  onClick={() => {
                    router.push(`/onthreedetail?vid=${weekSelectDataOns.videoId}&vtit=${weekSelectDataOns.title}&vdate=${weekSelectDataOns.date}&kind=ont`, "/onthreedetail");
                  }}
                >
                  <div className="movie">
                    {(weekSelectDataOns.thumbnails) ? (
                      <img src={weekSelectDataOns.thumbnails.medium.url} />
                    ) : (null)}
                  </div>
                  <div className="info">
                    <div className="tit">
                      {weekSelectDataOns.title}
                    </div>
                    <div className="date">{weekSelectDataOns.date.substring(0,10)}</div>
                  </div>
                </li>
              }
            </ul>
          </div>
        </div>

        <div className="section quick_wrap">
          {/* <div className="title">빠른접근</div> */}
          <ul className="quick_menu">
            <li onClick={() => { router.push("/sermonmain"); }}>
              <div className="img"><img src="/icons/ico_sermon_new.svg" alt="예배" /></div>
              <div className="txt">예배</div>
            </li>
            <li onClick={() => { router.push("/praisemain"); }}>
              <div className="img"><img src="/icons/ico_quick_praise.svg" alt="찬양" /></div>
              <div className="txt">찬양</div>
            </li>
            <li onClick={() => { router.push("/returnMain"); }}>
              <div className="img"><img src="/icons/ico_return.svg" alt="환언특강" /></div>
              <div className="txt">환언특강</div>
            </li>
            <li onClick={() => { router.push("/onmain"); }}>
              <div className="img"><img src="/icons/ico_quick_onseries.svg" alt="온시리즈" /></div>
              <div className="txt">온시리즈</div>
            </li>
            <li onClick={() => { router.push("/faith"); }}>
              <div className="img"><img src="/icons/ico_shorts.svg" alt="1분은혜" /></div>
              <div className="txt">1분은혜</div>
            </li>
            {/* <li onClick={() => { router.push("/"); }}>
              <div className="img"></div>
              <div className="txt">주보</div>
            </li>
            <li onClick={() => { router.push("/"); }}>
              <div className="img"></div>
              <div className="txt">교회소식</div>
            </li> */}
            <li onClick={() => { router.push("/offering"); }}>
              <div className="img"><img src="/icons/ico_quick_offering.svg" alt="헌금안내" /></div>
              <div className="txt">헌금안내</div>
            </li>
          </ul>
        </div>

        <div className="mdbanner">
          {/* <p className="nav">1/2</p> */}
          <img src="/icons/md_banner2.png" alt="배너" />
        </div>

        <div className="section">
          <div className="title">은혜로운 찬양</div>
          <Link href="/praisemain" >
            <a className="more">전체보기</a>
          </Link>
          <Swiper
            className="slide_wrap"
            spaceBetween={10}
            slidesPerView={"auto"}
            resistanceRatio={0}
            pagination={false}
          >
            {
              praiseDataPrc.map((doc, i) => {
                let splitListTitle = doc.snippet.title.split('|');
                let ListTitle = splitListTitle[0];
                let splitListDate = doc.snippet.publishedAt.split('T');
                let ListDate = splitListDate[0].split('-');
                let lDate = ListDate[0] + ". " + ListDate[1] + ". " + ListDate[2];
                return (
                  <SwiperSlide
                    className="movie_wrap"
                    key={doc.id}
                  >
                    <div
                      onClick={() => {
                        router.push(`/praisedetail?vid=${doc.snippet.resourceId.videoId}&vtit=${ListTitle}&vdate=${ListDate}&kind=prc`, "/praisedetail");
                      }}
                    >
                      <div className="movie_thumb">
                        <img style={{ width: "100%" }} src={doc.snippet.thumbnails.medium.url} />
                      </div>
                      <div className="info">
                        <div className="tit" style={{ height: "46px" }}>
                          <a href="#">{ListTitle}</a>
                        </div>
                        <div className="date">{lDate}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
            {
              praiseDataPro.map((doc, i) => {
                let splitListTitle = doc.snippet.title.split('|');
                let ListTitle = splitListTitle[0];
                let splitListDate = doc.snippet.publishedAt.split('T');
                let ListDate = splitListDate[0].split('-');
                let lDate = ListDate[0] + ". " + ListDate[1] + ". " + ListDate[2];
                return (
                  <SwiperSlide
                    className="movie_wrap"
                    key={doc.id}
                  >
                    <div
                      onClick={() => {
                        router.push(`/praisedetail?vid=${doc.snippet.resourceId.videoId}&vtit=${ListTitle}&vdate=${ListDate}&kind=prc`, "/praisedetail");
                      }}
                    >
                      <img style={{ width: "100%" }} src={doc.snippet.thumbnails.medium.url} />
                      <div className="info">
                        <div className="tit" style={{ height: "46px" }}>
                          <a href="#">{ListTitle}</a>
                        </div>
                        <div className="date">{lDate}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>

        <div className="section pt0">
          <div className="title">성락교회 미래세대</div>
          <Swiper
            className="future_generation"
            spaceBetween={7}
            slidesPerView={"auto"}
            resistanceRatio={0}
            pagination={false}
          >
            <SwiperSlide>
              <Link href="youtube://channel/UCkrWb-HCk3fA7szpbmLHTmw">
                <a>
                  <div className="img"><img src="../icons/thumb_bwm.svg" alt="청년부" /></div>
                  <div className="txt">청년부</div>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="youtube://channel/UCW6bF9L0ZK__Tlwl19B0FYQ">
                <a>
                  <div className="img"><img src="../icons/thumb_cba.svg" alt="대학부" /></div>
                  <div className="txt">대학부</div>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="youtube://channel/UCcD3GeLh6aBwBN_A5yr4pEg">
                <a>
                  <div className="img"><img src="../icons/thumb_high.svg" alt="고등부" /></div>
                  <div className="txt">고등부</div>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="youtube://channel/UCDzjhPXk9IypRuCopoFDvlg">
                <a>
                  <div className="img"><img src="../icons/thumb_secondary.svg" alt="중등부" /></div>
                  <div className="txt">중등부</div>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="youtube://channel/UCVZgyTaNK1q-CKM481MO35A">
                <a>
                  <div className="img"><img src="../icons/thumb_elementary.svg" alt="유치부" /></div>
                  <div className="txt">어린이부</div>
                </a>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <HomeBar />
    </>
  )
}