import classNames from 'classnames/bind';
import styles from './CampToggle.module.scss';

const cn = classNames.bind(styles);

const CampToggle = () => {
  return (
    <div className={cn('CampToggle')}>
      <div>수련회</div>
      <div>성락홈</div>
    </div>
  );
};

export default CampToggle;
