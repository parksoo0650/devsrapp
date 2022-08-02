import classNames from 'classnames/bind';
import styles from './CampMeal.module.scss';
import CampMealCard from '../../components/CampMealCard/CampMealCard';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useEffect } from 'react';
import CampHeader from '../CampHeader/CampHeader';

const cn = classNames.bind(styles);

const time = {
  breakfast: {
    text: '조식',
    description: '오전 6:00 - 7:30',
  },
  lunch: {
    text: '중식',
    description: '오후 12:00 - 1:30',
  },
  dinner: {
    text: '석식',
    description: '오후 6:00 - 7:30',
  },
};

const list = {
  firstDinner: [
    '잡곡밥 / 참치김치찌개 / 돈갈비찜 / 소고기잡채',
    '토마토카프레제샐러드 / 포기김치 / 메론',
  ],
  secondLunch: [
    '잡곡밥 / 꽃게된장찌개 / 고추장불고기 / 계란장조림',
    '브로컬리숙회&초고추장 / 포기김치 / 매실쥬스',
  ],
  secondDinner: [
    '잡곡밥 / 북어해장국 / 춘천식닭갈비 / 통살새우까스 &',
    '치폴레소스 / 도토리묵야채무침 / 포기김치 / 오색경단',
  ],
  thirdLunch: [
    '소고기콩나물밥&부추양념장 / 미역국 / 고메떡갈비',
    '오미산적 / 미나리무생채 / 열무김치 / 에이드',
  ],
  thirdDinner: [
    '백미밥 / 큰 만두설렁탕 / 오징어불고기',
    '궁중고기말이조림 / 취나물들기름볶음 / 섞박지 / 두유',
  ],
};

const CampMeal = ({ option }) => {
  useEffect(() => {
    const dots = document.querySelectorAll('.swiper-pagination');
    dots[0].style.display = 'flex';
    dots[0].style.justifyContent = 'center';

    const activatedDot = document.querySelectorAll(
      '.swiper-pagination-bullet-active'
    );
    activatedDot[0].style.backgroundColor = 'black';
  }, []);

  return (
    <div>
      <CampHeader title='식당안내' />
      <br />
      <br />

      <div className={cn('CampMeal')}>
        <h3>교회 식당 이용 안내</h3>

        <span>
          <div />
          <p>장소 : 센터 별관 2층 식당</p>
        </span>

        <span>
          <div />
          <p>시간 : 중식 - 오후 12:00 - 1:30</p>
        </span>

        <p className={cn('timeAdditional')}>석식 - 오후 6:00 - 7:30</p>

        <span>
          <div />
          <p>
            식권구매 : 어른 <bold>4,000</bold>원, 어린이(초등생까지){' '}
            <bold>2,000</bold>원
          </p>
        </span>

        <pre>
          ※ 사전구매한 식권만 사용 (식권 현장구매 및 환불 불가) <br />※ 조식은
          배대원 조식서비스 및 인근 외부 식당 이용해 주세요
        </pre>

        <Swiper
          className={cn('Swiper')}
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => {
            const activatedDot = document.querySelectorAll(
              '.swiper-pagination-bullet-active'
            );
            activatedDot[0].style.backgroundColor = 'black';
          }}
        >
          <SwiperSlide className={cn('SwiperSlide')}>
            <CampMealCard
              date='첫째날 8. 3(수)'
              dinner={time.dinner}
              dinnerList={list.firstDinner}
            />
          </SwiperSlide>

          <SwiperSlide className={cn('SwiperSlide')}>
            <CampMealCard
              date='둘째날 8. 4(목)'
              lunch={time.lunch}
              lunchList={list.secondLunch}
              dinner={time.dinner}
              dinnerList={list.secondDinner}
            />
          </SwiperSlide>

          <SwiperSlide className={cn('SwiperSlide')}>
            <CampMealCard
              date='셋째날 8. 5(금)'
              lunch={time.lunch}
              lunchList={list.thirdLunch}
              dinner={time.dinner}
              dinnerList={list.thirdDinner}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CampMeal;
