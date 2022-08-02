import CampNavbar from '../CampNavbar/CampNavbar';
import CampToggle from '../CampToggle/CampToggle';
import classNames from 'classnames/bind';
import styles from './CampCentral.module.scss';
import ContactButton from '../ContactButton/ContactButton';

const cn = classNames.bind(styles);

const CampCentral = () => {
  return (
    <div className={cn('CampCentral')}>
      <h3>진행본부</h3>

      <span className={cn('item')}>
        <div />
        <p>장소 : 세계센터 606호 나다나엘 라운지</p>
      </span>

      <span className={cn('item')}>
        <div />
        <p>대표번호</p>
      </span>

      <ContactButton tel='070 - 7300 - 8590' />

      <span className={cn('item')}>
        <div />
        <p>진행팀장</p>
      </span>

      <ContactButton name='김내완 목사' tel='070 - 7300 - 3146' />
      <ContactButton name='김내완 목사' tel='070 - 3203 - 9799' />

      <span className={cn('item')}>
        <div />
        <p>응급 · 민원 · 불편 문의</p>
      </span>

      <ContactButton name='정용진 목사' tel='010 - 5589 - 3176' />

      <CampNavbar />
      <CampToggle />
    </div>
  );
};

export default CampCentral;
