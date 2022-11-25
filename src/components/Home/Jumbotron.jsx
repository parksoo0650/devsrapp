import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css/pagination';

export default function Jumbotron({liveDatas}) {
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
    dots[0]?.style.display = 'flex';
    dots[0]?.style.justifyContent = 'center';

    const activatedDot = document.querySelectorAll(
      '.swiper-pagination-bullet-active'
    );
    activatedDot[0]?.style.backgroundColor = '#979797';
  }, []);

  SwiperCore.use([Autoplay])

  return (
    <Swiper
      className='w-screen'
      modules={[Pagination, Navigation, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{delay: 5000}}
      onSlideChange={() => {
        const activatedDot = document.querySelectorAll(
          '.swiper-pagination-bullet-active'
        );
        activatedDot[0]?.style.backgroundColor = '#979797';
      }}
    >
      {/* 53주년 배너 */}
      <SwiperSlide>
        <img
          className='w-full bg-no-repeat bg-cover bg-center'
          src='images/banner_53.png'
        />
      </SwiperSlide>

      {/* 주일 설교 */}
      <SwiperSlide className={`h-[${jumbotronSize.height}px]`}>
        <div
          className={`w-full h-full
          bg-no-repeat bg-cover bg-center
          bg-[url('images/jumbotron_sermon.png')]`}
        />
      </SwiperSlide>
    </Swiper>
  );
}
