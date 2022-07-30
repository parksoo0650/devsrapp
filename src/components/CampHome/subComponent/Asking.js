import classNames from 'classnames/bind';
import styles from './Asking.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AskingItem from './AskingItem';

const cn = classNames.bind(styles);

const Asking = () => {
  return (
    <section className={cn('Asking')}>
      <div>
        <h3>문의하기</h3>
        <span>전체보기</span>
      </div>

      <Swiper
        className={cn('Swiper')}
        spaceBetween={20}
        slidesPerView={1.5}
        resistanceRatio={0}
        pagination={false}
      >
        <SwiperSlide>
          <AskingItem
            preview='성락교회 수련회 궁금해요! 성락교회 수련회 궁...'
            author='성락교회 사랑'
          />
        </SwiperSlide>

        <SwiperSlide>
          <AskingItem
            preview='성락교회 수련회 궁금해요! 성락교회 수련회 궁...'
            author='성락교회 사랑'
          />
        </SwiperSlide>

        <SwiperSlide>
          <AskingItem
            preview='성락교회 수련회 궁금해요! 성락교회 수련회 궁...'
            author='성락교회 사랑'
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Asking;
