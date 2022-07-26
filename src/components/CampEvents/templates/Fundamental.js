import classNames from 'classnames/bind';
import styles from './Fundamental.module.scss';

const cn = classNames.bind(styles);

const Fundamental = ({ title }) => {
  return (
    <article className={cn('Fundamental')}>
      <h3>{title}</h3>

      <span>
        <div />
        <p>장소 : </p>
      </span>

      <span>
        <div />
        <p>일자 : </p>
      </span>

      <span>
        <div />
        <p>시간 : </p>
      </span>
    </article>
  );
};

export default Fundamental;
