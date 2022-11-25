import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import HomeBar from '../src/components/HomeBar';
import SiteMapDropdown from '../src/components/SiteMapDropdown/SiteMapDropdown';

const siteMap = {
  worship: {
    id: 1,
    title: '예배',
    pathname: '/sermonmain',
    subCategory: [
      { title: '주일설교', query: { kind: 'def' } },
      { title: '1,3부 예배', query: { kind: 'sun' } },
      { title: '수요예배', query: { kind: 'wed' } },
    ],
  },
  praise: {
    id: 2,
    title: '찬양',
    pathname: '/praisemain',
    subCategory: [
      { title: '주일 예배 찬양', query: { kind: 'p11' } },
      { title: '주일 연합 예배 찬양', query: { kind: 'p15' } },
      { title: '성가대', query: { kind: 'prc' } },
      { title: '헌금송', query: { kind: 'pro' } },
    ],
  },
  bible: {
    title: '성경',
  },
  contents: {
    id: 3,
    title: '콘텐츠',
    pathname: '/onmain',
    subCategory: [
      { title: '온시리즈', query: '/onmain' },
      { title: '환언특강', query: '/returnMain' },
      { title: '주중 기도회', query: '/prayerMain' },
      { title: '1분 은혜', query: '/faith' },
    ],
  },
  videos: { title: '행사 영상' },
  camp2022: { title: '2022 수련회', pathname: '/2022-summer-camp' },
};

export default function SiteMap() {
  const [state, setState] = useState(0);
  const [lsBible, setLsBible] = useState('1');
  const [lsChapter, setLsChapter] = useState('1');

  const handleDropdown = (id) => {
    state == id ? setState(() => 0) : setState(() => id);
  };

  useEffect(() => {
    if (localStorage.getItem('bible')) {
      setLsBible(localStorage.getItem('bible'));
    } else {
      setLsBible('1');
    }
    if (localStorage.getItem('chapter')) {
      setLsChapter(localStorage.getItem('chapter'));
    } else {
      setLsChapter('1');
    }
  }, []);

  return (
    <>
      <div>
        {/* blank */}
        <div className='h-3' />

        <SiteMapDropdown
          content={siteMap.worship}
          isOpen={state == 1}
          handleDropdown={handleDropdown}
        />

        <SiteMapDropdown
          content={siteMap.praise}
          isOpen={state == 2}
          handleDropdown={handleDropdown}
        />

        <SiteMapDropdown
          content={siteMap.bible}
          isOpen={true}
          handleDropdown={handleDropdown}
          bibleUrl={`/chapter/${lsBible}/${lsChapter}`}
        />

        <SiteMapDropdown
          content={siteMap.contents}
          isOpen={state == 3}
          handleDropdown={handleDropdown}
          isContents={true}
        />

        <SiteMapDropdown
          content={siteMap.videos}
          isOpen={true}
          handleDropdown={handleDropdown}
          videosUrl='/'
        />

        <SiteMapDropdown
          content={siteMap.camp2022}
          isOpen={true}
          handleDropdown={handleDropdown}
          campUrl='/2022-summer-camp'
        />

        {/* blank */}
        <div className='h-[80px]' />
      </div>

      <HomeBar />
    </>
  );
}
