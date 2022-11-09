import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function DepartmentSelect() {
  const departments = [
    '전체',
    '어린이부',
    '청소년부',
    '대학부',
    '청년부',
    'LSS',
  ];

  return (
    <Swiper
      className='w-full'
      // spaceBetween={15}
      slidesPerView='auto'
      // resistance={false}
    >
      {departments.map((department, index) => (
        <SwiperSlide key={index} className='w-fit'>
          <span className='font-semibold text-base text-center'>
            {department}
          </span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
