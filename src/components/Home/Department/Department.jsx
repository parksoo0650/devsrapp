import DepartmentItem from '../DepartmentItem/DepartmentItem';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Department.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const Department = () => {
  return (
    <>
      <section className='section pt0'>
        <div className='title'>성락교회 미래세대</div>

        <Swiper
          className={cn('Department')}
          spaceBetween={7}
          slidesPerView={'auto'}
          resistanceRatio={0}
          pagination={false}
        >
          <SwiperSlide className={cn('SwiperSlide')}>
            <DepartmentItem
              href='youtube://channel/UCkrWb-HCk3fA7szpbmLHTmw'
              imgSrc='/images/bwm_logo.png'
              title='청년부'
            />
          </SwiperSlide>

          <SwiperSlide className={cn('SwiperSlide')}>
            <DepartmentItem
              href='youtube://channel/UCW6bF9L0ZK__Tlwl19B0FYQ'
              imgSrc='/icons/thumb_cba.svg'
              title='대학부'
            />
          </SwiperSlide>

          <SwiperSlide className={cn('SwiperSlide')}>
            <DepartmentItem
              href='youtube://channel/UCcD3GeLh6aBwBN_A5yr4pEg'
              imgSrc='/icons/thumb_high.svg'
              title='고등부'
            />
          </SwiperSlide>

          <SwiperSlide className={cn('SwiperSlide')}>
            <DepartmentItem
              href='youtube://channel/UCDzjhPXk9IypRuCopoFDvlg'
              imgSrc='/icons/thumb_secondary.svg'
              title='중등부'
            />
          </SwiperSlide>

          <SwiperSlide className={cn('SwiperSlide')}>
            <DepartmentItem
              href='youtube://channel/UCVZgyTaNK1q-CKM481MO35A'
              imgSrc='/icons/thumb_elementary.svg'
              title='어린이부'
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Department;
