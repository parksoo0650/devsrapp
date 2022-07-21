import CampHeader from '../CampHeader/CampHeader';
import classNames from 'classnames/bind';
import styles from './CampSchedule.module.scss';

const cn = classNames.bind(styles);

const CampSchedule = ({ onClick }) => {
  return (
    <div className={cn('CampSchedule')}>
      <CampHeader onClick={onClick} title='수련회 일정' />

      <nav>
        {/* 공유 버튼 */}
        <button />

        {/* 날짜 */}
        <ul>
          <li>첫째날 8. 3 (수)</li>
          <li>둘째날 8. 4 (목)</li>
          <li>셋째날 8. 5 (금)</li>
        </ul>
      </nav>
    </div>
  );
};

export default CampSchedule;
