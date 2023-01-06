import { useRouter } from 'next/router';
import useSWR from 'swr';
import Popup from 'reactjs-popup';
import Share from '../Share';
import YouTube from 'react-youtube';
import WeekdayContentItem from './WeekdayContentItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function WeekdayContentBody({ weeks, dataOncontents }) {
  const { data: dataShorts } = useSWR('/api/contents?kind=shorts');

  const week = ['일', '월', '화', '수', '목', '금', '토'];

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

  let onmCnt = 0;
  let onbCnt = 0;
  let ontCnt = 0;
  let wed2Cnt = 0;
  let friCnt = 0;

  return (
    <Swiper spaceBetween={15} slidesPerView={1.3} className='px-[30px]'>
      {dataOncontents?.contents.map((doc, i) => {
        let dateStr = doc.publishedAt.replace(/\./g, '-');
        let dayOfWeek = week[new Date(dateStr).getDay()];

        if (dayOfWeek == weeks) {
          /**
           * 온특새.
           */
          if (doc.subKind === 'onm' && onmCnt == 0) {
            onmCnt = onmCnt + 1;
            return (
              <SwiperSlide key={doc.id}>
                <WeekdayContentItem
                  doc={doc}
                  type='onprayerdetail'
                  imageSrc='/images/onm_main.jpeg'
                />
              </SwiperSlide>
            );
          }

          /**
           * 온성경.
           */
          if (doc.subKind === 'onb' && onbCnt == 0) {
            onbCnt = onbCnt + 1;
            return (
              <SwiperSlide key={doc.id}>
                <WeekdayContentItem
                  doc={doc}
                  type='onbibledetail'
                  imageSrc={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${doc.image}/public`}
                />
              </SwiperSlide>
            );
          }

          /**
           * 온3분.
           */
          if (doc.subKind === 'ont' && ontCnt == 0) {
            ontCnt = ontCnt + 1;
            return (
              <SwiperSlide key={doc.id}>
                <WeekdayContentItem
                  doc={doc}
                  type='onthreedetail'
                  imageSrc={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${doc.image}/public`}
                />
              </SwiperSlide>
            );
          }

          /**
           * 금요기도회.
           */
          if (doc.subKind === 'fri' && friCnt == 0) {
            friCnt = friCnt + 1;
            return (
              <SwiperSlide key={doc.id}>
                <WeekdayContentItem
                  doc={doc}
                  type='prayerDetail'
                  imageSrc='/images/fri.jpeg'
                />
              </SwiperSlide>
            );
          }

          /**
           * 수요저녁예배 및 기도회.
           */
          if (doc.subKind === 'wed2' && wed2Cnt == 0) {
            wed2Cnt = wed2Cnt + 1;
            return (
              <SwiperSlide key={doc.id}>
                <WeekdayContentItem
                  doc={doc}
                  type='prayerDetail'
                  imageSrc='/images/wed2.jpeg'
                />
              </SwiperSlide>
            );
          }
        }
      })}

      {/**
       * 1분 은혜.
       */}
      {weeks == '월' && (
        <SwiperSlide>
          <Popup
            trigger={
              <li>
                <div className=''>
                  <img src='/images/shorts_main.jpg' />
                </div>
                <div className=''>
                  <div className='text-lg font-semibold pt-4'>
                    {dataShorts?.contents[0]?.name}
                  </div>
                  <div className='text-xs font-normal'>
                    {dataShorts?.contents[0]?.publishedAt}
                  </div>
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
        </SwiperSlide>
      )}
    </Swiper>
  );
}
