import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css/pagination';
import useSWR from 'swr';
import Skeleton from '../molecule/Skeleton';
import ParsingUtil from '../../utils/ParsingUtil';
import DateUtil from '../../utils/DateUtil';

export default function Jumbotron() {
  const router = useRouter();

  const [height, setHeight] = useState(null);
  useEffect(() => {
    setHeight(() => window.innerWidth * 1.333325);
  }, []);

  const { data } = useSWR('/api/contents?kind=sermon');
  const { fullName, publishedAt, videoId, category, title, scripture } =
    ParsingUtil.parseSermonData(data);

  SwiperCore.use([Autoplay]);

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
    >
      {/* 주일 설교 */}
      <SwiperSlide className={`h-[${height}px]`}>
        <div
          className={`w-full h-full bg-no-repeat bg-cover bg-center
          bg-[url('images/jumbotron_sermon.png')] px-8`}
          onClick={() => {
            router.push(
              `/sermondetail?vid=${videoId}&vtit=${fullName}&vdate=${publishedAt}&kind=${category}`,
              '/sermondetail'
            );
          }}
        >
          <div className='absolute top-72'>
            {/* 라이브 뱃지 */}
            {title ? (
              <p
                className={`text-xs text-white px-[11px] py-[5.5px] mb-3
                inline-block rounded-[100px] font-semibold ${
                  DateUtil.isLive ? 'bg-[#D43030]/70' : 'bg-[#D48830]/70'
                }`}
              >
                <span>{DateUtil.isLive ? '예배실황' : '주일예배'}</span>
              </p>
            ) : (
              <Skeleton.Badge />
            )}

            {/* 설교 제목 */}
            {title ? (
              <p
                className='text-white font-extrabold text-[32px] mb-3 max-h-[80px]
                tracking-[-0.5px] break-keep max-w-xs leading-10 text-ellipsis overflow-hidden'
              >
                {title}
              </p>
            ) : (
              <Skeleton.Title />
            )}

            {/* 설교 본문 */}
            {scripture ? (
              <p className='text-[#eeeeee] text-[14px] leading-6 font-bold'>
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
    </Swiper>
  );
}
