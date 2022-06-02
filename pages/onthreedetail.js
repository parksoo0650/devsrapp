import { useRouter } from "next/router";
import React, { useState } from "react";
import Sheet from 'react-modal-sheet';
import YouTube from 'react-youtube';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper';
import Share from "../src/components/Share";

export default function Onmain() {
    const router = useRouter();
    let [isOpen, setIsOpen] = useState(false);
    const [bibleBook, setBibleBook] = useState("구약");
    const [onthree, setOnthree] = useState("설교요지");
    const opts = {
        width: "320px",
        height: "200px",
        playerVars: {
            autoplay: 1, rel: 0, modestbranding: 1
        },
    };

    return (
        <div className="sub_container onseries_detail">
            <div className="top_area">
                <span className="btn_prev" onClick={() => router.push('/onmain?kind=ont')}></span>
                <div className="top_title">온3분</div>
            </div>

            <div className="movie_wrap">
                <YouTube videoId={router.query.vid} opts={opts} containerClassName="iframe_wrap" />
                <div className="info">
                    <Share title={router.query.vtit} thum="/images/kakao_ont_new.jpg" vid={router.query.vid} />
                    <div className="tit">
                        <a href="#">{router.query.vtit}</a>
                    </div>
                    <div className="date">{router.query.vdate}</div>
                </div>
            </div>

            <div className="section" style={{display:"none"}}>
                <ul className="tab_area">
                    <li onClick={() => { setOnthree("설교요지"); }} className={(onthree == "설교요지") ? "on" : ""}>설교요지</li>
                    <li onClick={() => { setOnthree("본문말씀"); }} className={(onthree == "본문말씀") ? "on" : ""}>본문말씀</li>
                </ul>
                <div className="tab_con">
                    
                    {/* 설교요지 */}
                    <div className={(onthree == "설교요지") ? "gist_wrap" : "gist_wrap hide"}>
                        <div className="gist_title">
                            하나님의 아들 그리스도
                            <span className="translation"></span>
                        </div>
                        <div className="main_bible">마가복음 1:35~37</div>
                        
                        <div className="three_swiper">
                            <Swiper
                            className="slide_wrap"
                            spaceBetween={10}
                            slidesPerView={1}
                            resistanceRatio={0}
                            loop={false}
                            >
                                <SwiperSlide>
                                    <img src="/images/onthree/img_three01.png" alt="온3분 배너 01" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/images/onthree/img_three01.png" alt="온3분 배너 01" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/images/onthree/img_three02.png" alt="온3분 배너 02" />
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className="gist">
                        예수 그리스도는 장차 세상에 다시 오셔서 모든 죄를 심판하실 것입니다. 그때에 그리스도의 약속대로 심판을 피하고 그리스도께서 공중으로 불러 올려주시는 은혜를 받는 것, 그것이 교회의 과제이며, 이를 위해 그리스도의 뜻 안에서 그가 주신 지침을 순종하는 것, 그것이 우리가 가져야 할 삶입니다.
                        사람들은 죽으면 모든 것이 끝이라고 말하면서도 막연하게나마 죽음 이후에 대한 불안감을 가지고 있습니다. 이를 해소하려고 많은 이들이 선택하는 것이 종교입니다. ‘어느 것이든 종교를 가지면 죽어서 좋은 곳에 갈 수 있다.’고 믿는 그들의 생각은 ‘이 땅에서 착하게 살면 나중에 좋은 곳에 가겠지.’ 하고 막연히 기대하는 불신자들의 그것과 크게 다르지 않습니다.
                        안타까운 것은 이런 생각이 교회 안에까지 들어와 있다는 점입니다. 많은 그리스도인이 ‘나는 예수 믿는 사람이니 당연히 천국에 가겠지.’ 하며 종교적 소속감이 자신을 구원해줄 것이라고 착각합니다. 극단적인 경우에는 ‘믿기만 하면 구원을 받으니 행실이 나빠도 문제는 없다.’고 생각합니다. 그러나 이런 생각들은 주님의 뜻과는 거리가 멉니다.
                        우리가 믿음을 가졌다고 해서 우리 안의 죄성이 사라진 것은 아닙니다. 다만 우리 죄가 주님의 은혜로 가리워지고 있는 것뿐입니다. 그러므로 우리는 삶의 마지막 순간까지 그 은혜 안에 머물러야 합니다. 은혜가 아니면 자신은 멸망할 수밖에 없는 죄인임을 항상 기억하고, 그런 자신을 끝까지 보전하시려는 주님의 말씀을 삶의 지침으로 삼고 준행해야 합니다.
                        마지막 때에는 주님이 죄악 가득한 이 땅에 대해 진노를 표현하실 것입니다. 물론 이미 세상을 떠난 영혼들에 대한 심판과 형벌은 나중에 진행하시겠지만, 먼저는 이 땅에 살고 있는 사람들에게 형벌을 내리시되, 어린양의 보혈을 끝까지 욕되게 한 그들의 죄에 걸맞은 무서운 재난을 내리실 것입니다. 언제 그날이 올지 모르지만 우리는 항상 회개의 마음을 잃지 말아야 합니다. 주님으로 하여금 우리를 향해 형벌이 아닌 구원을 선언하시게 해야 합니다.
                        이 땅을 형벌하시는 그날은 어떤 이들에게는 절망의 날이 되겠지만, 회개의 열매를 맺는 자들에게는 소망이 있을 것입니다. 우리가 맺어야 할 두 가지 회개의 열매가 있습니다. 하나는 은혜받은 자답게 자신을 겸손하게 변화시키고 선한 마음과 행실로 교회를 섬기는 것입니다. 다른 하나는 회개의 복음을 전함으로써 죄인들에게 구원의 길을 안내하는 것입니다.
                        주님이 오시는 그날까지 이 회개의 열매를 맺는 일에 충실합시다. 우리가 이 땅에 머무는 동안 그 마지막 환난을 만나든, 아니면 그전에 세상을 떠나든 우리 신앙의 목적은 달라지지 않습니다. 우리 같은 죄인들을 천국까지 무사히 이르게 하시려는 주님의 처방을 감사로써 받아들입시다. 영광의 그날을 소망으로 기다리며 사랑과 겸손으로 헌신하는 교회가 됩시다.
                        <br /><br />
                        제작 : 성락교회 성락선교센터
                        </div>

                        <div className="btn_mission">선교센터 블로그 바로가기</div>
                        <div className="txt_mission">주일설교 전체녹취록, 설교요지, 송죽암을<br />모두 보시려면 성락선교센터 블로그로 오시면 됩니다.</div>
                    </div>

                    {/* 본문말씀 */}
                    <div className={(onthree == "본문말씀") ? "bible_wrap" : "bible_wrap hide"}>
                        <div className="top_area">
                            <div className="top_title txt_left">데살로니가전서 1장 <span className="arrow" onClick={() => setIsOpen(true)}></span></div>
                            <ul className="tool_list">
                                <li>
                                    <img src="../icons/ico_setting.svg" alt="설정" />
                                </li>
                            </ul>
                        </div>
                        <div className="bible_con">
                            <ul className="verse_list">
                                <li><strong>1.</strong> 바울과 실루아노와 디모데는 하나님 아버지와 주 예수 그리스도 안에 있는 데살로니가인의 교회에 편지하노니 은혜와 평강이 너희에게 있을지어다</li>
                                <li><strong>2.</strong> 바울과 실루아노와 디모데는 하나님 아버지와 주 예수 그리스도 안에 있는 데살로니가인의 교회에 편지하노니 은혜와 평강이 너희에게 있을지어다</li>
                            </ul>
                        </div>
                    </div>
                    
                    <Sheet
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        snapPoints={[0.7]}
                    >
                        <Sheet.Container>
                            <Sheet.Header />
                            <Sheet.Content>
                                <div className="toast_bible">
                                    <button className="btn_close" onClick={() => setIsOpen(false)}></button>
                                    <ul className="tab_area">
                                        <li onClick={() => { setBibleBook("구약"); }} className={(bibleBook == "구약") ? "on" : ""}>구약</li>
                                        <li onClick={() => { setBibleBook("신약"); }} className={(bibleBook == "신약") ? "on" : ""}>신약</li>
                                        <li onClick={() => { setBibleBook("장"); }} className={(bibleBook == "장") ? "on" : ""}>장</li>
                                    </ul>
                                    <div className="tab_con">
                                    
                                        {/* 구약 */}
                                        <ul className={(bibleBook == "구약") ? "book_list" : "book_list hide"}>
                                            <li>창세기</li>
                                            <li>출애굽기</li>
                                            <li>레위기</li>
                                            <li>민수기</li>
                                            <li>신명기</li>
                                            <li>여호수아</li>
                                            <li>사사기</li>
                                            <li>룻기</li>
                                            <li>사무엘상</li>
                                            <li>사무엘하</li>
                                            <li>열왕기상</li>
                                            <li>열왕기하</li>
                                            <li>역대상</li>
                                            <li>역대하</li>
                                            <li>에스라</li>
                                            <li>느헤미야</li>
                                            <li>에스더</li>
                                            <li>욥기</li>
                                            <li>시편</li>
                                            <li>잠언</li>
                                            <li>전도사</li>
                                            <li>아가</li>
                                            <li>이사야</li>
                                            <li>예레미야</li>
                                            <li>예레미야 애가</li>
                                            <li>에스겔</li>
                                            <li>다니엘</li>
                                            <li>호세아</li>
                                            <li>요엘</li>
                                            <li>아모스</li>
                                            <li>오바댜</li>
                                            <li>요나</li>
                                            <li>미가</li>
                                            <li>나훔</li>
                                            <li>하박국</li>
                                            <li>스바냐</li>
                                            <li>학개</li>
                                            <li>스가랴</li>
                                            <li>말라기</li>
                                        </ul>
                                    
                                        {/* 신약 */}
                                        <ul className={(bibleBook == "신약") ? "book_list" : "book_list hide"}>
                                            <li>마태복음</li>
                                            <li>마가복음</li>
                                            <li>누가복음</li>
                                            <li>요한복음</li>
                                            <li>사도행전</li>
                                            <li>로마서</li>
                                            <li>고린도전서</li>
                                            <li>고린도후서</li>
                                            <li>갈라디아서</li>
                                            <li>에베소서</li>
                                            <li>빌립보서</li>
                                            <li>골로새서</li>
                                            <li>데살로니가전서</li>
                                            <li>데살로니가후서</li>
                                            <li>디모데전서</li>
                                            <li>디모데후서</li>
                                            <li>디도서</li>
                                            <li>빌레몬서</li>
                                            <li>히브리서</li>
                                            <li>야고보서</li>
                                            <li>베드로전서</li>
                                            <li>베드로후서</li>
                                            <li>요한1서</li>
                                            <li>요한2서</li>
                                            <li>요한3서</li>
                                            <li>유다서</li>
                                            <li>요한계시록</li>
                                        </ul>
                                    
                                        {/* 장 */}
                                        <ul className={(bibleBook == "장") ? "chapter_list" : "chapter_list hide"}>
                                            <li>1</li>
                                            <li>2</li>
                                            <li>3</li>
                                            <li>4</li>
                                            <li>5</li>
                                            <li>6</li>
                                            <li>7</li>
                                            <li>8</li>
                                            <li>9</li>
                                            <li>10</li>
                                            <li>11</li>
                                            <li>12</li>
                                            <li>13</li>
                                            <li>14</li>
                                            <li>15</li>
                                            <li>16</li>
                                            <li>17</li>
                                            <li>18</li>
                                            <li>19</li>
                                            <li>20</li>
                                            <li>21</li>
                                            <li>22</li>
                                            <li>23</li>
                                            <li>24</li>
                                            <li>25</li>
                                            <li>26</li>
                                            <li>27</li>
                                            <li>28</li>
                                            <li>29</li>
                                        </ul>

                                    </div>
                                </div>
                            </Sheet.Content>
                        </Sheet.Container>
                        <Sheet.Backdrop />
                    </Sheet>

                </div>
            </div>
        </div>
    );
}