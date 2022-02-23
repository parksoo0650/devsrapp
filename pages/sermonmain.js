import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sheet from 'react-modal-sheet';
import YouTube from 'react-youtube';

export default function Sermonmain() {
    const router = useRouter();
    // 주일설교
    const API_URL_DEF = "/youtube/playlistItems/&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpZXsl4cQEjzBWRUFSCb2MCE";
    // 주일예배 1부 〔06:30 AM〕 · 3부 〔10:30 AM
    const API_URL_SUN = "/youtube/playlistItems/&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpYLa-0kkDLhDAw-Rzq3keT6";
    // 환언특강 〔화 07:30 PM〕
    const API_URL_TUE = "/youtube/playlistItems/&part=snippet,contentDetails&maxResults=11&playlistId=PLCNxYye_JJpZRY6ARfjlBXKScy-QqfXnj";

    const [mainData, setMainData] = useState({ videoId: "", title: "", thumbnails: "", publishedAt: "" });
    const [listData, setListData] = useState([]);
    const [sermon, setSermon] = useState("def");
    const [isOpen, setIsOpen] = useState(false);
    const [isDrop, setIsDrop] = useState(false);
    const [isFilter, setIsFilter] = useState(false);

    const getData = async (sermon) => {
        if (sermon === "sun") {
            const apiData = await axios.get(API_URL_SUN);
            const splitTitle = apiData.data.items[0].snippet.title.split('-');
            const splitDate = apiData.data.items[0].snippet.publishedAt.split('T');
            const videoTitle = splitTitle[1].split('|');
            const videoDate = splitDate[0].split('-');

            setMainData({
                videoId: apiData.data.items[0].snippet.resourceId.videoId,
                title: videoTitle[0],
                thumbnails: apiData.data.items[0].snippet.thumbnails.medium.url,
                publishedAt: videoDate[0] + "년 " + videoDate[1] + "월 " + videoDate[2] + "일"
            });

            setListData(apiData.data.items);
        } else if (sermon === "tue") {
            const apiData = await axios.get(API_URL_TUE);
            const splitDate = apiData.data.items[0].snippet.publishedAt.split('T');
            const videoTitle = apiData.data.items[0].snippet.title;
            const videoDate = splitDate[0].split('-');

            setMainData({
                videoId: apiData.data.items[0].snippet.resourceId.videoId,
                title: videoTitle[0],
                thumbnails: apiData.data.items[0].snippet.thumbnails.medium.url,
                publishedAt: videoDate[0] + "년 " + videoDate[1] + "월 " + videoDate[2] + "일"
            });

            setListData(apiData.data.items);
        } else if (sermon === "def") {
            const apiData = await axios.get(API_URL_DEF);
            const splitTitle = apiData.data.items[0].snippet.title.split('-');
            const splitDate = apiData.data.items[0].snippet.publishedAt.split('T');
            const videoTitle = splitTitle[1].split('|');
            const videoDate = splitDate[0].split('-');

            setMainData({
                videoId: apiData.data.items[0].snippet.resourceId.videoId,
                title: videoTitle[0],
                thumbnails: apiData.data.items[0].snippet.thumbnails.medium.url,
                publishedAt: videoDate[0] + "년 " + videoDate[1] + "월 " + videoDate[2] + "일"
            });

            setListData(apiData.data.items);
        }
    };

    useEffect(() => {
        getData(sermon);
    }, [sermon]);

    const opts = {
        width: "320px",
        height: "200px",
        playerVars: {
            autoplay: 0,
            controls: 0,
        },
    };

    return (
        <div className="sub_container">
            <div className="top_area">
                <span className="btn_prev"></span>
                <div className="top_title">예배</div>
                <div className={isDrop ? "tab_wrap active" : "tab_wrap"}>
                    <div className="tab_bar">
                        전체보기
                        <span className="btn_close" onClick={() => setIsDrop(false)}></span>
                    </div>
                    <ul className="tab_area">
                        <li onClick={() => { setSermon("def"); }} className={(sermon == "def") ? "on" : ""}>주일설교</li>
                        <li onClick={() => { setSermon("sun"); }} className={(sermon == "sun") ? "on" : ""}>1,3부 예배</li>
                        <li onClick={() => { setSermon("tue"); }} className={(sermon == "tue") ? "on" : ""}>환언특강</li>
                    </ul>
                    <span className="btn_more" onClick={() => setIsDrop(true)}></span>
                </div>
            </div>
            {/* 드롭다운 메뉴가 활성화 되면 display:block */}
            <div className="shadow"></div>
            <style jsx>
                {`
            .shadow {
                display: ${isDrop ? "block" : "none"};
            }
            `}
            </style>

            <div className="section pt30">
                <div className="title">최신 컨텐츠</div>
                <div className="movie_wrap">
                    <YouTube videoId={mainData.videoId} opts={opts} containerClassName="iframe_wrap" />
                    <div className="info">

                        {/* 공유하기 */}
                        <span className="btn_share" onClick={() => setIsOpen(true)}></span>
                        <Sheet
                            isOpen={isOpen}
                            onClose={() => setIsOpen(false)}
                            snapPoints={[0.4]}
                        >
                            <Sheet.Container>
                                <Sheet.Header />
                                <Sheet.Content>
                                    <div className="pop_toast">
                                        <button className="btn_close" onClick={() => setIsOpen(false)}></button>
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

                        <div className="tit" onClick={() => { router.push("/sermondetail"); }}>{mainData.title}</div>
                        <div className="date">{mainData.publishedAt}</div>
                        <div className="preacher">설교 : 김성현 감독</div>
                    </div>
                </div>
            </div>

            <div className="section pt0">
                <div className="title">지난 주일설교 다시보기
                    <span className="filter" onClick={() => setIsFilter(true)}>필터</span>
                    {/* 필터 */}
                    <div className={isFilter ? "layer_filter on" : "layer_filter"}>
                        <button className="btn_close" onClick={() => setIsFilter(false)}></button>
                        <div className="title">필터 선택</div>
                        <ul className="filter_list">
                            <li className="on">콘텐츠 전체보기</li>
                            <li>3부예배</li>
                            <li>3부예배</li>
                            <li>3부예배</li>
                        </ul>
                        <div className="btn_area">
                            <span className="btn_reset">초기화</span>
                            <span className="btn_select">선택</span>
                        </div>
                    </div>
                    {/* 필터 */}
                </div>
                <ul className="sermon_list">
                    {
                        listData.map((doc, i) => {
                            console.log()
                            let splitListDate = doc.snippet.publishedAt.split('T');
                            let ListDate = splitListDate[0].split('-');
                            let ListTitle = doc.snippet.title;
                            if (i == 0 && sermon != "sun") {
                                return false;
                            }
                            return (
                                <li key={doc.id}>
                                    <div className="tit">{ListTitle.substring(0, 24)}...</div>
                                    <div className="date">{ListDate[0] + "년 " + ListDate[1] + "월 " + ListDate[2] + "일"}</div>
                                    <div className="preacher">설교 : 김성현 감독</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    );
}