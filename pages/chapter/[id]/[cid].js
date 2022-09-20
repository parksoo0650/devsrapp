import React, { useState, useEffect } from 'react';
import Sheet from 'react-modal-sheet';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BookConsumer } from '../../../src/components/bibleProvider';
import Loading from '../../../src/components/Loading';
import HomeBar from '../../../src/components/HomeBar';

import styles from './Bible.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const Post = ({ items, bid, cid }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isChapter, setIsChapter] = useState(cid);
  const [isBible, setIsBible] = useState(bid);
  const [bibleBook, setBibleBook] = useState('구약');
  const handleToggle = () => {
    setActive(!isActive);
  };

  if (router.isFallback) {
    return <Loading />;
  }

  useEffect(() => {
    localStorage.setItem('bible', bid);
    localStorage.setItem('chapter', cid);
  }, [router]);

  return (
    <>
      <div className={cn('container', 'BibleContainer')}>
        <BookConsumer>
          {({ book_name }) => (
            // 성경 페이지의 헤더(탑) 부분
            <div className={cn('top_area', 'Header')}>
              {/* 성경 환경 설정 (Settings)  */}
              <div className={cn('Settings')} />

              {/* 성경 이름과 장 표시 드롭다운 */}
              <div
                className={cn('top_title', 'txt_left', 'Dropdown')}
                onClick={() => setIsOpen(true)}
              >
                <div className={cn('DropdownText')}>
                  {book_name[bid]} {cid}장{' '}
                </div>
                <span className={cn('DropdownArrow')} />
              </div>

              {/* 검색 버튼 */}
              <Link href={`/search`}>
                <a>
                  <div alt='검색' className={cn('Search')} />
                </a>
              </Link>

              {/* <ul className='tool_list'>
                <li onClick={handleToggle}>
                  <img src='/icons/ico_setting.svg' alt='설정' />
                </li>
                <Link href={`/search`}>
                  <a>
                    <li>
                      <img src='/icons/ico_search.svg' alt='검색' />
                    </li>
                  </a>
                </Link>
              </ul> */}

              <div className={isActive ? 'txt_control' : 'txt_control hide'}>
                <div className='tit'>
                  <strong>텍스트 크기</strong>
                  <span>16pt</span>
                </div>
                <ul className='size'>
                  <li>가</li>
                  <li>
                    <strong>가</strong>
                  </li>
                </ul>
              </div>
            </div>
            // end of top_area
          )}
        </BookConsumer>

        <div className='shadow'></div>
        <style jsx>{`
          .shadow {
            display: ${isActive ? 'block' : 'none'};
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
              <div className={cn('layer_bible_read', 'Modal')}>
                <div className={cn('Header')}>
                  <button
                    className={cn('CloseButton')}
                    onClick={() => setIsOpen(false)}
                  />
                  <div className={cn('Title')}>성경 구절 찾기</div>
                  <div className={cn('Empty')} />
                </div>

                <ul className={cn('Tab')}>
                  <li
                    onClick={() => {
                      setBibleBook('구약');
                    }}
                    className={bibleBook == '구약' ? cn('on') : ''}
                  >
                    <span>
                      <p>구약</p>
                    </span>
                  </li>
                  <li
                    onClick={() => {
                      setBibleBook('신약');
                    }}
                    className={bibleBook == '신약' ? cn('on') : ''}
                  >
                    <span>
                      <p>신약</p>
                    </span>
                  </li>
                  <li
                    onClick={() => {
                      setBibleBook('장');
                    }}
                    className={bibleBook == '장' ? cn('on') : ''}
                  >
                    <span>
                      <p>장</p>
                    </span>
                  </li>
                </ul>

                <div className='tab_con'>
                  {/* 구약 */}
                  <BookConsumer>
                    {({ all_book }) => (
                      <ul
                        className={
                          bibleBook == '구약'
                            ? cn('BookList')
                            : 'book_list hide'
                        }
                      >
                        {all_book.slice(0, 39).map((book, i) => (
                          <li
                            key={i}
                            className={isBible == i + 1 ? 'on' : ''}
                            onClick={() => {
                              setIsBible(i + 1);
                              setBibleBook('장');
                            }}
                          >
                            <span>{book}</span>
                            <span className={cn('BookDropdownArrowDown')} />
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
                          bibleBook == '신약'
                            ? cn('BookList')
                            : 'book_list hide'
                        }
                      >
                        {all_book.slice(39, 67).map((book, i) => (
                          <li
                            key={i}
                            className={isBible == i + 40 ? 'on' : ''}
                            onClick={() => {
                              setIsBible(i + 40);
                              setBibleBook('장');
                            }}
                          >
                            <span>{book}</span>
                            <span className={cn('BookDropdownArrowDown')} />
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
                          bibleBook == '장'
                            ? cn('ChapterList')
                            : 'chapter_list hide'
                        }
                      >
                        {[...Array(book_cnt[isBible])].map((n, i) => (
                          <li
                            key={i}
                            className={isChapter == i + 1 ? 'on' : ''}
                            onClick={() => {
                              setIsChapter(i + 1);
                              setIsOpen(false);
                            }}
                          >
                            <Link href={`/chapter/${isBible}/${i + 1}`}>
                              <a>
                                <span>{i + 1}</span>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </BookConsumer>
                </div>
              </div>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop />
        </Sheet>

        <div className='section bible_con'>
          <ul className='verse_list'>
            {items.map((item, i) => (
              <li key={i}>
                <strong>{item.verse}.</strong> {item.content}
              </li>
            ))}
          </ul>
          {cid > 1 && (
            <Link href={`/chapter/${bid}/${parseInt(cid) - 1}`}>
              <a>
                <img
                  className='btn_left'
                  src='/icons/ico_left.svg'
                  alt='이전'
                />
              </a>
            </Link>
          )}
          <Link href={`/chapter/${bid}/${parseInt(cid) + 1}`}>
            <a>
              <img
                className='btn_right'
                src='/icons/ico_right.svg'
                alt='다음'
              />
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
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = await response.json();

  return {
    props: {
      items: json.bibles,
      bid: id,
      cid: cid,
    },
  };
}

export default Post;
