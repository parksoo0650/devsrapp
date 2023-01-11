import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css/pagination';
import Skeleton from '../molecule/Skeleton';

export default function Jumbotron({ liveDatas, isLive }) {
  const router = useRouter();

  const [jumbotronSize, setJumbotronSize] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    // Get jumbotron width and height.
    setJumbotronSize({
      width: window.innerWidth,
      height: window.innerWidth * 1.333325,
    });

    // Swiper dot settings.
    const dots = document.querySelectorAll('.swiper-pagination');
    const activatedDot = document.querySelectorAll(
      '.swiper-pagination-bullet-active'
    );
  }, []);

  SwiperCore.use([Autoplay]);

  /**
   * 왜 split 도중 undefined가 될까, 주일예배 탭도 마찬가지..
   * 우선 모든 split str에 대하여 undefined 방지. 대신 빈 str 할당.
   */
  let title = '';
  let titleKr = '';
  let temp = '';
  let temp2 = '';
  let scripture = '';

  if (isLive) {
    title = liveDatas.title || '';
    titleKr = title.split('(')[0];
    temp = title.split('(')[1] || '';
    scripture = temp.split(')')[0] || '';

    console.log('String 처리:', temp, temp2, scripture);
  } else {
    title = liveDatas.title || '';
    titleKr = title.split('(')[0];
    temp = title.split('(')[1] || '';
    temp2 = temp.split(')')[1] || '';
    scripture = temp2.trim();

    console.log('String 처리:', title, titleKr, temp, temp2, scripture);
  }

  return (
    <Swiper
      className='w-screen'
      modules={[Pagination, Navigation, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      onSlideChange={() => {
        const activatedDot = document.querySelectorAll(
          '.swiper-pagination-bullet-active'
        );
        // activatedDot[0]?.style.backgroundColor = '#979797';
      }}
    >
      {/* 주일 설교 */}
      <SwiperSlide className={`h-[${jumbotronSize.height}px]`}>
        <div
          className={`w-full h-full
          bg-no-repeat bg-cover bg-center
          bg-[url('images/jumbotron_sermon.png')]
          px-8`}
          onClick={() => {
            router.push(
              `/sermondetail?vid=${liveDatas.videoId}&vtit=${liveDatas.title}&vdate=${liveDatas.publishedAt}&kind=${liveDatas.subKind}`,
              '/sermondetail'
            );
          }}
        >
          <div className='absolute top-72'>
            {titleKr ? (
              <p
                className={`text-xs text-white px-[11px] py-[5.5px] mb-3
                inline-block rounded-[100px] font-semibold ${
                  isLive ? 'bg-[#D43030]/70' : 'bg-[#D48830]/70'
                }`}
              >
                <span>{isLive ? '예배실황' : '주일예배'}</span>
              </p>
            ) : (
              <Skeleton.Badge />
            )}

            {titleKr ? (
              <p
                className='text-white font-bold text-[32px] mb-3 max-h-[80px]
                tracking-[-0.5px] break-keep max-w-xs leading-10 text-ellipsis overflow-hidden'
              >
                {titleKr}
              </p>
            ) : (
              <Skeleton.Title2 />
            )}

            {scripture ? (
              <p className='text-[#eeeeee] text-[14px] leading-6 font-semibold'>
                {scripture} <br />
                김성현 감독님
              </p>
            ) : (
              <Skeleton.Description />
            )}
          </div>
        </div>
      </SwiperSlide>

      {/* 크리스마스 배너 */}
      <SwiperSlide>
        <img
          className='w-full bg-no-repeat bg-cover bg-center'
          src='images/jumbotron_christmas.png'
        />
      </SwiperSlide>

      {/* 53주년 배너 */}
      {/* <SwiperSlide>
        <Link href='https://youtu.be/CzBmd0QkSeM'>
          <a>
            <img
              className='w-full bg-no-repeat bg-cover bg-center'
              src='images/banner_53.png'
            />
          </a>
        </Link>
      </SwiperSlide> */}
    </Swiper>
  );
}
