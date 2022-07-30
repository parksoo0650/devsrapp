import { useRouter } from 'next/router';
import CampMenu from '../CampMenu/CampMenu';
import classNames from 'classnames/bind';
import styles from './CampProgram.module.scss';
import CampNavbar from '../CampNavbar/CampNavbar';
import CampToggle from '../CampToggle/CampToggle';

const cn = classNames.bind(styles);

const CampProgram = () => {
  const router = useRouter();

  const onClick = (event) => {
    // console.dir(event.target.id);
    router.push(`program/${event.target.id}`);
  };

  // const icons = document.querySelectorAll('.camp-home-menu-icon');
  // console.dir(icons);

  return (
    <div className={cn('CampProgram')}>
      <h3>수련회 안내</h3>

      {/* <CampMenu onClick={onClick} title='수련회 일정표' id='schedule' /> */}
      <CampMenu onClick={onClick} title='프로그램 세부정보' id='events' />
      {/* <CampMenu onClick={onClick} title='식당안내' id='meal' /> */}
      {/* <CampMenu onClick={onClick} title='기도실(리더센터) 사용안내' id='room' /> */}
      <CampMenu onClick={onClick} title='차량운행' id='shuttle' />
      {/* <CampMenu onClick={onClick} title='진행본부' id='central' /> */}
      {/* 지도 CampMap */}
      {/* 환영글 CampWelcome */}

      <br />
      <br />
      <br />
      <CampNavbar />
      <CampToggle />
    </div>
  );
};

export default CampProgram;
