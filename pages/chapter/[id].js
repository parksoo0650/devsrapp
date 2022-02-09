import { useRouter } from "next/router";
import React, { useState } from "react";
import Sheet from 'react-modal-sheet';
import { db } from '../../fbase';
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { BookConsumer } from '../../src/components/bibleProvider';
import Link from "next/link";
import Loading from "../../src/components/Loading";

const Post = ({ items, bid }) => {

    const router = useRouter();
    const strArr = bid.split('_');
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setActive] = useState(false);
    const [bibleBook, setBibleBook] = useState("구약");
    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <>
            {(items) ? (
            <div className="container">
                <BookConsumer>
                    {({ book_name }) => (
                        <div className="top_area">
                            <div className="top_title txt_left">{book_name[strArr[0]]} {strArr[1]}장 <span className="arrow" onClick={() => setIsOpen(true)}></span></div>
                            <ul className="tool_list">
                                <li onClick={handleToggle}>
                                    <img src="../icons/ico_setting.svg" alt="설정" />
                                </li>
                                <li>
                                    <img src="../icons/ico_search.svg" alt="검색" />
                                </li>
                            </ul>
                            <div className={isActive ? "txt_control" : "txt_control hide"}>
                                <div className="tit">
                                    <strong>텍스트 크기</strong>
                                    <span>16pt</span>
                                </div>
                                <ul className="size">
                                    <li>가</li>
                                    <li><strong>가</strong></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </BookConsumer>
                <div className="shadow"></div>
                <style jsx>
                    {`
            .shadow {
                display: ${isActive ? "block" : "none"};
            }
            `}
                </style>

                <Sheet
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    snapPoints={[1]}
                >
                    <Sheet.Container>
                        <Sheet.Header />
                        <Sheet.Content>
                            <div className="layer_bible_read">
                                <div className="title">성경</div>
                                <button className="btn_close" onClick={() => setIsOpen(false)}></button>
                                <ul className="tab_area">
                                    <li onClick={() => { setBibleBook("구약"); }} className={(bibleBook == "구약") ? "on" : ""}>구약</li>
                                    <li onClick={() => { setBibleBook("신약"); }} className={(bibleBook == "신약") ? "on" : ""}>신약</li>
                                    <li onClick={() => { setBibleBook("장"); }} className={(bibleBook == "장") ? "on" : ""}>장</li>
                                </ul>
                                <div className="tab_con">

                                    {/* 구약 */}
                                    <ul className={(bibleBook == "구약") ? "book_list" : "book_list hide"}>
                                        <li className="on"><span>창세기</span></li>
                                        <li><span>출애굽기</span></li>
                                        <li><span>레위기</span></li>
                                        <li><span>민수기</span></li>
                                        <li><span>신명기</span></li>
                                        <li><span>여호수아</span></li>
                                        <li><span>사사기</span></li>
                                        <li><span>룻기</span></li>
                                        <li><span>사무엘상</span></li>
                                        <li><span>사무엘하</span></li>
                                        <li><span>열왕기상</span></li>
                                        <li><span>열왕기하</span></li>
                                        <li><span>역대상</span></li>
                                        <li><span>역대하</span></li>
                                        <li><span>에스라</span></li>
                                        <li><span>느헤미야</span></li>
                                        <li><span>에스더</span></li>
                                        <li><span>욥기</span></li>
                                        <li><span>시편</span></li>
                                        <li><span>잠언</span></li>
                                        <li><span>전도사</span></li>
                                        <li><span>아가</span></li>
                                        <li><span>이사야</span></li>
                                        <li><span>예레미야</span></li>
                                        <li><span>예레미야 애가</span></li>
                                        <li><span>에스겔</span></li>
                                        <li><span>다니엘</span></li>
                                        <li><span>호세아</span></li>
                                        <li><span>요엘</span></li>
                                        <li><span>아모스</span></li>
                                        <li><span>오바댜</span></li>
                                        <li><span>요나</span></li>
                                        <li><span>미가</span></li>
                                        <li><span>나훔</span></li>
                                        <li><span>하박국</span></li>
                                        <li><span>스바냐</span></li>
                                        <li><span>학개</span></li>
                                        <li><span>스가랴</span></li>
                                        <li><span>말라기</span></li>
                                    </ul>

                                    {/* 신약 */}
                                    <ul className={(bibleBook == "신약") ? "book_list" : "book_list hide"}>
                                        <li><span>마태복음</span></li>
                                        <li><span>마가복음</span></li>
                                        <li><span>누가복음</span></li>
                                        <li><span>요한복음</span></li>
                                        <li><span>사도행전</span></li>
                                        <li><span>로마서</span></li>
                                        <li><span>고린도전서</span></li>
                                        <li><span>고린도후서</span></li>
                                        <li><span>갈라디아서</span></li>
                                        <li><span>에베소서</span></li>
                                        <li><span>빌립보서</span></li>
                                        <li><span>골로새서</span></li>
                                        <li className='on'><span>데살로니가 전서</span></li>
                                        <li><span>데살로니가 후서</span></li>
                                        <li><span>디모데 전서</span></li>
                                        <li><span>디모데 후서</span></li>
                                        <li><span>디도서</span></li>
                                        <li><span>빌레몬서</span></li>
                                        <li><span>히브리서</span></li>
                                        <li><span>야고보서</span></li>
                                        <li><span>베드로 전서</span></li>
                                        <li><span>베드로 후서</span></li>
                                        <li><span>요한1서</span></li>
                                        <li><span>요한2서</span></li>
                                        <li><span>요한3서</span></li>
                                        <li><span>유다서</span></li>
                                        <li><span>요한계시록</span></li>
                                    </ul>

                                    {/* 장 */}
                                    <ul className={(bibleBook == "장") ? "chapter_list" : "chapter_list hide"}>
                                        <li className='on'><span>1</span></li>
                                        <li><span>2</span></li>
                                        <li><span>3</span></li>
                                        <li><span>4</span></li>
                                        <li><span>5</span></li>
                                        <li><span>6</span></li>
                                        <li><span>7</span></li>
                                        <li><span>8</span></li>
                                        <li><span>9</span></li>
                                        <li><span>110</span></li>
                                        <li><span>111</span></li>
                                        <li><span>112</span></li>
                                        <li><span>113</span></li>
                                        <li><span>114</span></li>
                                        <li><span>115</span></li>
                                        <li><span>116</span></li>
                                        <li><span>117</span></li>
                                        <li><span>118</span></li>
                                        <li><span>119</span></li>
                                        <li><span>120</span></li>
                                        <li><span>121</span></li>
                                        <li><span>122</span></li>
                                        <li><span>123</span></li>
                                        <li><span>124</span></li>
                                        <li><span>125</span></li>
                                        <li><span>126</span></li>
                                        <li><span>127</span></li>
                                        <li><span>128</span></li>
                                        <li><span>129</span></li>
                                    </ul>

                                </div>
                            </div>
                        </Sheet.Content>
                    </Sheet.Container>
                    <Sheet.Backdrop />
                </Sheet>

                <div className="section bible_con">
                    <ul className="verse_list">
                        {items.map((item, i) => (
                            <li key={i}>
                                <strong>{item.verse}.</strong> {item.content}
                            </li>
                        ))}
                    </ul>
                    <Link href={`/chapter/${strArr[0]}_${parseInt(strArr[1]) - 1}`} >
                        <a>
                            <span className="btn_left"></span>
                        </a>
                    </Link>
                    <Link href={`/chapter/${strArr[0]}_${parseInt(strArr[1]) + 1}`} >
                        <a>
                            <span className="btn_right"></span>
                        </a>
                    </Link>
                </div>

            </div>
            ) : (
            <div>
                <Loading />
            </div>
            )}
        </>
    );
};

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '1_1' } }],
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const strArr = id.split('_');
    const book = strArr[0];
    const chapter = strArr[1];
    const book_data = [];
    const q = query(collection(db, "bible"), where("book", "==", parseInt(book)), where("chapter", "==", parseInt(chapter)), orderBy("verse", "asc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        book_data.push(doc.data());
    });

    return {
        props: {
            items: book_data,
            bid: id
        },
    };
}

export default Post;