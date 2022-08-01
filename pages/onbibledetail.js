import { useRouter } from "next/router";
import React, { useState } from "react";
import Sheet from 'react-modal-sheet';
import YouTube from 'react-youtube';
import Share from "../src/components/Share";

export default function Onmain() {
    const router = useRouter();
    let [isOpen, setIsOpen] = useState(false);
    const [bibleBook, setBibleBook] = useState("구약");
    const [onbible, setOnbible] = useState("순서");
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
                <span className="btn_prev" onClick={() => router.push('/onmain?kind=onb')}></span>
                <div className="top_title">온성경</div>
            </div>

            <div className="movie_wrap">
                <YouTube videoId={router.query.vid} opts={opts} containerClassName="iframe_wrap" />
                <div className="info">
                    <Share title={router.query.vtit} thum="/images/kakao_onb_new.jpg" vid={router.query.vid} />
                    <div className="tit">
                        <a href="#">{router.query.vtit}</a>
                    </div>
                    <div className="date">{router.query.vdate}</div>
                </div>
            </div>

            <div className="section" style={{display:"none"}}>
                <ul className="tab_area">
                    <li onClick={() => { setOnbible("순서"); }} className={(onbible == "순서") ? "on" : ""}>순서</li>
                    <li onClick={() => { setOnbible("성경"); }} className={(onbible == "성경") ? "on" : ""}>성경</li>
                </ul>
                <div className="tab_con">
                    {/* 순서 */}
                    <ul className={(onbible == "순서") ? "order_wrap" : "order_wrap hide"}>
                        <li>주신기도</li>
                        <li>성경읽기</li>
                        <li>주신기도</li>
                        <li>다음 시간 안내</li>
                    </ul>

                    {/* 성경 */}
                    <div className={(onbible == "성경") ? "bible_wrap" : "bible_wrap hide"}>
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