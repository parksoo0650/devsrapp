import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import Loading from "../src/components/Loading";
import Share from "../src/components/Share";
import HomeBar from "../src/components/HomeBar";
import useSWR from "swr";
import Popup from "reactjs-popup";
import Image from "next/image";
import shortsMain from "../public/images/shorts_main.jpg";
import onmMain from "../public/images/onm_main.jpeg";
import bwmLogo from "../public/images/bwm_logo.png";
import mdBanner from "../public/icons/md_banner2.png";
import CampToggle from "../src/components/CampToggle/CampToggle";
import CampBanner from "../src/components/CampBanner/CampBanner";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Home = () => {
  const router = useRouter();
  const { data: dataShorts } = useSWR("/api/contents?kind=shorts");
  const { data: dataSermon } = useSWR("/api/contents?kind=sermon");
  const { data: dataPraise } = useSWR("/api/contents?kind=praise");
  const { data: dataOncontents } = useSWR("/api/contents?kind=oncontents");

  const date = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const opts = {
    width: "320px",
    height: "200px",
    playerVars: { autoplay: 1, rel: 0, modestbranding: 1 },
  };
  const [isLoading, setIsLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [weeks, setWeeks] = useState("");
  const [weekDataOnm, setWeekDataOnm] = useState([]);
  const [weekDataOnb, setWeekDataOnb] = useState([]);
  const [weekDataOns, setWeekDataOns] = useState([]);
  const [liveDatas, setLiveDatas] = useState({
    videoId: "",
    title: "",
    thumbnails: "",
    publishedAt: "",
  });
  const [weekSelectDataOnm, setWeekSelectDataOnm] = useState({
    title: "",
    date: "",
    videoId: "",
    thumbnails: "",
  });
  const [weekSelectDataOnb, setWeekSelectDataOnb] = useState({
    title: "",
    date: "",
    videoId: "",
    thumbnails: "",
  });
  const [weekSelectDataOns, setWeekSelectDataOns] = useState({
    title: "",
    date: "",
    videoId: "",
    thumbnails: "",
  });
  const hours = new Date().getHours();

  const getLiveData = async () => {
    const videoTitle = "";
    const videoDateStr = "";
    const thumbnails = "";
    const videoIdStr = "";

    videoTitle = dataSermon?.contents[0]?.name;
    videoDateStr = dataSermon?.contents[0]?.publishedAt;
    videoIdStr = dataSermon?.contents[0]?.videoId;
    thumbnails = dataSermon?.contents[0]?.image;

    if (week[date.getDay()] === "일" && hours > 7 && hours < 13) {
      setIsLive(true);
    }

    setLiveDatas({
      videoId: videoIdStr,
      title: videoTitle,
      thumbnails: thumbnails,
      publishedAt: videoDateStr,
    });

    setIsLoading(false);
  };

  const getOnData = async () => {
    setWeekSelectDataOnm({
      title: dataOncontents?.contents[0]?.name,
      date: dataOncontents?.contents[0]?.publishedAt,
      videoId: dataOncontents?.contents[0]?.videoId,
      thumbnails: dataOncontents?.contents[0]?.image,
    });
  };

  const getWeekData = (day) => {
    dataOncontents?.contents.forEach((doc) => {
      if (getDate(doc.publishedAt) === day) {
        setWeekSelectDataOnm({
          title: doc.name,
          date: doc.publishedAt,
          videoId: doc.videoId,
          thumbnails: doc.image,
        });
      }
    });

    // weekDataOnb.forEach((doc) => {
    //   if (doc.snippet.title !== "Private video") {
    //     let splitDateOnb = doc.snippet.publishedAt.split("T");
    //     let splitTitleOnb1 = [];
    //     if (getDate(splitDateOnb[0]) === day) {
    //       splitTitleOnb1 = doc.snippet.title.split("|");
    //       setWeekSelectDataOnb({
    //         title: splitTitleOnb1[0],
    //         date: splitTitleOnb1[1],
    //         videoId: doc.snippet.resourceId.videoId,
    //         thumbnails: doc.snippet.thumbnails,
    //       });
    //     }
    //     return false;
    //   }
    // });

    // if (day === "금") {
    //   weekDataOns.forEach((doc) => {
    //     if (doc.snippet.title !== "Private video") {
    //       let splitDateOns = doc.snippet.publishedAt.split("T");
    //       if (getDate(splitDateOns[0]) === day) {
    //         let splitTitleOns1 = doc.snippet.title.split("-");
    //         let splitTitleOns2 = splitTitleOns1[1].split("|");
    //         setWeekSelectDataOns({
    //           title: splitTitleOns2[0],
    //           date: splitTitleOns2[1],
    //           videoId: doc.snippet.resourceId.videoId,
    //           thumbnails: doc.snippet.thumbnails,
    //         });
    //       }
    //       return false;
    //     }
    //   });
    // } else {
    //   setWeekSelectDataOns({});
    // }
  };

  // 날짜를 요일로 전환함수
  const getDate = (day) => {
    let dayOfWeek = week[new Date(day).getDay()];
    return dayOfWeek;
  };

  let onDay = date.getDay() == 0 || date.getDay() == 6 ? 1 : date.getDay();

  useEffect(() => {
    setWeeks(week[onDay]);
    getLiveData();
    getOnData();
  }, []);

  useEffect(() => {
    setWeeks(week[onDay]);
    getLiveData();
    getOnData();
  }, [dataSermon, dataOncontents]);

  useEffect(() => {
    getWeekData(week[onDay]);
  }, [weekDataOnm, weekDataOnb, weekDataOns]);

  return (
    <>
      <header>
        <div className="inner">
          <h1
            className="logo"
            onClick={() => {
              router.push("/");
            }}
          >
            <img src="../images/logo.svg" alt="성락교회" />
          </h1>
          {isLive && (
            <div className="live">
              라이브 <img src="/icons/ico_live.svg" alt="라이브" />
            </div>
          )}
        </div>
      </header>
      <div className="container">
        {isLoading === false ? (
          <div className="section pt0">
            <div className="movie_wrap">
              <div
                onClick={() => {
                  router.push(
                    `/sermondetail?vid=${liveDatas.videoId}&vtit=${liveDatas.title}&vdate=${liveDatas.publishedAt}`,
                    "/sermondetail"
                  );
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${liveDatas?.thumbnails}/public`}
                />
              </div>
              <div className="info">
                <Share
                  title={liveDatas.title}
                  thum="/images/kakao_def_new.jpg"
                  vid={liveDatas.videoId}
                />
                <div
                  className="tit pr25"
                  onClick={() => {
                    router.push(
                      `/sermondetail?vid=${liveDatas.videoId}&vtit=${liveDatas.title}&vdate=${liveDatas.publishedAt}`,
                      "/sermondetail"
                    );
                  }}
                >
                  <a href="#">{liveDatas.title}</a>
                </div>
                <div className="date">{liveDatas.publishedAt}</div>
                {week[date.getDay()] === "수" &&
                hours > 10 &&
                hours < 13 ? null : (
                  <div className="preacher">설교: 김성현 목사</div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="loading_box">
            <Loading />
          </div>
        )}

        <CampBanner />

        <div className={liveDatas.videoId ? "section pt0" : "section pt25"}>
          <div className="title">주중 콘텐츠</div>
          <div className="days_wrap">
            <ul className="day_list">
              <li
                onClick={() => {
                  getWeekData("월");
                  setWeeks("월");
                }}
                className={weeks == "월" ? "on" : ""}
              >
                월요일
              </li>
              <li
                onClick={() => {
                  getWeekData("화");
                  setWeeks("화");
                }}
                className={weeks == "화" ? "on" : ""}
              >
                화요일
              </li>
              <li
                onClick={() => {
                  getWeekData("수");
                  setWeeks("수");
                }}
                className={weeks == "수" ? "on" : ""}
              >
                수요일
              </li>
              <li
                onClick={() => {
                  getWeekData("목");
                  setWeeks("목");
                }}
                className={weeks == "목" ? "on" : ""}
              >
                목요일
              </li>
              <li
                onClick={() => {
                  getWeekData("금");
                  setWeeks("금");
                }}
                className={weeks == "금" ? "on" : ""}
              >
                금요일
              </li>
            </ul>
            <ul className="con_list">
              {weekSelectDataOnm.title && (
                <li
                  onClick={() => {
                    router.push(
                      `/onprayerdetail?vid=${weekSelectDataOnm.videoId}&vtit=${weekSelectDataOnm.title}&vdate=${weekSelectDataOnm.date}&kind=onm`,
                      "/onprayerdetail"
                    );
                  }}
                >
                  <div className="movie">
                    <Image src={onmMain} placeholder="blur" quality={50} />
                  </div>
                  <div className="info">
                    <div className="tit">{weekSelectDataOnm.title}</div>
                    <div className="date">{weekSelectDataOnm.date}</div>
                  </div>
                </li>
              )}
              {weeks != "수" && weekSelectDataOnb.title && (
                <li
                  onClick={() => {
                    router.push(
                      `/onbibledetail?vid=${weekSelectDataOnb.videoId}&vtit=${weekSelectDataOnb.title}&vdate=${weekSelectDataOnb.date}&kind=onb`,
                      "/onbibledetail"
                    );
                  }}
                >
                  <div className="movie">
                    {weekSelectDataOnb.thumbnails ? (
                      <img src={weekSelectDataOnb.thumbnails.medium.url} />
                    ) : null}
                  </div>
                  <div className="info">
                    <div className="tit">{weekSelectDataOnb.title}</div>
                    <div className="date">
                      {weekSelectDataOnb.date.substring(0, 10)}
                    </div>
                  </div>
                </li>
              )}
              {weekSelectDataOns.title && (
                <li
                  onClick={() => {
                    router.push(
                      `/onthreedetail?vid=${weekSelectDataOns.videoId}&vtit=${weekSelectDataOns.title}&vdate=${weekSelectDataOns.date}&kind=ont`,
                      "/onthreedetail"
                    );
                  }}
                >
                  <div className="movie">
                    {weekSelectDataOns.thumbnails ? (
                      <img src={weekSelectDataOns.thumbnails.medium.url} />
                    ) : null}
                  </div>
                  <div className="info">
                    <div className="tit">{weekSelectDataOns.title}</div>
                    <div className="date">
                      {weekSelectDataOns.date.substring(0, 10)}
                    </div>
                  </div>
                </li>
              )}
              {weeks == "월" && (
                <Popup
                  trigger={
                    <li>
                      <div className="movie">
                        <Image
                          src={shortsMain}
                          placeholder="blur"
                          quality={50}
                        />
                      </div>
                      <div className="info">
                        <div className="tit">
                          {dataShorts?.contents[0]?.name}
                        </div>
                        <div className="date"></div>
                      </div>
                    </li>
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
                          title={dataShorts?.contents[0]?.name}
                          thum={`/images/kakao_shorts.jpg`}
                          vid={dataShorts?.contents[0]?.videoId}
                          type="white"
                        />
                      </div>
                      <div className="content">
                        <YouTube
                          videoId={dataShorts?.contents[0]?.videoId}
                          opts={opts}
                          containerClassName="iframe_wrap"
                        />
                      </div>
                    </div>
                  )}
                </Popup>
              )}
            </ul>
          </div>
        </div>

        <div className="section quick_wrap">
          <ul className="quick_menu">
            <li
              onClick={() => {
                router.push("/sermonmain");
              }}
            >
              <div className="img">
                <img src="/icons/ico_sermon_new.svg" alt="예배" />
              </div>
              <div className="txt">예배</div>
            </li>
            <li
              onClick={() => {
                router.push("/praisemain");
              }}
            >
              <div className="img">
                <img src="/icons/ico_quick_praise_new.svg" alt="찬양" />
              </div>
              <div className="txt">찬양</div>
            </li>
            <li
              onClick={() => {
                router.push("/returnMain");
              }}
            >
              <div className="img">
                <img src="/icons/ico_return.svg" alt="환언특강" />
              </div>
              <div className="txt">환언특강</div>
            </li>
            <li
              onClick={() => {
                router.push("/onmain");
              }}
            >
              <div className="img">
                <img src="/icons/ico_quick_onseries.svg" alt="온시리즈" />
              </div>
              <div className="txt">온시리즈</div>
            </li>
            <li
              onClick={() => {
                router.push("/faith");
              }}
            >
              <div className="img">
                <img src="/icons/ico_shorts.svg" alt="1분은혜" />
              </div>
              <div className="txt">1분은혜</div>
            </li>
            <li
              onClick={() => {
                router.push("/weekly");
              }}
            >
              <div className="img">
                <img src="/icons/ico_quick_weekly2.svg" alt="주보" />
              </div>
              <div className="txt">주보</div>
            </li>
            {/* 
            <li onClick={() => { router.push("/"); }}>
              <div className="img"></div>
              <div className="txt">교회소식</div>
            </li> */}
            <li
              onClick={() => {
                router.push("/offering");
              }}
            >
              <div className="img">
                <img src="/icons/ico_quick_offering.svg" alt="헌금안내" />
              </div>
              <div className="txt">헌금안내</div>
            </li>
          </ul>
        </div>

        <div className="mdbanner">
          <Image src={mdBanner} placeholder="blur" quality={100} />
        </div>

        <div className="section">
          <div className="title">은혜로운 찬양</div>
          <Link href="/praisemain">
            <a className="more">전체보기</a>
          </Link>
          <Swiper
            className="slide_wrap"
            spaceBetween={10}
            slidesPerView={"auto"}
            resistanceRatio={0}
            pagination={false}
          >
            {dataPraise?.contents.map((doc, i) => {
              return (
                <SwiperSlide className="movie_wrap" key={doc.id}>
                  <div
                    onClick={() => {
                      router.push(
                        `/praisedetail?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=p11`,
                        "/praisedetail"
                      );
                    }}
                  >
                    <div className="movie_thumb">
                      <img
                        style={{ width: "100%" }}
                        src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${doc.image}/public`}
                      />
                    </div>
                    <div className="info">
                      <div className="tit">
                        <a href="#">{doc.name}</a>
                      </div>
                      <div className="date">{doc.publishedAt}</div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
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
              <Link href="https://www.youtube.com/channel/UCkrWb-HCk3fA7szpbmLHTmw">
                <a>
                  <div className="img">
                    <Image src={bwmLogo} placeholder="blur" quality={100} />
                  </div>
                  <div className="txt">청년부</div>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="https://www.youtube.com/channel/UCW6bF9L0ZK__Tlwl19B0FYQ">
                <a>
                  <div className="img">
                    <img src="../icons/thumb_cba.svg" alt="대학부" />
                  </div>
                  <div className="txt">대학부</div>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="https://www.youtube.com/channel/UCcD3GeLh6aBwBN_A5yr4pEg">
                <a>
                  <div className="img">
                    <img src="../icons/thumb_high.svg" alt="고등부" />
                  </div>
                  <div className="txt">고등부</div>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="https://www.youtube.com/channel/UCDzjhPXk9IypRuCopoFDvlg">
                <a>
                  <div className="img">
                    <img src="../icons/thumb_secondary.svg" alt="중등부" />
                  </div>
                  <div className="txt">중등부</div>
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="https://www.youtube.com/channel/UCVZgyTaNK1q-CKM481MO35A">
                <a>
                  <div className="img">
                    <img src="../icons/thumb_elementary.svg" alt="유치부" />
                  </div>
                  <div className="txt">어린이부</div>
                </a>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <HomeBar />
      <CampToggle />
    </>
  );
};

export default Home;
