import classNames from 'classnames/bind';
import styles from './CampMealInfo.module.scss';

const cn = classNames.bind(styles);

const CampMealInfo = () => {
  return (
    <section className={cn('CampMealInfo')}>
      <h4>교회 식당 이용 안내</h4>

      <div>
        <span>식사장소</span>
        <p>세계센터 별관 제1식당 또는 제2식당 이용</p>

        <span>식권구매</span>
        <p>어른 4,000원, 어린이(초등생까지) 2,000원</p>

        <span>
          ※ 식권은 담당 교역자를 통해 사전 구매하셔야 하며, <br />
          현장에서는 구매하실 수 없습니다.
        </span>

        <span>
          ※ 식권은 해당 날짜의 중식, 석식 5회 식사권으로 제공되며, <br />
          사용하지 않은 식권은 환불해드릴 수 없습니다. <br />
          식권을 구매하였으나 사용하지 않으실 경우, <br />
          주위 분들께 양도할 수 있습니다.
        </span>
      </div>
    </section>
  );
};

export default CampMealInfo;
