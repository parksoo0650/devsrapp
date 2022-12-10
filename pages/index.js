import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import useSWR from 'swr';
import Jumbotron from '../src/components/Home/Jumbotron';
import WeekdayContent from '../src/components/Home/WeekdayContent';
import QuickMenu from '../src/components/Home/QuickMenu';
import Praise from '../src/components/Home/Praise';
import Department from '../src/components/Home/Department';
import HomeBar from '../src/components/HomeBar';
import ClickToMovePage from '../src/components/molecule/ClickToMovePage';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Home() {
  const { data: dataSermon } = useSWR('/api/contents?kind=sermon');
  const { data: dataOncontents } = useSWR('/api/contents?kind=oncontents');

  const date = new Date();
  const hours = new Date().getHours();

  const [isLoading, setIsLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [liveDatas, setLiveDatas] = useState({
    videoId: '',
    title: '',
    thumbnails: '',
    publishedAt: '',
    subKind: '',
  });

  const getLiveData = async () => {
    const videoTitle = '';
    const videoDateStr = '';
    const thumbnails = '';
    const videoIdStr = '';
    const subKind = '';

    videoTitle = dataSermon?.contents[0]?.name;
    videoDateStr = dataSermon?.contents[0]?.publishedAt;
    videoIdStr = dataSermon?.contents[0]?.videoId;
    thumbnails = dataSermon?.contents[0]?.image;
    subKind = dataSermon?.contents[0]?.subKind;

    if (date.getDay() == 0 && hours > 6 && hours < 13) {
      setIsLive(true);
    }

    setLiveDatas({
      videoId: videoIdStr,
      title: videoTitle,
      thumbnails: thumbnails,
      publishedAt: videoDateStr,
      subKind: subKind,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getLiveData();
  }, [dataSermon, dataOncontents]);

  return (
    <>
      {/* 좌측 상단 성락교회 로고 (헤더) */}
      {/* <AppHeader isLive={isLive} dataSermon={dataSermon} /> */}

      {/* 대형 슬라이드 */}
      <Jumbotron liveDatas={liveDatas} />

      <ClickToMovePage
        route='/'
        content={
          <div className='flex items-center justify-between px-7 h-16 bg-[#d38730]'>
            <span className='text-base font-medium text-white'>
              교회를 위한 기도제목 바로가기
            </span>

            <div className='w-4 h-4 bg-[url("/icons/right_arrow_white.svg")] bg-no-repeat bg-contain bg-center' />
          </div>
        }
      />

      {/* 53주년 예배순서 바로가기 */}
      {/* <div onClick={() => router.push('/Programme53')}>
        <img src='/images/banner_53_quick.png' />
      </div> */}

      {/* 주중 콘텐츠 */}
      <WeekdayContent liveDatas={liveDatas} dataOncontents={dataOncontents} />

      {/* 이번 주 설교 */}
      {/* <SermonThisWeek liveDatas={liveDatas} dataSermon={dataSermon} /> */}

      {/* 퀵 메뉴 7개 */}
      <QuickMenu />

      {/* 교회 표어 */}
      <div className='mdbanner'>
        <img src='/icons/md_banner2.png' />
      </div>

      {/* 은혜로운 찬양 */}
      <Praise />

      {/* 성락교회 미래세대 */}
      <Department />

      {/* blank */}
      <div
        style={{
          height: '82px',
        }}
      />

      {/* 하단 메뉴 바 */}
      <HomeBar />
    </>
  );
}
