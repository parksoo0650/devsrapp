import classNames from 'classnames/bind';
import styles from './CampPopup.module.scss';

const cn = classNames.bind(styles);

const CampPopup = ({ onClick }) => {
  return (
    <div className={cn('CampPopup')}>
      <div className={cn('image')} />
      <button className={cn('close')} onClick={onClick} />
      <span
        className={cn('StopWatchingToday')}
        id='StopWatchingToday'
        onClick={onClick}
      >
        오늘 그만보기
      </span>
    </div>
  );
};

export default CampPopup;
