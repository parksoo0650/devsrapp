import React, { useState, useEffect } from 'react';
import Sheet from 'react-modal-sheet';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Loading from '../../../src/components/Loading';
import HomeBar from '../../../src/components/HomeBar';

import styles from './Bible.module.scss';
import classNames from 'classnames/bind';
import BibleList from '../../../src/components/Bible/BibleList/BibleList';
import BibleTabs from '../../../src/components/Bible/BibleTabs/BibleTabs';
import BibleHeader from '../../../src/components/Bible/BibleHeader/BibleHeader';

const cn = classNames.bind(styles);

const Post = ({ items, bid, cid }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isChapter, setIsChapter] = useState(cid);
  const [isBible, setIsBible] = useState(bid);
  const [bibleBook, setBibleBook] = useState('전체');
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
        {/* 성경 헤더: 설정, 드롭다운, 검색 */}
        <BibleHeader
          setIsOpen={setIsOpen}
          bid={bid}
          cid={cid}
          isActive={isActive}
        />

        <div className='shadow'></div>
        <style jsx>{`
          .shadow {
            display: ${isActive ? 'block' : 'none'};
          }
        `}</style>

        {/* 드롭다운 누르면 나오는 모달창 */}
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

                {/* 전체, 구약, 신약 */}
                <BibleTabs bibleBook={bibleBook} setBibleBook={setBibleBook} />

                {/* 탭 밑에 표시되는 성경 리스트 */}
                <BibleList
                  bibleBook={bibleBook}
                  isBible={isBible}
                  setIsBible={setIsBible}
                  setBibleBook={setBibleBook}
                />
              </div>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop />
        </Sheet>
        {/* end of Modal(Sheet) */}

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
