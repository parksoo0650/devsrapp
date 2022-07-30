import SectionContainer from '../SectionContainer/SectionContainer';
import classNames from 'classnames/bind';
import styles from './CampHome.module.scss';
import BannerAndNotice from './subComponent/BannerAndNotice';
import SungrakInsta from './subComponent/SungrakInsta';
import Asking from './subComponent/Asking';
import CampNavbar from '../CampNavbar/CampNavbar';
import CampToggle from '../CampToggle/CampToggle';

const cn = classNames.bind(styles);

const CampHome = () => {
  return (
    <div className={cn('CampHome')}>
      {/* 배너 및 공지사항 */}
      <SectionContainer>
        <BannerAndNotice />
      </SectionContainer>

      {/* 성락 인스타 */}
      <SectionContainer>
        <SungrakInsta />
      </SectionContainer>

      {/* 문의하기 */}
      <SectionContainer>
        <Asking />
      </SectionContainer>

      <br />
      <br />
      <br />
      <CampNavbar />
      <CampToggle />
    </div>
  );
};

export default CampHome;
