import classNames from 'classnames/bind';
import styles from './CampMealCard.module.scss';

const cn = classNames.bind(styles);

const CampMealCard = ({ time, list }) => {
  return (
    <div className={cn('CampMealCard')}>
      <h4>{time.text}</h4>
      <span>{time.description}</span>

      {/* 메뉴 리스트 */}
      <div className={cn('MenuList')}>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {/* end of MenuList */}
    </div>
  );
};

export default CampMealCard;
