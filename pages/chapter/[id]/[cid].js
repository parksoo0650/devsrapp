import React, { useState, useEffect } from "react";
import Sheet from "react-modal-sheet";
import { useRouter } from "next/router";
import Link from "next/link";
import { BookConsumer } from "../../../src/components/bibleProvider";
import Loading from "../../../src/components/Loading";
import HomeBar from "../../../src/components/HomeBar";

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
                {/* <li onClick={handleToggle}>
                  <img src="/icons/ico_setting.svg" alt="설정" />
                </li> */}
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
              <img className="btn_left" src="/icons/ico_left.svg" alt="이전" />
            </a>
          </Link>
          <Link href={`/chapter/${bid}/${parseInt(cid) + 1}`}>
            <a>
              <img className="btn_right" src="/icons/ico_right.svg" alt="다음" />
            </a>
          </Link>
        </div>
      </div>
      <HomeBar />
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      // { params: { id: "1", cid: "1" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'http://localhost:3000' : 'https://srapp.vercel.app';

  const id = context.params.id;
  const cid = context.params.cid;

  // const res = await fetch('http://localhost:3000/api/bible');
  const response = await fetch(`${server}/api/bible?b=${id}&c=${cid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const json = await response.json();

  return {
    props: {
      items: json.bibles,
      bid: id,
      cid: cid
    },
  };
}

export default Post;
