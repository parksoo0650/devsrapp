import { useRouter } from 'next/router';
import CampMenu from '../CampMenu/CampMenu';
import classNames from 'classnames/bind';
import styles from './CampInfo.module.scss';
import CampNavbar from '../CampNavbar/CampNavbar';
import CampToggle from '../CampToggle/CampToggle';

const cn = classNames.bind(styles);

const CampInfo = () => {
  const router = useRouter();

  const onClick = (event) => {
    // console.dir(event.target.id);
    router.push(`info/${event.target.id}`);
  };

  return (
    <div className={cn('CampInfo')}>
      <h3>수련회 안내</h3>

      <CampMenu onClick={onClick} title='여름수련회 프로그램' id='schedule' />
      <CampMenu onClick={onClick} title='프로그램 세부정보' id='events' />
      <CampMenu onClick={onClick} title='프로그램 위치정보' id='map' />
      <CampMenu onClick={onClick} title='식당안내' id='meal' />
      <CampMenu onClick={onClick} title='차량(셔틀)운행' id='shuttle' />
      <CampMenu onClick={onClick} title='기도실(리더센터) 사용안내' id='room' />
      {/* <CampMenu onClick={onClick} title='환영글' id='welcome' /> */}

      {/* <CampMenu onClick={onClick} title='진행본부' id='central' /> */}
      <h3>8월 3일에 전체 메뉴가 공개됩니다.</h3>

      <div
        style={{
          height: '180px',
        }}
      />
      <CampNavbar />
      <CampToggle />
    </div>
  );
};

export default CampInfo;
