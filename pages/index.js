import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sheet from 'react-modal-sheet';
import YouTube from 'react-youtube';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination"
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Home() {
  const router = useRouter();
  const YOUTUBE_URL = "https://www.googleapis.com/youtube/v3";
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_22_SERVICE;
  const API_URL = YOUTUBE_URL + "/playlistItems?part=snippet,contentDetails&maxResults=1&playlistId=" + PLAYLIST_ID + "&key=" + API_KEY;

  const PLAYLIST_ID_15_PRAISE = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_15_PRAISE;
  const API_URL_15_PRAISE = YOUTUBE_URL + "/playlistItems?part=snippet,contentDetails&maxResults=5&playlistId=" + PLAYLIST_ID_15_PRAISE + "&key=" + API_KEY;

  const PLAYLIST_ID_JESUSROAD = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_JESUSROAD;
  const API_URL_JESUSROAD = YOUTUBE_URL + "/playlistItems?part=snippet,contentDetails&maxResults=5&playlistId=" + PLAYLIST_ID_JESUSROAD + "&key=" + API_KEY;

  const [datas, setDatas] = useState({
    videoId:"",
    title:"",
    thumbnails:"",
    publishedAt:""
  });

  const [praiseDatas, setPraiseDatas] = useState({
    videoId:"",
    title:"",
    thumbnails:"",
    publishedAt:""
  });

  const [jesusroadDatas, setJesusroadDatas] = useState({
    videoId:"",
    title:"",
    thumbnails:"",
    publishedAt:""
  });

  const [weeks, setWeeks] = useState("");
  let [isOpen, setOpen] = useState(false);

  const getData = async () => {
    const api_data = await axios.get(API_URL);
    const splitTitle = api_data.data.items[0].snippet.title.split('-');
    const videoTitle = splitTitle[1].split('|');

    setDatas({
      videoId:api_data.data.items[0].snippet.resourceId.videoId,
      title:videoTitle[0],
      thumbnails:api_data.data.items[0].snippet.thumbnails.default.url,
      publishedAt:api_data.data.items[0].snippet.publishedAt
    });
    const praise_api_data = await axios.get(API_URL_15_PRAISE);
    setPraiseDatas({
      videoId:praise_api_data.data.items[0].snippet.resourceId.videoId,
      title:praise_api_data.data.items[0].snippet.title,
      thumbnails:praise_api_data.data.items[0].snippet.thumbnails.default.url,
      publishedAt:praise_api_data.data.items[0].snippet.publishedAt
    });
    const jesusroad_api_data = await axios.get(API_URL_JESUSROAD);
    setJesusroadDatas({
      videoId:jesusroad_api_data.data.items[0].snippet.resourceId.videoId,
      title:jesusroad_api_data.data.items[0].snippet.title,
      thumbnails:jesusroad_api_data.data.items[0].snippet.thumbnails.default.url,
      publishedAt:jesusroad_api_data.data.items[0].snippet.publishedAt
    });
  };

  useEffect(() => {
    let date = new Date();
    let week = ['일', '월', '화', '수', '목', '금', '토'];
    setWeeks(week[date.getDay()]);
    getData();
  }, []);

  const opts = {
    width: "320px",
    height: "200px",
    playerVars: {
      autoplay: 0,
      controls: 0,
    },
  };

  return (
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

      <div className="section">
        <div className="title">성락 라이브 [주일 3부 예배]</div>
        <div className="movie_wrap">
          <YouTube videoId={datas.videoId} opts={opts} containerClassName="iframe_wrap" />
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

            <div className="tit">
              <a href="#">{datas.title}</a>
            </div>
            <div className="date">{datas.publishedAt}</div>
            <div className="preacher">설교: 김성현 감독</div>
          </div>
        </div>
      </div>

      <div className="section pt0">
        <div className="title">요일별 컨텐츠</div>
        <div className="days_wrap">
          <ul className="day_list">
            <li onClick={() => { setWeeks("일"); }} className={(weeks == "일") ? "on" : ""}>주일</li>
            <li onClick={() => { setWeeks("월"); }} className={(weeks == "월") ? "on" : ""}>월</li>
            <li onClick={() => { setWeeks("화"); }} className={(weeks == "화") ? "on" : ""}>화</li>
            <li onClick={() => { setWeeks("수"); }} className={(weeks == "수") ? "on" : ""}>수</li>
            <li onClick={() => { setWeeks("목"); }} className={(weeks == "목") ? "on" : ""}>목</li>
            <li onClick={() => { setWeeks("금"); }} className={(weeks == "금") ? "on" : ""}>금</li>
            <li onClick={() => { setWeeks("토"); }} className={(weeks == "토") ? "on" : ""}>토</li>
          </ul>
          <ul className="con_list">
            <li>
              <div className="movie">
                {/* <YouTube videoId={datas} opts={opts} containerClassName="iframe_wrap" /> */}
              </div>
              <div className="info">
                <div className="tit">환언베뢰아 특강 <span className="tag_up">UP</span></div>
                <div className="date">2021년 11월 05일</div>
              </div>
            </li>
            <li>
              <div className="movie">
                {/* <YouTube videoId={datas} opts={opts} containerClassName="iframe_wrap" /> */}
              </div>
              <div className="info">
                <div className="tit">환언베뢰아 특강 <span className="tag_up">UP</span></div>
                <div className="date">2021년 11월 05일</div>
              </div>
            </li>
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
          <li onClick={() => { router.push("/weeklyorder"); }}>
            <div className="img"><img src="/icons/ico_quick_weekly.svg" alt="주보" /></div>
            <div className="txt">주보</div>
          </li>
          <li onClick={() => { router.push("/onmain"); }}>
            <div className="img"><img src="/icons/ico_quick_onseries.svg" alt="온시리즈" /></div>
            <div className="txt">온시리즈</div>
          </li>
          <li onClick={() => { router.push("/chapter/1_1"); }}>
            <div className="img"><img src="/icons/ico_quick_bible.svg" alt="성경" /></div>
            <div className="txt">성경</div>
          </li>
          <li onClick={() => { router.push("/hymnmain"); }}>
            <div className="img"><img src="/icons/ico_quick_hymn.svg" alt="찬송가" /></div>
            <div className="txt">찬송가</div>
          </li>
          <li onClick={() => { router.push("/offering"); }}>
            <div className="img"><img src="/icons/ico_quick_offering.svg" alt="헌금안내" /></div>
            <div className="txt">헌금안내</div>
          </li>
          <li onClick={() => { router.push("/weeklynews"); }}>
            <div className="img"><img src="/icons/ico_quick_news.svg" alt="교회소식" /></div>
            <div className="txt">교회소식</div>
          </li>
        </ul>
      </div>

      <div className="section">
        <div className="title">은혜로운 연합 예배 찬양 <a href="#" className="more">전체보기</a></div>
        <Swiper
          className="slide_wrap"
          spaceBetween={10}
          slidesPerView={"auto"}
          resistanceRatio={0}
          pagination={false}
        >
          <SwiperSlide className="movie_wrap">
            {/* <YouTube videoId={datas} opts={opts} containerClassName="iframe_wrap" /> */}
            <img style={{ width: "100%" }} src={praiseDatas.thumbnails} />
            <div className="info">
              <div className="tit">
                <a href="#">주일 3부 예배 (건축자들이 버린 머릿돌)</a>
              </div>
              <div className="date">2021년 11월 05일</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="movie_wrap">
            {/* <YouTube videoId={datas} opts={opts} containerClassName="iframe_wrap" /> */}
            <img style={{ width: "100%" }} src={praiseDatas.thumbnails} />
            <div className="info">
              <div className="tit">
                <a href="#">주일 3부 예배 (건축자들이 버린 머릿돌)</a>
              </div>
              <div className="date">2021년 11월 05일</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="section pt0">
        <div className="title">예수로 찬양 <a href="#" className="more">전체보기</a></div>
        <Swiper
          className="slide_wrap"
          spaceBetween={10}
          slidesPerView={"auto"}
          resistanceRatio={0}
          pagination={false}
        >
          <SwiperSlide className="movie_wrap">
            {/* <YouTube videoId={datas} opts={opts} containerClassName="iframe_wrap" /> */}
            <img style={{ width: "100%" }} src={jesusroadDatas.thumbnails} />
            <div className="info">
              <div className="tit">
                <a href="#">주일 3부 예배 (건축자들이 버린 머릿돌)</a>
              </div>
              <div className="date">2021년 11월 05일</div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="movie_wrap">
            {/* <YouTube videoId={datas} opts={opts} containerClassName="iframe_wrap" /> */}
            <img style={{ width: "100%" }} src={jesusroadDatas.thumbnails} />
            <div className="info">
              <div className="tit">
                <a href="#">주일 3부 예배 (건축자들이 버린 머릿돌)</a>
              </div>
              <div className="date">2021년 11월 05일</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="section pt0">
        <div className="title">성락교회 미래세대 <a href="#" className="more">전체보기</a></div>
        <Swiper
          className="future_generation"
          spaceBetween={7}
          slidesPerView={"auto"}
          resistanceRatio={0}
          pagination={false}
        >
          <SwiperSlide>
            <div className="img"><img src="../icons/thumb_bwm.svg" alt="청년부" /></div>
            <div className="txt">청년부</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img"><img src="../icons/thumb_cba.svg" alt="대학부" /></div>
            <div className="txt">대학부</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img"><img src="../icons/thumb_high.svg" alt="고등부" /></div>
            <div className="txt">고등부</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img"><img src="../icons/thumb_secondary.svg" alt="중등부" /></div>
            <div className="txt">중등부</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img"><img src="../icons/thumb_elementary.svg" alt="유치부" /></div>
            <div className="txt">유치부</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}