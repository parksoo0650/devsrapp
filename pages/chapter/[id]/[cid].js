import React, { useState } from "react";
import Sheet from 'react-modal-sheet';
import { useRouter } from "next/router";
import Link from "next/link";
import { db } from '../../../fbase';
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { BookConsumer } from '../../../src/components/bibleProvider';
import Loading from "../../../src/components/Loading";

const Post = ({ items, bid, cid }) => {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setActive] = useState(false);
    const [bibleBook, setBibleBook] = useState("구약");
    const handleToggle = () => {
        setActive(!isActive);
    };

    if (router.isFallback) {
        return (
            <Loading />
        );
    }


    return (
        <>
            {items && (
                <>
                    <div className="container">
                        <BookConsumer>
                            {({ book_name }) => (
                                <div className="top_area">
                                    <div className="top_title txt_left" onClick={() => setIsOpen(true)}>{book_name[bid]} {cid}장 <span className="arrow"></span></div>
                                    <ul className="tool_list">
                                        <li onClick={handleToggle}>
                                            <img src="/icons/ico_setting.svg" alt="설정" />
                                        </li>
                                        <li>
                                            <img src="/icons/ico_search.svg" alt="검색" />
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
                        <style jsx>{`
                        .shadow {
                            display: ${isActive ? "block" : "none"};
                        }
                        `}</style>
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
                                            <BookConsumer>
                                                {({ old_book }) => (
                                                    <ul className={(bibleBook == "구약") ? "book_list" : "book_list hide"}>
                                                        {old_book.map((book, i) => (
                                                            <li key={i}><span>{book}</span></li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </BookConsumer>

                                            {/* 신약 */}
                                            <BookConsumer>
                                                {({ new_book }) => (
                                                    <ul className={(bibleBook == "신약") ? "book_list" : "book_list hide"}>
                                                        {new_book.map((book, i) => (
                                                            <li key={i}><span>{book}</span></li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </BookConsumer>

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
                            <Link href={`/chapter/${bid}/${parseInt(cid) - 1}`} >
                                <a>
                                    <span className="btn_left"></span>
                                </a>
                            </Link>
                            <Link href={`/chapter/${bid}/${parseInt(cid) + 1}`} >
                                <a>
                                    <span className="btn_right"></span>
                                </a>
                            </Link>
                        </div>

                    </div>
                </>
            )}
        </>
    );
};

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '1', cid: '1' } }],
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const cid = context.params.cid;
    const book_data = [];
    const q = query(collection(db, "bible"), where("book", "==", parseInt(id)), where("chapter", "==", parseInt(cid)), orderBy("verse", "asc"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        book_data.push(doc.data());
    });

    return {
        props: {
            items: book_data,
            bid: id,
            cid: cid
        },
    };
}

export default Post;