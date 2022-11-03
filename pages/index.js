import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import HomeBar from '../src/components/HomeBar';
import useSWR from 'swr';
import AppHeader from '../src/components/Home/AppHeader/AppHeader';
import SermonThisWeek from '../src/components/Home/SermonThisWeek/SermonThisWeek';
import WeekdayContent from '../src/components/Home/WeekdayContent/WeekdayContent';
import QuickMenu from '../src/components/Home/QuickMenu/QuickMenu';
import Praise from '../src/components/Home/Praise/Praise';
import Department from '../src/components/Home/Department/Department';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Home() {
  const { data: dataSermon } = useSWR('/api/contents?kind=sermon');
  const { data: dataOncontents } = useSWR('/api/contents?kind=oncontents');

  const date = new Date();
  const hours = new Date().getHours();
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  const [isLoading, setIsLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [weeks, setWeeks] = useState('');
  const [liveDatas, setLiveDatas] = useState({
    videoId: '',
    title: '',
    thumbnails: '',
    publishedAt: '',
    subKind: '',
  });

  let onDay = date.getDay() == 0 || date.getDay() == 6 ? 1 : date.getDay();

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
    setWeeks(week[onDay]);
    getLiveData();
  }, [dataSermon, dataOncontents]);

  return (
    <>
      {/* 좌측 상단 성락교회 로고 (헤더) */}
      <AppHeader isLive={isLive} dataSermon={dataSermon} />

      <div className='container'>
        {/* 이번 주 설교 */}
        <SermonThisWeek liveDatas={liveDatas} dataSermon={dataSermon} />

        {/* 주중 콘텐츠 */}
        <WeekdayContent
          liveDatas={liveDatas}
          weeks={weeks}
          setWeeks={setWeeks}
          dataOncontents={dataOncontents}
        />

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
      </div>
      {/* end of container */}

      {/* 하단 메뉴 바 */}
      <HomeBar />
    </>
  );
}
