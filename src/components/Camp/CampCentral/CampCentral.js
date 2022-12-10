import CampNavbar from '../CampNavbar/CampNavbar';
import CampToggle from '../CampToggle/CampToggle';
import classNames from 'classnames/bind';
import styles from './CampCentral.module.scss';
import ContactButton from '../../ContactButton/ContactButton';

const cn = classNames.bind(styles);

const CampCentral = () => {
  return (
    <div className={cn('CampCentral')}>
      <div class='justify-between bg-white w-full max-w-2xl text-lg font-bold px-4 py-4 text-gray-800 top-0  flex items-center fixed z-50'>
        <h3>진행본부</h3>
      </div>

      {/* <div
        style={{
          height: '62px',
        }}
      />

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

      <ContactButton name='김내완 목사' tel='010 - 7300 - 3146' />
      <ContactButton name='오세진 목사' tel='010 - 3203 - 9799' />

      <span className={cn('item')}>
        <div />
        <p>응급 · 민원 · 불편 문의</p>
      </span>

      <ContactButton name='정용진 목사' tel='010 - 5589 - 3176' />

      <span className={cn('item')}>
        <div />
        <p>누가팀 의무실(응급처치및 비상약)</p>
      </span>

      <ContactButton name='황혜원 팀장' tel='010 - 2661 - 0760' />
      <ContactButton name='이한센 안수집사' tel='010 - 2030 - 8009' />

      <CampNavbar />
      <CampToggle /> */}
    </div>
  );
};

export default CampCentral;
