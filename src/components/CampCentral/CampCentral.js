import CampNavbar from '../CampNavbar/CampNavbar';
import CampToggle from '../CampToggle/CampToggle';
import classNames from 'classnames/bind';
import styles from './CampCentral.module.scss';

const cn = classNames.bind(styles);

const CampCentral = () => {
  return (
    <div className={cn('CampCentral')}>
      <h3>진행본부</h3>

      <div
        style={{
          display: 'block',
          padding: '16px',
          fontWeight: 700,
          fontSize: '16px',
        }}
      >
        진행본부 탭은 8월 3일부터 이용이 가능합니다.
      </div>
      <CampNavbar />
      <CampToggle />
    </div>
  );
};

export default CampCentral;
