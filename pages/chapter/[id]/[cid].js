import React, { useState, useEffect } from "react";
import Sheet from "react-modal-sheet";
import { useRouter } from "next/router";
import Link from "next/link";
import { db } from "../../../fbase";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { BookConsumer } from "../../../src/components/bibleProvider";
import Loading from "../../../src/components/Loading";

const Post = ({ items, bid, cid }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isChapter, setIsChapter] = useState(cid);
  const [isBible, setIsBible] = useState(bid);
  const [bibleBook, setBibleBook] = useState("구약");
  const handleToggle = () => {
    setActive(!isActive);
  };

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      {items && (
        <>
          <div className="container">
            <BookConsumer>
              {({ book_name }) => (
                <div className="top_area">
                  <div
                    className="top_title txt_left"
                    onClick={() => setIsOpen(true)}
                  >
                    {book_name[bid]} {cid}장 <span className="arrow"></span>
                  </div>
                  <ul className="tool_list">
                    <li onClick={handleToggle}>
                      <img src="/icons/ico_setting.svg" alt="설정" />
                    </li>
                    <li>
                      <img src="/icons/ico_search.svg" alt="검색" />
                    </li>
                  </ul>
                  <div
                    className={isActive ? "txt_control" : "txt_control hide"}
                  >
                    <div className="tit">
                      <strong>텍스트 크기</strong>
                      <span>16pt</span>
                    </div>
                    <ul className="size">
                      <li>가</li>
                      <li>
                        <strong>가</strong>
                      </li>
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
                    <button
                      className="btn_close"
                      onClick={() => setIsOpen(false)}
                    ></button>
                    <ul className="tab_area">
                      <li
                        onClick={() => {
                          setBibleBook("구약");
                        }}
                        className={bibleBook == "구약" ? "on" : ""}
                      >
                        구약
                      </li>
                      <li
                        onClick={() => {
                          setBibleBook("신약");
                        }}
                        className={bibleBook == "신약" ? "on" : ""}
                      >
                        신약
                      </li>
                      <li
                        onClick={() => {
                          setBibleBook("장");
                        }}
                        className={bibleBook == "장" ? "on" : ""}
                      >
                        장
                      </li>
                    </ul>
                    <div className="tab_con">
                      {/* 구약 */}
                      <BookConsumer>
                        {({ all_book }) => (
                          <ul
                            className={
                              bibleBook == "구약"
                                ? "book_list"
                                : "book_list hide"
                            }
                          >
                            {all_book.slice(0, 39).map((book, i) => (
                              <li
                                key={i}
                                className={isBible == i + 1 ? "on" : ""}
                                onClick={() => {
                                  setIsBible(i + 1);
                                  setBibleBook("장");
                                }}
                              >
                                <span>{book}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </BookConsumer>

                      {/* 신약 */}
                      <BookConsumer>
                        {({ all_book }) => (
                          <ul
                            className={
                              bibleBook == "신약"
                                ? "book_list"
                                : "book_list hide"
                            }
                          >
                            {all_book.slice(39, 67).map((book, i) => (
                              <li
                                key={i}
                                className={isBible == i + 40 ? "on" : ""}
                                onClick={() => {
                                  setIsBible(i + 40);
                                  setBibleBook("장");
                                }}
                              >
                                <span>{book}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </BookConsumer>

                      {/* 장 */}
                      <BookConsumer>
                        {({ book_cnt }) => (
                          <ul
                            className={
                              bibleBook == "장"
                                ? "chapter_list"
                                : "chapter_list hide"
                            }
                          >
                            {[...Array(book_cnt[isBible])].map((n, i) =>
                            (
                              <li
                                key={i}
                                className={isChapter == (i + 1) ? "on" : ""}
                                onClick={() => {
                                  setIsChapter(i + 1);
                                  localStorage.setItem('bible', isBible);
                                  localStorage.setItem('chapter', i + 1);
                                  setIsOpen(false);
                                }}
                              >
                                <Link href={`/chapter/${isBible}/${i + 1}`}>
                                  <a>
                                    <span>{i + 1}</span>
                                  </a>
                                </Link>
                              </li>
                            )
                            )}
                          </ul>
                        )}
                      </BookConsumer>
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
              <Link href={`/chapter/${bid}/${parseInt(cid) - 1}`}>
                <a>
                  <span className="btn_left"></span>
                </a>
              </Link>
              <Link href={`/chapter/${bid}/${parseInt(cid) + 1}`}>
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
    paths: [
      { params: { id: "1", cid: "1" } },
      { params: { id: "2", cid: "1" } },
      { params: { id: "3", cid: "1" } },
      { params: { id: "4", cid: "1" } },
      { params: { id: "5", cid: "1" } },
      { params: { id: "6", cid: "1" } },
      { params: { id: "7", cid: "1" } },
      { params: { id: "8", cid: "1" } },
      { params: { id: "9", cid: "1" } },
      { params: { id: "10", cid: "1" } },
      { params: { id: "11", cid: "1" } },
      { params: { id: "12", cid: "1" } },
      { params: { id: "13", cid: "1" } },
      { params: { id: "14", cid: "1" } },
      { params: { id: "15", cid: "1" } },
      { params: { id: "16", cid: "1" } },
      { params: { id: "17", cid: "1" } },
      { params: { id: "18", cid: "1" } },
      { params: { id: "19", cid: "1" } },
      { params: { id: "20", cid: "1" } },
      { params: { id: "21", cid: "1" } },
      { params: { id: "22", cid: "1" } },
      { params: { id: "23", cid: "1" } },
      { params: { id: "24", cid: "1" } },
      { params: { id: "25", cid: "1" } },
      { params: { id: "26", cid: "1" } },
      { params: { id: "27", cid: "1" } },
      { params: { id: "28", cid: "1" } },
      { params: { id: "29", cid: "1" } },
      { params: { id: "30", cid: "1" } },
      { params: { id: "31", cid: "1" } },
      { params: { id: "32", cid: "1" } },
      { params: { id: "33", cid: "1" } },
      { params: { id: "34", cid: "1" } },
      { params: { id: "35", cid: "1" } },
      { params: { id: "36", cid: "1" } },
      { params: { id: "37", cid: "1" } },
      { params: { id: "38", cid: "1" } },
      { params: { id: "39", cid: "1" } },
      { params: { id: "40", cid: "1" } },
      { params: { id: "41", cid: "1" } },
      { params: { id: "42", cid: "1" } },
      { params: { id: "43", cid: "1" } },
      { params: { id: "44", cid: "1" } },
      { params: { id: "45", cid: "1" } },
      { params: { id: "46", cid: "1" } },
      { params: { id: "47", cid: "1" } },
      { params: { id: "48", cid: "1" } },
      { params: { id: "49", cid: "1" } },
      { params: { id: "50", cid: "1" } },
      { params: { id: "51", cid: "1" } },
      { params: { id: "52", cid: "1" } },
      { params: { id: "53", cid: "1" } },
      { params: { id: "54", cid: "1" } },
      { params: { id: "55", cid: "1" } },
      { params: { id: "56", cid: "1" } },
      { params: { id: "57", cid: "1" } },
      { params: { id: "58", cid: "1" } },
      { params: { id: "59", cid: "1" } },
      { params: { id: "60", cid: "1" } },
      { params: { id: "61", cid: "1" } },
      { params: { id: "62", cid: "1" } },
      { params: { id: "63", cid: "1" } },
      { params: { id: "64", cid: "1" } },
      { params: { id: "65", cid: "1" } },
      { params: { id: "66", cid: "1" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const cid = context.params.cid;
  const book_data = [];
  const q = query(
    collection(db, "bible"),
    where("book", "==", parseInt(id)),
    where("chapter", "==", parseInt(cid)),
    orderBy("verse", "asc")
  );
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
