import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import styles from './Praise.module.scss';
import classNames from 'classnames/bind';
import useSWR from 'swr';

const cn = classNames.bind(styles);

const Praise = () => {
  const { data: dataPraise } = useSWR('/api/contents?kind=praise');

  return (
    <div className='section'>
      <div className={cn('title')}>은혜로운 찬양</div>

      <Link href='/praisemain'>
        <a className='more'>전체보기</a>
      </Link>

      <Swiper
        className={cn('slide_wrap')}
        spaceBetween={10}
        slidesPerView={'auto'}
        resistanceRatio={0}
        pagination={false}
      >
        {dataPraise?.contents.map((doc, i) => {
          return (
            <SwiperSlide className={cn('movie_wrap')} key={doc.id}>
              <div
                onClick={() => {
                  router.push(
                    `/praisedetail?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=${doc.subKind}`,
                    '/praisedetail'
                  );
                }}
              >
                <div className='movie_thumb'>
                  <img
                    style={{ width: '100%' }}
                    src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${doc.image}/public`}
                  />
                </div>
                <div className={cn('info')}>
                  <div className={cn('tit')}>
                    <a href='#'>{doc.name}</a>
                  </div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div className={cn('date')} style={{ fontWeight: 'bold' }}>
                      {doc.description}
                    </div>
                    <div className={cn('date')}>{doc.publishedAt}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Praise;
