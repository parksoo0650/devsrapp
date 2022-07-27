import MarketFundamental from '../templates/MarketFundamental';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import classNames from 'classnames/bind';
import styles from './Sub09SungrakCinema.module.scss';

const cn = classNames.bind(styles);

const Sub09AddOn = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <div />
        <span>1관 : 리더센터 예수홀 (B1F)</span>

        <h4>미션</h4>
        <p>
          예수의 모습 그대로 살아가려는 신부 가브리엘, 원주민을 전도하기 위한
          헌신적인 그의 사랑과 노력을 그린 실화 바탕의 영화
        </p>
      </SwiperSlide>

      <SwiperSlide>2</SwiperSlide>
    </Swiper>
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
