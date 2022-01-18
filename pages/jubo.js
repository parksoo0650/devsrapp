import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sheet from 'react-modal-sheet';
import YouTube from 'react-youtube';

export default function Sermonmain() {

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
        let sermon = ['예배순서', '설교요지', '주중설교', '교회소식'];
    }, []);

    const router = useRouter();

    const [sermonD, setSermonD] = useState("예배순서");

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
        <div className="sub_container jubo_wrap sermon_detail">
            <div className="top_area">
                <span className="btn_prev"></span>
                <div className="top_title">주보</div>
            </div>

            <div className="visual">
                <div className="title">이름으로도 기억되는 자</div>
                <div className="eng">Those who are Konwn by Name</div>
                <div className="bible">[마가복음 13:24~37]</div>
            </div>

            <div className="section">
                <ul className="tab_area">
                    <li onClick={() => { setSermonD("예배순서"); }} className={(sermonD == "예배순서") ? "on" : ""}>예배순서</li>
                    <li onClick={() => { setSermonD("설교요지"); }} className={(sermonD == "설교요지") ? "on" : ""}>설교요지</li>
                    <li onClick={() => { setSermonD("주중설교"); }} className={(sermonD == "주중설교") ? "on" : ""}>주중설교</li>
                    <li onClick={() => { setSermonD("교회소식"); }} className={(sermonD == "교회소식") ? "on" : ""}>교회소식</li>
                </ul>
                <div className="tab_con">
                    {/* 예배순서 */}
                    <ul className={(sermonD == "예배순서") ? "order_wrap" : "order_wrap hide"}>
                        <li>
                            <span>찬송</span>
                            <span>30장</span>
                            <span>일어서서</span>
                        </li>
                        <li>
                            <span>기원</span>
                            <span></span>
                            <span>사회자</span>
                        </li>
                        <li>
                            <span>주신기도</span>
                            <span></span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>찬송</span>
                            <span>93장</span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>참회기도</span>
                            <span></span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>찬송</span>
                            <span>주님을 의지합니다</span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>기도</span>
                            <span>①원유신 ②김영태</span>
                            <span></span>
                        </li>
                        <li>
                            <span>성시합독</span>
                            <span>시편 23편</span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>헌금</span>
                            <span>헌금송</span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>찬송</span>
                            <span>할렐루야</span>
                            <span>일어서서</span>
                        </li>
                        <li>
                            <span>봉헌기도</span>
                            <span></span>
                            <span>목사</span>
                        </li>
                        <li>
                            <span>찬양</span>
                            <span>성가대</span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>성경교독</span>
                            <span>마가복음<br />12:35~37</span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>합심기도</span>
                            <span></span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>설교</span>
                            <span>하나님의 아들 그리스도</span>
                            <span>김성현 감독</span>
                        </li>
                        <li>
                            <span>찬송</span>
                            <span></span>
                            <span>다같이</span>
                        </li>
                        <li>
                            <span>축도</span>
                            <span></span>
                            <span>목사</span>
                        </li>
                    </ul>
                    
                    {/* 설교요지 */}
                    <div className={(sermonD == "설교요지") ? "gist_wrap" : "gist_wrap hide"}>
                        <div className="gist_title">
                            하나님의 아들 그리스도
                            <span className="translation"></span>
                        </div>
                        <div className="main_bible">마가복음 1:35~37</div>
                        <div className="gist">
                            하나님은<br />
                            사랑이시다<br />
                            그가 자기의 사랑의 대상을 독생자로 하셨으니 
                            <span className="bible">
                                (마 17:5)
                                <div className="layer_bible on">
                                    <span className="btn_close"></span>
                                    <ul className="verse_list">
                                        <li><strong>1.</strong> 바울과 실루아노와 디모데는 하나님 아버지와 주 예수 그리스도 안에 있는 데살로니가인의 교회에 편지하노니 은혜와 평강이 너희에게 있을지어다</li>
                                        <li><strong>2.</strong> 바울과 실루아노와 디모데는 하나님 아버지와 주 예수 그리스도 안에 있는 데살로니가인의 교회에 편지하노니 은혜와 평강이 너희에게 있을지어다</li>
                                        <li><strong>3.</strong> 바울과 실루아노와 디모데는 하나님 아버지와 주 예수 그리스도 안에 있는 데살로니가인의 교회에 편지하노니 은혜와 평강이 너희에게 있을지어다</li>
                                    </ul>
                                </div>
                            </span>
                            <br />
                            하나님이 유일하심같이 아들을 유일하게 하심이다<br />
                            그가 유일하심은 유일하신 <span className="bible">(요 1:18)</span><br />
                            하나님의 후사로 세우시려 하심이다 <span className="bible">(히 1:1~2)</span><br />
                            그러므로 우리의 신앙고백은 유일하신<br />
                            참 하나님과 그가 보내신 예수 그리스도를 믿음이다 <span className="bible">(요 17:3)</span><br />
                            그가 아버지 안에 계실 때는 말씀 (로고스)이시니 <span className="bible">(요 1:1)</span><br />
                            하나님의 말씀은  의(의)와 뜻이요 불변의<br />
                            진리이다 <span className="bible">(요 14:6)</span><br />
                            그는 아브라함보다 먼저 계신 자다<span className="bible">(요 8:52~59)</span><br />
                            아브라함은 주의 종이요 예언자니<br />
                            하나님의 언약을 맡은 자다 <span className="bible">(시 105:4~11)</span><br />
                            하나님의 말씀은 자기 앞에 선지자를 보내시고 <span className="bible">(요 5:39)</span><br />
                            선지자는 첩경(길)을 닦는 자로 사용하셨다 <span className="bible">(마 3:1~3)</span><br />
                            아브라함에게 하신 언약을 이삭에게 맹세하시고<br />
                            야곱에게 율례(율법)로 정하셨으니<br />
                            율법이 복음보다 먼저 있고 엘리야가 먼저 와야<br />
                            그리스도가 뒤에 오심이다 <span className="bible">(마 4:5~6)</span><br />
                            예언 없이 있는 자는 진리가 아니요 종교요 <span className="bible">(요일 4:2~3)</span><br />
                            종교는 실상이 아닌 것을 찾아가는 신념이다

                            <ul className="important">
                                <li>
                                    ◎ 그리스도는 첩경 없이 나타나지 않으시고<br />
                                    예언이 있고 예언 따라 오셔야 진리이다
                                </li>
                                <li>
                                    ◎ 우리의 믿음이 이것이니 태초부터<br />
                                    그에 대한 예언이 있고 그 예언을 응해야만<br />
                                    하나님이 보내신 자요 진리이다
                                </li>
                                <li>
                                    ◎ 아브라함과 유다와 다윗은 주의 첩경이니<br />
                                    다른 길로 오는 자는 그리스도가 아니요<br />
                                    거짓 그리스도이다
                                </li>
                                <li>
                                    ※ 예수 그리스도 앞에는 수많은 예언자들이 있어<br />
                                    피 흘려 주의 첩경을 예비하였다 이를<br />
                                    하나님이 증거하셨으니 그가 침례 받을실 때이다 (시무언)
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* 주중설교 */}
                    <div className={(sermonD == "주중설교") ? "gist_wrap" : "gist_wrap hide"}>
                        <div className="gist_title">
                            사랑
                            <span className="translation"></span>
                        </div>
                        <div className="main_bible">마가복음 1:35~37</div>
                        <div className="gist">
                            인간이 하나님을 사랑하는 일에 자꾸 실패하는 것은 자신을 사랑하는 본능에 굴복하기 때문입니다. 구약시대의 역사가 이를 여실히 드러냅니다. 우리가 같은 실패를 반복하지 않으려면 구약 성경을 통해 드러난 인간의 자기중심성을 발견하고 이를 극복하기 위해 노력해야 합니다.
                            <br />
                            모세를 부인치 않은 예수<br />
                            모든 계명 중에 첫째가 무엇인지를 묻는 서기관들의 질문에 예수는 말씀하셨습니다. “네 마음을 다하고 목숨을 다하고 뜻을 다하고 힘을 다하여 주 너의 하나님을 사랑하라! 그리고 네 이웃을 네 몸과 같이 사랑하라!: 이 대답에 서기관들은 깜짝 놀랐습니다. 예수는 모세를 부정하는 고리 체계를 가지고 있을 것이라고 예상 했던 그들이 틀렸음을 발견했기 때문입니다.
                            <br />
                            2. 율법이 가리켜 왔던 사랑 <br />
                            모세의 율법이 순종을 강조한 것은 하나님에 대한 사랑을 나타내라는 의미였습니다, 하나님은 세상을 지으신 분이요, 자기 목숨을 던져 죄인을 구원하신 분이요, 우리에게 복 주시는 분입니다.  그런 하나님은 우리의 지성과 감정, 의지와 행동을 모두 불태우는 사랑을 받기에 합당하신 분입니다. 하나님은 또한 우리에게 형제자매를 사랑하기를 원하십니다. 이를 통해 하나님을 향한 그 사랑을 표현하고 증거하기를 바라십니다.
                            <br />
                            3. 사랑을 가능케 하신 예수<br />
                            서로 사랑하라는 계명을 주님은 우리에게 주셨습니다. 이는 새것을 갑자기 내놓으신 것이 아니고 예전부터 있었던 것을 강조하신 것입니다. 그러나 아무리 서로 사랑하려 해도 우리의 능력으로는 한계가 있음을 아시는 주님은 우리가 형제자매를 사랑하려고 노력할 때, 그 열심 자체를 우리가 주님을 사랑하는 증거로 간주하겠다고 하셨습니다. 하나님의 사랑을 받은 우리, 그 사랑으로 하나님을 사랑합시다. 형제자매를 사랑함으로써 그 사랑의 진실을 나타냅시다.
                            <br /><br />
                            <div class="txt_right">김성현 감독</div>
                        </div>
                    </div>
                    
                    {/* 교회소식 */}
                    <div className={(sermonD == "교회소식") ? "notice_wrap" : "notice_wrap hide"}>
                        <div className="notice_title">1월은 성경 일독의 달입니다</div>
                        <ol className="list">
                            <li>
                                <div className="tit">2022 성락교회 신년 전교인 성경통독사경회</div>
                                일시: 1. 8 (토), 22(토) 오전 9:30 ~ 오후 4:20<br />
                                범위: 모세오경, 여호수아, 사사기, 사복음서, 요한계시록<br />
                                대상: 모든 성도<br />
                                주관: 성락 베뢰아 아카데미<br />
                                문의: 070-7300-6400~4<br />
                                ※ 온라인 실황 중계
                            </li>
                            <li>
                                <div className="tit">2022 성락교회 신년 전교인 성경통독사경회</div>
                                일시: 1. 8 (토), 22(토) 오전 9:30 ~ 오후 4:20<br />
                                범위: 모세오경, 여호수아, 사사기, 사복음서, 요한계시록<br />
                                대상: 모든 성도<br />
                                주관: 성락 베뢰아 아카데미<br />
                                문의: 070-7300-6400~4<br />
                                ※ 온라인 실황 중계
                            </li>
                            <li>
                                <div className="tit">2022 성락교회 신년 전교인 성경통독사경회</div>
                                일시: 1. 8 (토), 22(토) 오전 9:30 ~ 오후 4:20<br />
                                범위: 모세오경, 여호수아, 사사기, 사복음서, 요한계시록<br />
                                대상: 모든 성도<br />
                                주관: 성락 베뢰아 아카데미<br />
                                문의: 070-7300-6400~4<br />
                                ※ 온라인 실황 중계
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>
    );
}