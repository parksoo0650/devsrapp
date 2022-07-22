import CampHeader from '../CampHeader/CampHeader';
import useTabs from '../../hooks/useTabs';
import classNames from 'classnames/bind';
import styles from './CampMeal.module.scss';
import CampMealCard from '../CampMealCard/CampMealCard';

const cn = classNames.bind(styles);

const time = {
  breakfast: {
    text: '조식',
    description: '오전 6:00 - 7:30',
  },
  lunch: {
    text: '점심',
    description: '오후 12:00 = 1:30',
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
};

const date = [
  {
    date: '첫째날 8. 3 (수)',
    content: (
      <>
        <h4 className={cn('subTitle')}>식단 메뉴</h4>
        <CampMealCard time={time.dinner} list={list.firstDinner} />
      </>
    ),
    isFocused: false,
  },
  {
    date: '둘째날 8. 4 (목)',
    content: '둘째날 식단 컴포넌트',
    isFocused: false,
  },
  {
    date: '셋째날 8. 5 (금)',
    content: '셋째날 식단 컴포넌트',
    isFocused: false,
  },
];

const CampMeal = ({ onClick }) => {
  const { currentTab, setCurrentIndex } = useTabs(0, date);
  currentTab.isFocused = true;

  const initTabs = () => {
    for (const i in date) {
      date[i].isFocused = false;
    }
  };

  return (
    <div className={cn('CampMeal')}>
      {/* 안내 페이지 헤더 */}
      <CampHeader onClick={onClick} title='식당안내' />

      {/* 날짜 선택 탭 */}
      <nav>
        <ul>
          {date.map((section, index) => (
            <button
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
