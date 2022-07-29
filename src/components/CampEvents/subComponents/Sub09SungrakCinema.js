import MarketFundamental from '../templates/MarketFundamental';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import classNames from 'classnames/bind';
import styles from './Sub09SungrakCinema.module.scss';
import { useEffect } from 'react';

const cn = classNames.bind(styles);

const Sub09AddOn = () => {
  useEffect(() => {
    const dots = document.querySelector('.swiper-pagination');
    dots.style.display = 'flex';
    dots.style.justifyContent = 'center';

    const activatedDot = document.querySelector(
      '.swiper-pagination-bullet-active'
    );
    activatedDot.style.backgroundColor = 'black';
  }, []);

  return (
    <>
      <Swiper
        className={cn('AddOn')}
        modules={[Pagination]}
        // spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => {
          const activatedDot = document.querySelector(
            '.swiper-pagination-bullet-active'
          );
          activatedDot.style.backgroundColor = 'black';
        }}
      >
        <SwiperSlide className={cn('Slide')}>
          <article>
            <div className={cn('placeIcon')} />
            <span>1관 : 리더센터 예수홀 (B1F)</span>
          </article>

          <article>
            <div className={cn('textArea')}>
              <h4>미션</h4>
              <p>
                예수의 모습 그대로 살아가려는 신부 가브리엘, 원주민을 전도하기
                위한 헌신적인 그의 사랑과 노력을 그린 실화 바탕의 영화
              </p>
            </div>

            <div className={cn('movieImage')} />
          </article>
        </SwiperSlide>

        <SwiperSlide className={cn('Slide')}>
          <article>
            <div className={cn('placeIcon')} />
            <span>2관 : 리더센터 2층 마가홀</span>
          </article>

          <article>
            <div className={cn('textArea')}>
              <h4>믿음의 승부</h4>
              <p>
                샤일로 기독학교 미식 축구팀 감독이 절대적인 하나님을 체험하며
                신앙의 회복이 이루어짐으로 인해 자신의 처한 모든 어려움이
                해결되고, 하나님의 전능하심을 체험하는 과정을 그린 실화 바탕의
                영화.
              </p>
            </div>

            <div className={cn('movieImage')} />
          </article>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

const Sub09SungrakCinema = () => {
  return (
    <MarketFundamental
      addon={<Sub09AddOn />}
      title='09. 성락시네마'
      place='1관 - 리더센터 B1층 예수홀'
      placeAdditional='2관 - 리더센터 2층 마가홀'
      date='8. 3(수)'
      time='오후 4:00 - 6:00'
      infoAdditional='상영작 : 미션, 믿음의 승부'
      description={
        <pre>
          이제부터는 성락인 모두의 인생 영화가 될 <br />
          명작들을 상영합니다! 성락인 모여서 함께 봐요~!
        </pre>
      }
    />
  );
};

export default Sub09SungrakCinema;
