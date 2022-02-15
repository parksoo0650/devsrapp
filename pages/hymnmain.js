import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Sheet from 'react-modal-sheet';

export default function Praiselist() {

    useEffect(() => {
        let hymn = ['가사보기', '악보보기'];
    }, []);
    
    let [isOpen, setIsOpen] = useState(false);

    const [hymn, setHymn] = useState("가사보기");

    const router = useRouter();
    return (
        <div className="container hymn_wrap">
            <div className="top_area">
                <div className="top_title txt_left">
                    찬송 555장 <span className="arrow" onClick={() => setIsOpen(true)}></span>  
                    <span className="btn_change" onClick={() => {(hymn == "악보보기") ? setHymn("가사보기") : setHymn("악보보기")}}>{(hymn == "악보보기") ? "가사보기" : "악보보기"}</span>
                </div>
                <ul className="tool_list">
                    <li onClick={() => { router.push("/chapter/1/1"); }}>
                        <img src="../icons/ico_book.svg" alt="성경" />
                    </li>
                    <li>
                        <img src="../icons/ico_setting.svg" alt="설정" />
                    </li>
                    <li>
                        <img src="../icons/ico_search.svg" alt="검색" />
                    </li>
                </ul>
            </div>

            <div className={(hymn == "가사보기") ? "section hymn_con" : "section hymn_con hide"}>
                <div className="title">옳은 길 따르라 의의길을</div>
                <ul className="list">
                    <li>옳은 길 따르라 의의 길을 세계 만민의 참된 길 이 실따라서 살기를 온세계에 전하세 만 백성이 나갈 길</li>
                    <li>주 예수 따르라 승리의 주 세계 만민이 나아갈 길과 진리요 참 생명 네 창 검을 부수고 다 따르라 화평 왕</li>
                    <li>옳은 길 따르라 의의 길을 세계 만민의 참된 길 이 실따라서 살기를 온세계에 전하세 만 백성이 나갈 길</li>
                    <li>옳은 길 따르라 의의 길을 세계 만민의 참된 길 이 실따라서 살기를 온세계에 전하세 만 백성이 나갈 길</li>
                </ul>
            </div>
            <div className={(hymn == "악보보기") ? "section hymn_con" : "section hymn_con hide"}>
                <img src="../images/img_hymn.svg" alt="악보" />
            </div>
            
            
            <Sheet
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                snapPoints={[0.7]}
            >
                <Sheet.Container>
                    <Sheet.Header />
                    <Sheet.Content>
                        <div className="toast_hymn">
                            <button className="btn_close" onClick={() => setIsOpen(false)}></button>
                            <div className="search_area">
                                <select>
                                    <option selected>제목</option>
                                    <option>가사</option>
                                </select>
                                <input type="text" placeholder="제목 또는 가사로 검색해주세요." />
                                <span className="btn_search"></span>
                            </div>
                            <div className="tab_con">
                                <ul className="hymn_list">
                                    <li>1장 만복의 근원 하나님</li>
                                    <li>2장 만복의 근원 하나님</li>
                                    <li>3장 만복의 근원 하나님</li>
                                    <li>4장 만복의 근원 하나님</li>
                                    <li>5장 만복의 근원 하나님</li>
                                    <li>6장 만복의 근원 하나님</li>
                                    <li>7장 만복의 근원 하나님</li>
                                    <li>8장 만복의 근원 하나님</li>
                                    <li>9장 만복의 근원 하나님</li>
                                    <li>10장 성부 성자 성령</li>
                                    <li>11장 성부 성자 성령</li>
                                    <li>12장 성부 성자 성령</li>
                                    <li>13장 성부 성자 성령</li>
                                    <li>14장 성부 성자 성령</li>
                                    <li>15장 성부 성자 성령</li>
                                    <li>16장 성부 성자 성령</li>
                                    <li>17장 성부 성자 성령</li>
                                    <li>18장 성부 성자 성령</li>
                                    <li>19장 성부 성자 성령</li>
                                    <li>20장 성부 성자 성령</li>
                                    <li>21장 성부 성자 성령</li>
                                    <li>22장 성부 성자 성령</li>
                                    <li>23장 성부 성자 성령</li>
                                    <li>24장 성부 성자 성령</li>
                                    <li>25장 성부 성자 성령</li>
                                    <li>26장 성부 성자 성령</li>
                                    <li>27장 성부 성자 성령</li>
                                    <li>28장 성부 성자 성령</li>
                                    <li>29장 성부 성자 성령</li>
                                </ul>
                            </div>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop />
            </Sheet>
        </div>
    );
}