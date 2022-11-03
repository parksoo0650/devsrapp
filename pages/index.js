import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import Loading from '../src/components/Loading';
import Share from '../src/components/Share';
import HomeBar from '../src/components/HomeBar';
import useSWR from 'swr';
import Department from '../src/components/Home/Department/Department';
import Praise from '../src/components/Home/Praise/Praise';
import QuickMenu from '../src/components/Home/QuickMenu/QuickMenu';
import WeekdayContent from '../src/components/Home/WeekdayContent/WeekdayContent';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Home = () => {
  const router = useRouter();
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
      <header>
        <div className='inner'>
          <h1
            className='logo'
            onClick={() => {
              router.push('/');
            }}
          >
            <img src='../images/logo.svg' alt='성락교회' />
          </h1>
          {isLive ? (
            <div className='live'>
              라이브 <img src='/icons/ico_live.svg' alt='라이브' />
            </div>
          ) : (
            <>
              {dataSermon?.contents[0]?.subKind == 'live' && (
                <div className='live'>
                  라이브 <img src='/icons/ico_live.svg' alt='라이브' />
                </div>
              )}
            </>
          )}
        </div>
      </header>

      <div className='container'>
        {dataSermon?.contents[0] ? (
          <div className='section pt0'>
            <div className='movie_wrap'>
              <div
                onClick={() => {
                  router.push(
                    `/sermondetail?vid=${liveDatas.videoId}&vtit=${liveDatas.title}&vdate=${liveDatas.publishedAt}&kind=${liveDatas.subKind}`,
                    '/sermondetail'
                  );
                }}
              >
                <img
                  style={{ width: '100%' }}
                  src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${liveDatas?.thumbnails}/public`}
                />
              </div>
              <div className='info'>
                <Share
                  title={liveDatas.title}
                  thum='/images/kakao_def_new.jpg'
                  vid={liveDatas.videoId}
                />
                <div
                  className='tit'
                  onClick={() => {
                    router.push(
                      `/sermondetail?vid=${liveDatas.videoId}&vtit=${liveDatas.title}&vdate=${liveDatas.publishedAt}`,
                      '/sermondetail'
                    );
                  }}
                >
                  <a href='#'>{liveDatas.title}</a>
                </div>
                <div className='date'>{liveDatas.publishedAt}</div>
                {/* <div className="preacher">설교: 김성현 목사</div> */}
              </div>
            </div>
          </div>
        ) : (
          <div className='loading_box'>
            <Loading />
          </div>
        )}

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
};

export default Home;
