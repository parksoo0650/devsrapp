import CampHeader from '../CampHeader/CampHeader';
import useTabs from '../../hooks/useTabs';
import classNames from 'classnames/bind';
import styles from './CampMeal.module.scss';
import CampMealCard from '../CampMealCard/CampMealCard';
import CampMealInfo from '../CampMealInfo/CampMealInfo';
import CampMealDropdown from '../CampMealDropdown/CampMealDropdown';

const cn = classNames.bind(styles);

const time = {
  breakfast: {
    text: '조식',
    description: '오전 6:00 - 7:30',
  },
  lunch: {
    text: '점심',
    description: '오후 12:00 - 1:30',
  },
  dinner: {
    text: '저녁',
    description: '오후 6:00 - 7:30',
  },
};

const list = {
  firstDinner: [
    '잡곡밥 / 참치김치찌개',
    '돈갈비찜 / 소고기잡채',
    '토마토카프레제샐러드',
    '포기김치',
    '메론',
  ],
  secondLunch: [
    '잡곡밥 / 꽃게된장찌개',
    '고추장불고기 / 계란장조림',
    '브로컬리숙회&초고추장',
    '포기김치',
    '매실쥬스',
  ],
  secondDinner: [
    '잡곡밥 / 북어해장국',
    '춘천식닭갈비',
    '통살새우까스&치폴레소스',
    '도토리묵야채무침 / 포기김치',
    '오색경단',
  ],
  thirdLunch: [
    '소고기콩나물밥&부추양념장',
    '미역국',
    '고메떡갈비 / 오미산적',
    '미나리무생채 / 열무김치',
    '에이드',
  ],
  thirdDinner: [
    '백미밥 / 큰 만두설렁탕',
    '오징어불고기',
    '궁중고기말이조림',
    '취나물들기름볶음 / 섞박지',
    '두유',
  ],
};

const date = [
  {
    date: '첫째날 8. 3 (수)',
    content: (
      <>
        <h4 className={cn('subTitle')}>식단 메뉴</h4>
        <CampMealCard time={time.dinner} list={list.firstDinner} />
        <CampMealInfo />
      </>
    ),
    isFocused: false,
  },
  {
    date: '둘째날 8. 4 (목)',
    content: (
      <>
        <h4 className={cn('subTitle')}>식단 메뉴</h4>
        <CampMealDropdown time={time.lunch} />
        <CampMealCard time={time.lunch} list={list.secondLunch} />
        <CampMealCard time={time.dinner} list={list.secondDinner} />
        <CampMealInfo />
      </>
    ),
    isFocused: false,
  },
  {
    date: '셋째날 8. 5 (금)',
    content: (
      <>
        <h4 className={cn('subTitle')}>식단 메뉴</h4>
        <CampMealCard time={time.lunch} list={list.thirdLunch} />
        <CampMealCard time={time.dinner} list={list.thirdDinner} />
        <CampMealInfo />
      </>
    ),
    isFocused: false,
  },
];

const CampMeal = ({ onClick }) => {
  const { currentTab, setCurrentIndex } = useTabs(0, date);

  const initTabs = () => {
    for (const i in date) {
      date[i].isFocused = false;
    }
  };

  initTabs();
  currentTab.isFocused = true;

  return (
    <div className={cn('CampMeal')}>
      {/* 안내 페이지 헤더 */}
      <CampHeader onClick={onClick} title='식당안내' />

      {/* 날짜 선택 탭 */}
      <nav>
        <ul>
          {date.map((section, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                initTabs();
              }}
              isFocused={section.isFocused}
              className={
                section.isFocused ? cn('TabFocused') : cn('TabNotFocused')
              }
            >
              {section.date}
            </button>
          ))}
        </ul>
      </nav>

      {/* 구분선 */}
      <div className={cn('horizontalLine')} />

      {/* 식단 내용 */}
      <div>{currentTab.content}</div>
    </div>
  );
};

export default CampMeal;
