import classNames from 'classnames/bind';
import styles from './CampMealCard.module.scss';

const cn = classNames.bind(styles);

const CampMealCard = ({ date, lunch, dinner, lunchList, dinnerList }) => {
  return (
    <div className={cn('CampMealCard')}>
      <h2>◎ {date}</h2>

      {lunch ? (
        <>
          <h4>{lunch.text}</h4>
          <span>{lunch.description}</span>

          <ul>
            {lunchList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      ) : null}

      {dinner ? (
        <>
          <h4>{dinner.text}</h4>
          <span>{dinner.description}</span>

          <ul>
            {dinnerList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default CampMealCard;
