import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function DepartmentSelect({ department, setDepartment }) {
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
      className='w-full px-[30px]'
      spaceBetween={24}
      slidesPerView='auto'
      // resistance={false}
    >
      {departments.map((_department, index) => (
        <SwiperSlide
          key={index}
          className='w-fit'
          onClick={() => setDepartment(_department)}
        >
          <span
            className={
              department == _department
                ? 'font-semibold text-base text-black'
                : 'font-semibold text-base text-[#a0a0a0]'
            }
          >
            {_department}
          </span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
