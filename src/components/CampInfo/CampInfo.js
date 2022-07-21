import { useRouter } from 'next/router';
import CampMenu from '../CampMenu/CampMenu';

// 2022 여름 수련회 안내
const CampInfo = () => {
  const router = useRouter();

  const onClick = (event) => {
    // console.dir(event.target.id);
    router.push(`2022-summer-camp/${event.target.id}`);
  };

  return (
    <div>
      <CampMenu onClick={onClick} title='식당안내' id='meal' />
      <CampMenu onClick={onClick} title='진행본부' id='central' />
      <CampMenu onClick={onClick} title='기도실(숙소)안내' id='room' />
      <CampMenu onClick={onClick} title='차량운행' id='shuttle' />
      <CampMenu onClick={onClick} title='프로그램 세부정보' id='events' />
      <CampMenu onClick={onClick} title='수련회 일정' id='schedule' />
    </div>
  );
};

export default CampInfo;
