import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import FundamentalBoxed from '../templates/FundamentalBoxed';
import classNames from 'classnames/bind';
import styles from './Sub14Store.module.scss';
import { useEffect } from 'react';

const cn = classNames.bind(styles);

const Sub14Store = ({ title }) => {
  useEffect(() => {
    const dots = document.querySelector('.swiper-pagination');
    dots.style.display = 'flex';
    dots.style.justifyContent = 'center';

    const activatedDot = document.querySelectorAll(
      '.swiper-pagination-bullet-active'
    );
    activatedDot[1].style.backgroundColor = 'black';
  }, []);

  return (
    <article className={cn('Sub14Store')}>
      <h3>{title}</h3>

      <Swiper
        modules={[Pagination]}
        // spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => {
          const activatedDot = document.querySelectorAll(
            '.swiper-pagination-bullet-active'
          );
          activatedDot[1].style.backgroundColor = 'black';
        }}
      >
        <SwiperSlide>
          <FundamentalBoxed
            subtitle='여선교회'
            place='센터 별관 1층 로비'
            date='8. 4(목) - 5(금)'
            time='오후 12:00 - 7:00'
            description={
              <pre>
                컵라면 / 떡꼬치 / 김치전 / 옥수수 / 떡볶이 / 컵과일 / 샌드위치
              </pre>
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <FundamentalBoxed
            subtitle='베대원 (1호점)'
            place='센터 별관 앞마당'
            date='8. 4(목) - 5(금)'
            time='오전 9:00 - 오후 8:00'
            description={
              <pre>
                수제차 &amp; 과일주스 / 르뱅쿠키 / 흑임자크림치즈 / 까눌레 /
                마들렌 / 소떡소떡 / 팝치킨 / 핫바 / 츄러스 / 컵만두 / 팥빙수
              </pre>
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <FundamentalBoxed
            subtitle='베대원 (2호점)'
            place='리더센터 1층 로비'
            date='8. 4(목) - 5(금)'
            time='오전 7:00 - 오후 12:00'
            description={
              <pre>
                둘째날 조식 - 8. 4 (목)
                <li>뉴욕핫도그 + 음료</li>
                셋째날 조식 - 8. 5 (금)
                <li>샌드위치 + 음료</li>
              </pre>
            }
          />
        </SwiperSlide>
      </Swiper>
    </article>
  );
};

export default Sub14Store;
