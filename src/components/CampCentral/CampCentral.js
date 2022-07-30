import CampHeader from '../CampHeader/CampHeader';
import CampNavbar from '../CampNavbar/CampNavbar';
import CampToggle from '../CampToggle/CampToggle';

const CampCentral = ({ onClick }) => {
  return (
    <div>
      <CampHeader onClick={onClick} title='진행본부' option='invisible' />
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
