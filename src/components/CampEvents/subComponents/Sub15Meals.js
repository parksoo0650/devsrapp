import Fundamental from '../templates/Fundamental';
import CampMeal from '../../CampMeal/CampMeal';

const Sub15Meals = () => {
  return (
    <Fundamental
      addon={<CampMeal />}
      title='15. 식당'
      place='센터 별관 2층 식당'
      date='8. 3(수) - 5(금)'
      time='중식 - 오후 12:00 - 1:30'
      timeAdditional='석식 - 오후 6:00 - 7:30'
      description={
        <pre>
          <li>사전구매한 식권만 사용 (식권 현장구매 및 환불 불가)</li>
          <li>조식은 베대원 조식서비스 및 인근 외부 식당 이용해 주세요</li>
        </pre>
      }
    />
  );
};

export default Sub15Meals;
