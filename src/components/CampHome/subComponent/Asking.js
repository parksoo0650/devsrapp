import classNames from 'classnames/bind';
import styles from './Asking.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AskingItem from './AskingItem';
import Link from "next/link";

const cn = classNames.bind(styles);

const Asking = () => {
  return (
    <section className={cn('Asking')}>
      <div>
        <h3>문의하기</h3>
        <Link href={`/community`}>
          <a>
            <span>전체보기</span>
          </a>
        </Link>
      </div>

      <div>
      문의하기 게시판은 8월 3일 부터 이용이 가능합니다.
      </div>

      {/* <Swiper
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
      </Swiper> */}
    </section>
  );
};

export default Asking;
