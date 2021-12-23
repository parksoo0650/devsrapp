import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sheet from 'react-modal-sheet';
import YouTube from 'react-youtube';

export default function Praisemain() {

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
      width: "100%",
      height: "100%",
      playerVars: {
        autoplay: 0,
        controls: 0,
      },
    };

    return (
        <div class="sub_container">
            <div class="top_area">
                <div class="top_title">예배</div>
                <div class="location_wrap">
                    <div class="location">
                        <span class="cate">예배</span>
                        <span class="now">주일 1부 예배</span>
                    </div>
                    <ul class="menu_list">
                        <li>
                            <a href="#">주일 1부 예배</a>
                        </li>
                        <li>
                            <a href="#">주일 3부 예배</a>
                        </li>
                        <li>
                            <a href="#">주일 연합 예배</a>
                        </li>
                        <li>
                            <a href="#">수요 오전 예배</a>
                        </li>
                        <li>
                            <a href="#">수요 오후 예배</a>
                        </li>
                        <li>
                            <a href="#">금요 환언 특강</a>
                        </li>
                    </ul>
                </div>        
            </div>  

            <div class="section">
                <div class="movie_detail">
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

                        <span class="tag">주일 1부 예배</span>
                        <div class="tit">
                            <a href="#">건축자들이 버린 머릿돌</a>
                        </div>
                        <div class="date">2021. 11. 05</div>
                    </div>
                    <YouTube videoId={datas} opts={opts} containerClassName="iframe_wrap" />
                </div>
            </div>
            
            <div class="section bg_gray">
                <div class="title"><small>지난 예배 다시보기</small> <a href="#" class="more">필터</a></div>
                <ul class="sermon_list">
                    <li onClick={() => { router.push("/sermondetail"); }}>
                        <div class="tit">우리의 소망은 부활이다</div>
                        <div class="date">2021. 11. 05</div>
                    </li>
                    <li onClick={() => { router.push("/sermondetail"); }}>
                        <div class="tit">우리의 소망은 부활이다</div>
                        <div class="date">2021. 11. 05</div>
                    </li>
                    <li onClick={() => { router.push("/sermondetail"); }}>
                        <div class="tit">우리의 소망은 부활이다</div>
                        <div class="date">2021. 11. 05</div>
                    </li>
                    <li onClick={() => { router.push("/sermondetail"); }}>
                        <div class="tit">우리의 소망은 부활이다</div>
                        <div class="date">2021. 11. 05</div>
                    </li>
                </ul>
            </div>

        </div>
    );
}