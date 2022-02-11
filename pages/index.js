import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sheet from 'react-modal-sheet';
import YouTube from 'react-youtube';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import Top from '../src/components/Top';
import Footer from "../src/components/Footer";
import Link from "next/link";
import Loading from "../src/components/Loading";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Home() {
  const router = useRouter();

  // 주일설교
  const API_URL_DEF = "/youtube/playlistItems/&part=snippet,contentDetails&maxResults=1&playlistId=PLCNxYye_JJpZXsl4cQEjzBWRUFSCb2MCE";
  // 주일예배 1부 〔06:30 AM〕 · 3부 〔10:30 AM
  const API_URL_SUN = "/youtube/playlistItems/&part=snippet,contentDetails&maxResults=2&playlistId=PLCNxYye_JJpYLa-0kkDLhDAw-Rzq3keT6";
  // 환언특강 〔화 07:30 PM〕
  const API_URL_TUE = "/youtube/playlistItems/&part=snippet,contentDetails&maxResults=1&playlistId=PLCNxYye_JJpZRY6ARfjlBXKScy-QqfXnj";
  // 온특새
  const API_URL_ONM = "/youtube/playlistItems/&part=snippet,contentDetails&maxResults=5&playlistId=PLCNxYye_JJpY-KpZNb-R3VMkoIEkMZSfG";
  // 온성경
  const API_URL_ONB = "/youtube/playlistItems/&part=snippet,contentDetails&maxResults=5&playlistId=PLCNxYye_JJpbN_Vhx8arRhZutfQfiYhvr";
  // 온3분
  const API_URL_ONS = "/youtube/playlistItems/&part=snippet,contentDetails&maxResults=1&playlistId=PLCNxYye_JJpZmSoNBoZdnZ0CnpEGh3pQA";
  // 성가대
  const API_URL_PRC = "/youtube/playlistItems/&part=snippet,contentDetails&maxResults=1&playlistId=PLCNxYye_JJpZu77kdDQL8br9UXmYybrw7";
  // 헌금송
  const API_URL_PRO = "/youtube/playlistItems/&part=snippet,contentDetails&maxResults=1&playlistId=PLCNxYye_JJpZ0jAa8IiITarzB-YF6aYdl";
  // 수요낮예배 〔10:00 AM〕
  // 수요저녁예배 및 기도회 〔07:30 PM〕
  // 금요기도회 〔08:00 PM〕

  const date = new Date();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const opts = { width: "320px", height: "200px", playerVars: { autoplay: 0, controls: 0 } };
  const [isOpen, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [weeks, setWeeks] = useState("");
  const [weekDataOnm, setWeekDataOnm] = useState([]);
  const [weekDataOnb, setWeekDataOnb] = useState([]);
  const [weekDataOns, setWeekDataOns] = useState([]);
  const [weekDataSun, setWeekDataSun] = useState([]);
  const [weekSelectDataOnm, setWeekSelectDataOnm] = useState({ title: "", date: "", videoId: "", thumbnails: "" });
  const [weekSelectDataOnb, setWeekSelectDataOnb] = useState({ title: "", date: "", videoId: "", thumbnails: "" });
  const [weekSelectDataOns, setWeekSelectDataOns] = useState({ title: "", date: "", videoId: "", thumbnails: "" });
  const [liveDatas, setLiveDatas] = useState({ videoId: "", title: "", subTitle: "", thumbnails: "", publishedAt: "" });
  const [praiseChoirDatas, setPraiseChoirDatas] = useState({ videoId: "", title: "", subTitle: "", thumbnails: "", publishedAt: "" });
  const [praiseOfferingDatas, setPraiseOfferingDatas] = useState({ videoId: "", title: "", subTitle: "", thumbnails: "", publishedAt: "" });

  const getLiveData = async () => {
    const api_data = {};
    const splitTitle = "";
    const splitDate = "";
    const videoTitle = "";
    const videoDate = "";
    const mainTitle = "";

    if (week[date.getDay()] === "일") {
      api_data = await axios.get(API_URL_SUN);
      splitTitle = api_data.data.items[0].snippet.title.split('-');
      splitDate = api_data.data.items[0].snippet.publishedAt.split('T');

      videoTitle = splitTitle[1].split('|');
      videoDate = splitDate[0].split('-');
      mainTitle = "성락 라이브 [ " + splitTitle[0] + " ]";
    } else {
      api_data = await axios.get(API_URL_DEF);
      splitTitle = api_data.data.items[0].snippet.title.split('-');
      splitDate = api_data.data.items[0].snippet.publishedAt.split('T');

      videoTitle = splitTitle[1].split('|');
      videoDate = splitDate[0].split('-');
      mainTitle = "성락교회 [ " + splitTitle[0] + " ]";
    }
    setLiveDatas({
      videoId: api_data.data.items[0].snippet.resourceId.videoId,
      title: videoTitle[0],
      subTitle: mainTitle,
      thumbnails: api_data.data.items[0].snippet.thumbnails.high.url,
      publishedAt: videoDate[0] + "년 " + videoDate[1] + "월 " + videoDate[2] + "일"
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

    const dataSun = await axios.get(API_URL_SUN);
    setWeekDataSun(dataSun.data.items);

    const dataPrc = await axios.get(API_URL_PRC);
    let splitTitlePrc = dataPrc.data.items[0].snippet.title.split('|');
    setPraiseChoirDatas({
      title: splitTitlePrc[0],
      date: splitTitlePrc[1],
      videoId: dataPrc.data.items[0].snippet.resourceId.videoId,
      thumbnails: dataPrc.data.items[0].snippet.thumbnails.high.url,
    });

    const dataPro = await axios.get(API_URL_PRO);
    let splitTitlePro = dataPro.data.items[0].snippet.title.split('|');
    setPraiseOfferingDatas({
      title: splitTitlePro[0],
      date: splitTitlePro[1],
      videoId: dataPro.data.items[0].snippet.resourceId.videoId,
      thumbnails: dataPro.data.items[0].snippet.thumbnails.high.url,
    });
  };

  const getWeekData = (day) => {
    weekDataOnm.forEach((doc) => {
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
        return false;
      }
    });

    weekDataOnb.forEach((doc) => {
      let splitDateOnb = doc.snippet.publishedAt.split('T');
      let splitTitleOnb1 = [];
      let splitTitleOnb2 = [];
      if (getDate(splitDateOnb[0]) === day) {
        if (doc.snippet.title !== "Private video") {
          splitTitleOnb1 = doc.snippet.title.split('-');
          splitTitleOnb2 = splitTitleOnb1[1].split('|');
        } else {
          splitTitleOnb2[0] = "";
          splitTitleOnb2[1] = "";
        }
        setWeekSelectDataOnb({
          title: splitTitleOnb2[0],
          date: splitTitleOnb2[1],
          videoId: doc.snippet.resourceId.videoId,
          thumbnails: doc.snippet.thumbnails
        });
        return false;
      }
    });

    if (day === "금") {
      weekDataOns.forEach((doc) => {
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
    setWeeks(week[date.getDay()]);
    getLiveData();
    getOnData();
  }, []);

  useEffect(() => {
    getWeekData(week[date.getDay()]);
  }, [weekDataOnm, weekDataOnb, weekDataOns]);

  return (
    <>
      <Top />
      <div className="container">
        <div className="main_swiper">
          <Swiper
            className="slide_wrap"
            spaceBetween={0}
            slidesPerView={1}
            resistanceRatio={0}
            loop={true}
            autoplay={{
              "delay": 3000,
              "disableOnInteraction": false
            }}
            pagination={true}
          >
            <SwiperSlide>
              <img src="/images/main/banner01.png" alt="메인 슬라이드 01" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/main/banner01.png" alt="메인 슬라이드 01" />
            </SwiperSlide>
          </Swiper>
        </div>

        {(isLoading === false) ? (
          <div className="section pt30">
            <div className="title">{liveDatas.subTitle}</div>
            <div className="movie_wrap">
              <YouTube videoId={liveDatas.videoId} opts={opts} containerClassName="iframe_wrap" />
              <div className="info">

                {/* 공유하기 */}
                <span className="btn_share" onClick={() => setOpen(true)}></span>
                <Sheet
                  isOpen={isOpen}
                  onClose={() => setOpen(false)}
                  snapPoints={[0.4]}
                >
                  <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>
                      <div className="pop_toast">
                        <button className="btn_close" onClick={() => setOpen(false)}></button>
                        <div className="title">공유하기</div>
                        <ul className="sns_list">
                          <li>
                            <a href="#" target="_blank">
                              <img src="../icons/ico_youtube.svg" alt="youtube" />
                              <div className="tit">카카오톡</div>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <img src="../icons/ico_blog.svg" alt="blog" />
                              <div className="tit">SNS</div>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <img src="../icons/ico_instar.svg" alt="instar" />
                              <div className="tit">URL</div>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <img src="../icons/ico_blog.svg" alt="blog" />
                              <div className="tit">블로그</div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Sheet.Content>
                  </Sheet.Container>
                  <Sheet.Backdrop />
                </Sheet>
                {/* 공유하기 */}

                <div className="tit pr25">
                  <a href="#">{liveDatas.title}</a>
                </div>
                <div className="date">{liveDatas.publishedAt}</div>
                <div className="preacher">설교: 김성현 감독</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="loading_box">
            <Loading />
          </div>
        )}

        <div className={(liveDatas.videoId) ? "section pt0" : "section pt25"}>
          <div className="title">요일별 컨텐츠</div>
          <div className="days_wrap">
            <ul className="day_list">
              <li onClick={() => { onInint(); setWeeks("일"); }} className={(weeks == "일") ? "on" : ""}>주일</li>
              <li onClick={() => { getWeekData("월"); setWeeks("월"); }} className={(weeks == "월") ? "on" : ""}>월</li>
              <li onClick={() => { getWeekData("화"); setWeeks("화"); }} className={(weeks == "화") ? "on" : ""}>화</li>
              <li onClick={() => { getWeekData("수"); setWeeks("수"); }} className={(weeks == "수") ? "on" : ""}>수</li>
              <li onClick={() => { getWeekData("목"); setWeeks("목"); }} className={(weeks == "목") ? "on" : ""}>목</li>
              <li onClick={() => { getWeekData("금"); setWeeks("금"); }} className={(weeks == "금") ? "on" : ""}>금</li>
              <li onClick={() => { onInint(); setWeeks("토"); }} className={(weeks == "토") ? "on" : ""}>토</li>
            </ul>
            <ul className="con_list">
              {(weeks === "토") ? (
                <li>
                  <div className="info sat">
                    <img src="/icons/ico_sat.svg" />
                    주일을 준비해 주세요!
                  </div>
                </li>
              ) : (
                (weeks === "일") ?
                  weekDataSun.map((doc) => {
                    let splitTitleSun1 = doc.snippet.title.split('-');
                    let splitTitleSun2 = splitTitleSun1[1].split('|');
                    return (
                      <li key={doc.id}>
                        <div className="movie">
                          {(doc.snippet.thumbnails) ? (
                            <img src={doc.snippet.thumbnails.high.url} />
                          ) : (null)}
                        </div>
                        <div className="info">
                          <div className="tit">
                            {splitTitleSun1[0]}
                          </div>
                          <div className="date">{splitTitleSun2[1]}</div>
                        </div>
                      </li>
                    )
                  }) : (
                    <>
                      <li>
                        <div className="movie">
                          {(weekSelectDataOnm.thumbnails) ? (
                            <img src={weekSelectDataOnm.thumbnails.high.url} />
                          ) : (null)}
                        </div>
                        <div className="info">
                          <div className="tit">
                            {weekSelectDataOnm.title}
                            {/* <span className="tag_up">UP</span> */}
                          </div>
                          <div className="date">{weekSelectDataOnm.date}</div>
                        </div>
                      </li>
                      <li>
                        <div className="movie">
                          {(weekSelectDataOnb.thumbnails) ? (
                            <img src={weekSelectDataOnb.thumbnails.high.url} />
                          ) : (null)}
                        </div>
                        <div className="info">
                          <div className="tit">
                            {weekSelectDataOnb.title}
                            {/* <span className="tag_up">UP</span> */}
                          </div>
                          <div className="date">{weekSelectDataOnb.date}</div>
                        </div>
                      </li>
                      {(weekSelectDataOns.title) ? (
                        <li>
                          <div className="movie">
                            {(weekSelectDataOns.thumbnails) ? (
                              <img src={weekSelectDataOns.thumbnails.high.url} />
                            ) : (null)}
                          </div>
                          <div className="info">
                            <div className="tit">
                              {weekSelectDataOns.title}
                              {/* <span className="tag_up">UP</span> */}
                            </div>
                            <div className="date">{weekSelectDataOnb.date}</div>
                          </div>
                        </li>
                      ) : (null)}
                    </>
                  )
              )}
            </ul>
          </div>
        </div>

        <div className="section quick_wrap">
          <div className="title">빠른접근</div>
          <ul className="quick_menu">
            <li onClick={() => { router.push("/sermonmain"); }}>
              <div className="img"><img src="/icons/ico_quick_sermon.svg" alt="예배" /></div>
              <div className="txt">예배</div>
            </li>
            <li onClick={() => { router.push("/praisemain"); }}>
              <div className="img"><img src="/icons/ico_quick_praise.svg" alt="찬양" /></div>
              <div className="txt">찬양</div>
            </li>
            <li onClick={() => { router.push("/chapter/1/1"); }}>
              <div className="img"><img src="/icons/ico_quick_bible1.svg" alt="성경" /></div>
              <div className="txt">성경</div>
            </li>
            <li onClick={() => { router.push("/onmain"); }}>
              <div className="img"><img src="/icons/ico_quick_onseries.svg" alt="온시리즈" /></div>
              <div className="txt">온시리즈</div>
            </li>
            <li onClick={() => { router.push("/weeklyorder"); }}>
              <div className="img"><img src="/icons/ico_quick_weekly.svg" alt="주보" /></div>
              <div className="txt">주보</div>
            </li>
            <li onClick={() => { router.push("/weeklynews"); }}>
              <div className="img"><img src="/icons/ico_quick_news.svg" alt="교회소식" /></div>
              <div className="txt">교회소식</div>
            </li>
            <li onClick={() => { router.push("/offering"); }}>
              <div className="img"><img src="/icons/ico_quick_offering.svg" alt="헌금안내" /></div>
              <div className="txt">헌금안내</div>
            </li>
          </ul>
        </div>

        <div className="section">
          <div className="title">은혜로운 찬양
            <Link href="/praisemain" >
              <a className="more">전체보기</a>
            </Link>
          </div>
          <Swiper
            className="slide_wrap"
            spaceBetween={10}
            slidesPerView={"auto"}
            resistanceRatio={0}
            pagination={false}
          >
            <SwiperSlide className="movie_wrap">
              <img style={{ width: "100%" }} src={praiseChoirDatas.thumbnails} />
              <div className="info">
                <div className="tit">
                  <a href="#">{praiseChoirDatas.title}</a>
                </div>
                <div className="date">{praiseChoirDatas.date}</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="movie_wrap">
              <img style={{ width: "100%" }} src={praiseOfferingDatas.thumbnails} />
              <div className="info">
                <div className="tit">
                  <a href="#">{praiseOfferingDatas.title}</a>
                </div>
                <div className="date">{praiseOfferingDatas.date}</div>
              </div>
            </SwiperSlide>
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
      <Footer />
    </>
  )
}