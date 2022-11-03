import styles from './WcDaySelect.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export default function WcDaySelect({ weeks, setWeeks }) {
  return (
    <ul className={cn('day_list')}>
      <li
        onClick={() => setWeeks('월')}
        className={weeks == '월' ? cn('on') : ''}
      >
        월요일
      </li>
      <li
        onClick={() => setWeeks('화')}
        className={weeks == '화' ? cn('on') : ''}
      >
        화요일
      </li>
      <li
        onClick={() => setWeeks('수')}
        className={weeks == '수' ? cn('on') : ''}
      >
        수요일
      </li>
      <li
        onClick={() => setWeeks('목')}
        className={weeks == '목' ? cn('on') : ''}
      >
        목요일
      </li>
      <li
        onClick={() => setWeeks('금')}
        className={weeks == '금' ? cn('on') : ''}
      >
        금요일
      </li>
    </ul>
  );
}
