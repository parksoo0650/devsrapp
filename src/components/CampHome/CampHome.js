import SectionContainer from '../SectionContainer/SectionContainer';
import classNames from 'classnames/bind';
import styles from './CampHome.module.scss';
import BannerAndNotice from './subComponent/BannerAndNotice';
import SungrakInsta from './subComponent/SungrakInsta';
import Asking from './subComponent/Asking';
import CampNavbar from '../CampNavbar/CampNavbar';
import CampToggle from '../CampToggle/CampToggle';
import Modal from 'react-modal';
import CampPopup from '../CampPopup/CampPopup';
import { useEffect, useState } from 'react';

const cn = classNames.bind(styles);

const ModalStyle = {
  content: {
    // WebkitOverflowScrolling: 'touch',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: '18vh',
    height: '560px',
    zIndex: 9999,
    padding: 0,
    borderRadius: '14px',
  },
};

const CampHome = () => {
  const [showPopup, setShowPopup] = useState(false);

  console.log(new Date().getTime());

  useEffect(() => {
    // 로컬 스토리지에서 expires 조회, 아직 하루가 지나지 않았으면 return
    const EXPIRES_DATE = localStorage.getItem('expiresDate');
    if (EXPIRES_DATE && EXPIRES_DATE > new Date()) return;

    // expires 값이 없으면 팝업 띄움
    if (!EXPIRES_DATE) {
      setShowPopup(() => true);
    }

    // expires 값이 지났다면 팝업 띄움
    if (EXPIRES_DATE && EXPIRES_DATE <= new Date()) {
      setShowPopup(() => true);
    }
  }, []);

  const onClick = (event) => {
    if (event.target.id === 'StopWatchingToday') {
      // 오늘 그만보기를 눌렀을 경우
      let expires = new Date();
      expires = expires.setHours(expires.getHours() + 24);
      localStorage.setItem('expiresDate', expires);
      setShowPopup(() => false);
    } else {
      // 그냥 X 버튼을 눌렀을 경우
      setShowPopup(() => false);
    }
  };

  return (
    <>
      <div className={cn('CampHome')}>
        {/* 배너 및 공지사항 */}
        <SectionContainer>
          <BannerAndNotice />
        </SectionContainer>

        {/* 성락 인스타 */}
        {!showPopup && (
          <SectionContainer>
            <SungrakInsta />
          </SectionContainer>
        )}

        {/* 문의하기 */}
        {!showPopup && (
          <SectionContainer>
            <Asking />
          </SectionContainer>
        )}

        {!showPopup && <CampToggle />}
      </div>

      {!showPopup && <CampNavbar />}

      <Modal isOpen={showPopup} style={ModalStyle}>
        <CampPopup onClick={onClick} />
      </Modal>
    </>
  );
};

export default CampHome;
