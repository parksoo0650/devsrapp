import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import Loading from '../src/components/Loading';
import Share from '../src/components/Share';
import HomeBar from '../src/components/HomeBar';
import useSWR from 'swr';
import Popup from 'reactjs-popup';
import Department from '../src/components/Home/Department/Department';
import Praise from '../src/components/Home/Praise/Praise';
import QuickMenu from '../src/components/Home/QuickMenu/QuickMenu';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Home = () => {
  const router = useRouter();
  const { data: dataShorts } = useSWR('/api/contents?kind=shorts');
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
  const opts = {
    width: '320px',
    height: '200px',
    playerVars: {
      loop: 1,
      controls: 1,
    },
  };
  const onPlayerReady = (event) => {
    event.target.mute();
    event.target.setVolume(0);
    event.target.playVideo();
  };

  let onDay = date.getDay() == 0 || date.getDay() == 6 ? 1 : date.getDay();
  let onmCnt = 0;
  let onbCnt = 0;
  let ontCnt = 0;
  let tueCnt = 0;
  let wed1Cnt = 0;
  let wed2Cnt = 0;
  let friCnt = 0;

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

        <div className={liveDatas.videoId ? 'section pt0' : 'section pt25'}>
          <div className='title'>주중 콘텐츠</div>
          <div className='days_wrap'>
            <ul className='day_list'>
              <li
                onClick={() => {
                  setWeeks('월');
                }}
                className={weeks == '월' ? 'on' : ''}
              >
                월요일
              </li>
              <li
                onClick={() => {
                  setWeeks('화');
                }}
                className={weeks == '화' ? 'on' : ''}
              >
                화요일
              </li>
              <li
                onClick={() => {
                  setWeeks('수');
                }}
                className={weeks == '수' ? 'on' : ''}
              >
                수요일
              </li>
              <li
                onClick={() => {
                  setWeeks('목');
                }}
                className={weeks == '목' ? 'on' : ''}
              >
                목요일
              </li>
              <li
                onClick={() => {
                  setWeeks('금');
                }}
                className={weeks == '금' ? 'on' : ''}
              >
                금요일
              </li>
            </ul>
            <ul className='con_list'>
              {dataOncontents?.contents.map((doc, i) => {
                let dateStr = doc.publishedAt.replace(/\./g, '-');
                let dayOfWeek = week[new Date(dateStr).getDay()];

                if (dayOfWeek == weeks) {
                  if (doc.subKind === 'onm' && onmCnt == 0) {
                    onmCnt = onmCnt + 1;
                    return (
                      <li
                        key={doc.id}
                        onClick={() => {
                          router.push(
                            `/onprayerdetail?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=${doc.subKind}`,
                            '/onprayerdetail'
                          );
                        }}
                      >
                        <div className='movie'>
                          <img
                            style={{ width: '100%' }}
                            src={`/images/onm_main.jpeg`}
                          />
                        </div>
                        <div className='info'>
                          <div className='tit'>{doc.name}</div>
                          <div className='date'>{doc.publishedAt}</div>
                        </div>
                      </li>
                    );
                  }
                  if (doc.subKind === 'onb' && onbCnt == 0) {
                    onbCnt = onbCnt + 1;
                    return (
                      <li
                        key={doc.id}
                        onClick={() => {
                          router.push(
                            `/onbibledetail?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=${doc.subKind}`,
                            '/onbibledetail'
                          );
                        }}
                      >
                        <div className='movie'>
                          <img
                            style={{ width: '100%' }}
                            src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${doc.image}/public`}
                          />
                        </div>
                        <div className='info'>
                          <div className='tit'>{doc.name}</div>
                          <div className='date'>{doc.publishedAt}</div>
                        </div>
                      </li>
                    );
                  }
                  if (doc.subKind === 'ont' && ontCnt == 0) {
                    ontCnt = ontCnt + 1;
                    return (
                      <li
                        key={doc.id}
                        onClick={() => {
                          router.push(
                            `/onthreedetail?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=${doc.subKind}`,
                            '/onthreedetail'
                          );
                        }}
                      >
                        <div className='movie'>
                          <img
                            style={{ width: '100%' }}
                            src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${doc.image}/public`}
                          />
                        </div>
                        <div className='info'>
                          <div className='tit'>{doc.name}</div>
                          <div className='date'>{doc.publishedAt}</div>
                        </div>
                      </li>
                    );
                  }
                  if (doc.subKind === 'tue' && tueCnt == 0) {
                    tueCnt = tueCnt + 1;
                    return (
                      <li
                        key={doc.id}
                        onClick={() => {
                          router.push(
                            `/returnDetail?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=${doc.subKind}`,
                            '/returnDetail'
                          );
                        }}
                      >
                        <div className='movie'>
                          <img
                            style={{ width: '100%' }}
                            src={`/images/tue.jpeg`}
                          />
                        </div>
                        <div className='info'>
                          <div className='tit'>{doc.name}</div>
                          <div className='date'>{doc.publishedAt}</div>
                        </div>
                      </li>
                    );
                  }
                  if (doc.subKind === 'fri' && friCnt == 0) {
                    friCnt = friCnt + 1;
                    return (
                      <li
                        key={doc.id}
                        onClick={() => {
                          router.push(
                            `/prayerDetail?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=${doc.subKind}`,
                            '/prayerDetail'
                          );
                        }}
                      >
                        <div className='movie'>
                          <img
                            style={{ width: '100%' }}
                            src={`/images/fri.jpeg`}
                          />
                        </div>
                        <div className='info'>
                          <div className='tit'>{doc.name}</div>
                          <div className='date'>{doc.publishedAt}</div>
                        </div>
                      </li>
                    );
                  }
                  if (doc.subKind === 'wed1' && wed1Cnt == 0) {
                    wed1Cnt = wed1Cnt + 1;
                    return (
                      <li
                        key={doc.id}
                        onClick={() => {
                          router.push(
                            `/sermondetail?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=wed`,
                            '/sermondetail'
                          );
                        }}
                      >
                        <div className='movie'>
                          <img
                            style={{ width: '100%' }}
                            src={`/images/wed1.jpeg`}
                          />
                        </div>
                        <div className='info'>
                          <div className='tit'>{doc.name}</div>
                          <div className='date'>{doc.publishedAt}</div>
                        </div>
                      </li>
                    );
                  }
                  if (doc.subKind === 'wed2' && wed2Cnt == 0) {
                    wed2Cnt = wed2Cnt + 1;
                    return (
                      <li
                        key={doc.id}
                        onClick={() => {
                          router.push(
                            `/prayerDetail?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=wed`,
                            '/prayerDetail'
                          );
                        }}
                      >
                        <div className='movie'>
                          <img
                            style={{ width: '100%' }}
                            src={`/images/wed2.jpeg`}
                          />
                        </div>
                        <div className='info'>
                          <div className='tit'>{doc.name}</div>
                          <div className='date'>{doc.publishedAt}</div>
                        </div>
                      </li>
                    );
                  }
                }
              })}
              {weeks == '월' && (
                <Popup
                  trigger={
                    <li>
                      <div className='movie'>
                        <img src='/images/shorts_main.jpg' />
                      </div>
                      <div className='info'>
                        <div className='tit'>
                          {dataShorts?.contents[0]?.name}
                        </div>
                        <div className='date'></div>
                      </div>
                    </li>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <div className='modal'>
                      <div className='header'>
                        <button className='close' onClick={close}>
                          <img src='/icons/btn_close_w.svg' alt='닫기' />
                        </button>
                        <Share
                          title={dataShorts?.contents[0]?.name}
                          thum={`/images/kakao_shorts.jpg`}
                          vid={dataShorts?.contents[0]?.videoId}
                          type='white'
                        />
                      </div>
                      <div className='content'>
                        <YouTube
                          videoId={dataShorts?.contents[0]?.videoId}
                          opts={opts}
                          containerClassName='iframe_wrap'
                          onReady={onPlayerReady}
                        />
                      </div>
                    </div>
                  )}
                </Popup>
              )}
            </ul>
          </div>
        </div>

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
