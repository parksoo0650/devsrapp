import classNames from 'classnames/bind';
import styles from './SungrakInsta.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SungrakInstaItem from './SungrakInstaItem';

const cn = classNames.bind(styles);

const SungrakInsta = () => {
  return (
    <section className={cn('SungrakInsta')}>
      <div>
        <h3>성락인스타</h3>
        <span>전체보기</span>
      </div>

      <Swiper
        className={cn('Swiper')}
        spaceBetween={10}
        slidesPerView={2.2}
        resistanceRatio={0}
        pagination={false}
      >
        <SwiperSlide>
          <SungrakInstaItem
            author='성락교회 사랑'
            preview='성락교회 수련회 함께 할 수 있어 너무 행복해요~...'
          />
        </SwiperSlide>

        <SwiperSlide>
          <SungrakInstaItem
            author='성락교회 사랑'
            preview='성락교회 수련회 함께 할 수 있어 너무 행복해요~...'
          />
        </SwiperSlide>

        <SwiperSlide>
          <SungrakInstaItem
            author='성락교회 사랑'
            preview='성락교회 수련회 함께 할 수 있어 너무 행복해요~...'
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SungrakInsta;
