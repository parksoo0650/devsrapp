import classNames from 'classnames/bind';
import styles from './MarketFundamentalBoxed.module.scss';

const cn = classNames.bind(styles);

const MarketFundamentalBoxed = ({
  title,
  subtitle,
  place,
  date,
  time,
  infoAdditional,
  description1,
  description2,
}) => {
  return (
    <article className={cn('MarketFundamentalBoxed')}>
      <h3>{title}</h3>

      <div className={cn('box')}>
        {subtitle}

        <span>
          <div />
          <p>장소 : {place}</p>
        </span>

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
      </div>
      {/* end of box */}

      {description1}
      {description2}
    </article>
  );
};

export default MarketFundamentalBoxed;
