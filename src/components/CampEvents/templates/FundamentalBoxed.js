import classNames from 'classnames/bind';
import styles from './FundamentalBoxed.module.scss';

const cn = classNames.bind(styles);

const FundamentalBoxed = ({ subtitle, place, date, time, description }) => {
  return (
    <div className={cn('FundamentalBoxed')}>
      <h4>{subtitle}</h4>

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

      {description}
    </div>
  );
};

export default FundamentalBoxed;
