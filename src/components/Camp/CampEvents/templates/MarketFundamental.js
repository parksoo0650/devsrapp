import classNames from 'classnames/bind';
import styles from './MarketFundamental.module.scss';

const cn = classNames.bind(styles);

const MarketFundamental = ({
  addon,
  title,
  place,
  placeAdditional,
  date,
  time,
  infoAdditional,
  description,
}) => {
  return (
    <article className={cn('MarketFundamental')}>
      <h3>{title}</h3>

      <span>
        <div />
        <p>장소 : {place}</p>
      </span>

      {placeAdditional ? (
        <p className={cn('placeAdditional')}>{placeAdditional}</p>
      ) : null}

      <span>
        <div />
        <p>일자 : {date}</p>
      </span>

      <span>
        <div />
        <p>시간 : {time}</p>
      </span>

      {infoAdditional ? (
        <span className={cn('infoAdditional')}>
          <div />
          <p>{infoAdditional}</p>
        </span>
      ) : null}

      {/* description은 <pre></pre> 태그를 사용해야 함 */}
      {description}
      {addon}
    </article>
  );
};

export default MarketFundamental;
