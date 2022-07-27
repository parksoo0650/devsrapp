import classNames from 'classnames/bind';
import styles from './Fundamental.module.scss';

const cn = classNames.bind(styles);

const Fundamental = ({
  addon,
  title,
  place,
  date,
  time,
  timeAdditional,
  infoAdditional,
  description,
}) => {
  return (
    <article className={cn('Fundamental')}>
      <h3>{title}</h3>

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

      {timeAdditional ? (
        <p className={cn('timeAdditional')}>{timeAdditional}</p>
      ) : null}

      {infoAdditional ? (
        <span className={cn('infoAdditional')}>
          <div />
          <p>{infoAdditional}</p>
        </span>
      ) : null}

      {/* description은 반드시 <pre></pre> 태그를 사용해야 함 */}
      {description}
      {addon}
    </article>
  );
};

export default Fundamental;
