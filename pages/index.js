import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sheet from 'react-modal-sheet';
import YouTube from 'react-youtube';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


export default function Home() {

  const YOUTUBE_URL = "https://www.googleapis.com/youtube/v3";
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_21_SERVICE;
  const API_URL = YOUTUBE_URL + "/playlistItems?part=snippet,contentDetails&maxResults=10&playlistId=" + PLAYLIST_ID + "&key=" + API_KEY;

  const [datas, setDatas] = useState([]);

  const getData = async () => {
    const api_data = await axios.get(API_URL);
    setDatas(api_data.data.items[0].snippet.resourceId.videoId);
  };

  useEffect(() => {
    getData();
  }, []);

  const router = useRouter();

  let [isOpen, setOpen] = useState(false);

  const opts = {
    width: "320px",
    height: "200px",
    playerVars: {
      autoplay: 0,
      controls: 0,
    },
  };

  return (
    <div class="container">
      <div className="main_swiper">
          <Swiper
            className="slide_wrap"
            spaceBetween={0}
            slidesPerView={1}
            resistanceRatio={0}
            loop={true}
            autoplay={{
              "delay": 4000,
              "disableOnInteraction": false
            }}
          >
            <SwiperSlide>
              <img src="/images/main/banner01.png" alt="메인 슬라이드 01" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/main/banner01.png" alt="메인 슬라이드 01" />
            </SwiperSlide>
          </Swiper>
      </div>

      <div class="section">
				<div class="title">실시간 라이브</div>
				<div class="movie_wrap">
        	<YouTube videoId={datas} opts={opts} containerClassName="iframe_wrap" />
					<div class="info">

            {/* 공유하기 */}
						<span class="btn_share" onClick={() => setOpen(true)}></span>
            <Sheet
              isOpen={isOpen}
              onClose={() => setOpen(false)}
              snapPoints={[0.4]}
            >
              <Sheet.Container>
                <Sheet.Header />
                <Sheet.Content>
                  <div class="pop_toast">
                    <button class="btn_close" onClick={() => setOpen(false)}></button>
                    <div class="title">공유하기</div>
                    <ul class="sns_list">
                      <li>
                          <a href="#" target="_blank">
                            <img src="../icons/ico_youtube.svg" alt="youtube" />
                            <div class="tit">카카오톡</div>
                          </a>
                      </li>
                      <li>
                          <a href="#" target="_blank">
                            <img src="../icons/ico_blog.svg" alt="blog" />
                            <div class="tit">SNS</div>
                          </a>
                      </li>
                      <li>
                          <a href="#" target="_blank">
                            <img src="../icons/ico_instar.svg" alt="instar" />
                            <div class="tit">URL</div>
                          </a>
                      </li>
                      <li>
                          <a href="#" target="_blank">
                            <img src="../icons/ico_blog.svg" alt="blog" />
                            <div class="tit">블로그</div>
                          </a>
                      </li>
                    </ul>
                  </div>
                </Sheet.Content>
              </Sheet.Container>
              <Sheet.Backdrop />
            </Sheet>
            {/* 공유하기 */}

						<div class="tit">
							<a href="#">주일 3부 예배 (건축자들이 버린 머릿돌)</a>
						</div>
						<div class="date">2021. 11. 05</div>
					</div>
				</div>
			</div>

			<div class="section pt0">
				<div class="title">요일별 컨텐츠</div>
        <div class="days_wrap">
          <ul class="day_list">
            <li class="on">주일</li>
            <li>월</li>
            <li>화</li>
            <li>수</li>
            <li>목</li>
            <li>금</li>
            <li>토</li>
          </ul>
          <ul class="con_list">
            <li>
              <div class="movie">
                <YouTube videoId={datas} opts={opts} containerClassName="iframe_wrap" />
              </div>
              <div class="info">
                <div class="tit">환원베뢰아 특강 <span class="tag_up">UP</span></div>
                <div class="date">2021. 11. 20</div>
              </div>
            </li>
            <li>
              <div class="movie">
                <YouTube videoId={datas} opts={opts} containerClassName="iframe_wrap" />
              </div>
              <div class="info">
                <div class="tit">환원베뢰아 특강 <span class="tag_up">UP</span></div>
                <div class="date">2021. 11. 20</div>
              </div>
            </li>
          </ul>
        </div>
			</div>

			<div class="section quick_wrap">
				<div class="title">빠른접근</div>
        <ul class="quick_menu">
          <li onClick={() => { router.push("/sermonmain"); }}>
            <div class="img"></div>
            <div class="txt">예배</div>
          </li>
          <li onClick={() => { router.push("/praisemain"); }}>
            <div class="img"></div>
            <div class="txt">찬양</div>
          </li>
          <li onClick={() => { router.push("/weeklymain"); }}>
            <div class="img"></div>
            <div class="txt">주보</div>
          </li>
          <li onClick={() => { router.push("/onsub"); }}>
            <div class="img"></div>
            <div class="txt">온시리즈</div>
          </li>
          <li onClick={() => { router.push("/biblemain"); }}>
            <div class="img"></div>
            <div class="txt">성경</div>
          </li>
          <li onClick={() => { router.push("/praiselist"); }}>
            <div class="img"></div>
            <div class="txt">찬송가</div>
          </li>
          <li>
            <div class="img"></div>
            <div class="txt">헌금안내</div>
          </li>
          <li>
            <div class="img"></div>
            <div class="txt">교회소식</div>
          </li>
        </ul>
			</div>

      <div class="section">
        <div class="title">은혜로운 연합 예배 찬양 <a href="#" class="more">전체보기</a></div>
          <Swiper
            className="slide_wrap"
            spaceBetween={10}
            slidesPerView={"auto"}
            resistanceRatio={0}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="movie_wrap">
              <YouTube videoId={datas} opts={opts} containerClassName="iframe_wrap" />
              <div class="info">
                <div class="tit">
                  <a href="#">주일 3부 예배 (건축자들이 버린 머릿돌)</a>
                </div>
                <div class="date">2021. 11. 05</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="movie_wrap">
              <YouTube videoId={datas} opts={opts} containerClassName="iframe_wrap" />
              <div class="info">
                <div class="tit">
                  <a href="#">주일 3부 예배 (건축자들이 버린 머릿돌)</a>
                </div>
                <div class="date">2021. 11. 05</div>
              </div>
            </SwiperSlide>
          </Swiper>
      </div>

      <div class="section pt0">
        <div class="title">예수로 찬양 <a href="#" class="more">전체보기</a></div>
          <Swiper
            className="slide_wrap"
            spaceBetween={10}
            slidesPerView={"auto"}
            resistanceRatio={0}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="movie_wrap">
              <YouTube videoId={datas} opts={opts} containerClassName="iframe_wrap" />
              <div class="info">
                <div class="tit">
                  <a href="#">주일 3부 예배 (건축자들이 버린 머릿돌)</a>
                </div>
                <div class="date">2021. 11. 05</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="movie_wrap">
              <YouTube videoId={datas} opts={opts} containerClassName="iframe_wrap" />
              <div class="info">
                <div class="tit">
                  <a href="#">주일 3부 예배 (건축자들이 버린 머릿돌)</a>
                </div>
                <div class="date">2021. 11. 05</div>
              </div>
            </SwiperSlide>
          </Swiper>
      </div>

      <div class="section pt0">
        <div class="title">성락교회 미래세대 <a href="#" class="more">전체보기</a></div>
          <Swiper
              className="future_generation"
              spaceBetween={7}
              slidesPerView={"auto"}
              resistanceRatio={0}
              pagination={{ clickable: true }}
          >
              <SwiperSlide>
                <div class="img"></div>
                <div class="txt">청년부</div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="img"></div>
                <div class="txt">대학부</div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="img"></div>
                <div class="txt">고등부</div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="img"></div>
                <div class="txt">중등부</div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="img"></div>
                <div class="txt">유치부</div>
              </SwiperSlide>
          </Swiper>
      </div>

      <div style={{ width: "100%", display: "none", marginTop: "10px", marginBottom: "10px" }}>
        <div onClick={() => { router.push("/csmain"); }} style={{ backgroundColor: "#eee", marginRight: "10px", flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", padding: "10px" }}>
          <div style={{ fontSize: "14px", color: "#333", fontWeight: "700", marginBottom: "5px" }} >더보기</div>
        </div>
      </div>

      <div style={{ width: "100%", display: "none", justifyContent: "center", marginTop: "10px" }}>
        <YouTube videoId={datas} opts={opts} />
      </div>
    </div>
  )
}