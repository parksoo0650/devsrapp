import { useState } from 'react';
import CampMenu from '../CampMenu/CampMenu';
import CampMeal from '../CampMeal/CampMeal';
import CampCentral from '../CampCentral/CampCentral';
import CampRoom from '../CampRoom/CampRoom';
import CampShuttle from '../CampShuttle/CampShuttle';
import CampEvents from '../CampEvents/CampEvents';
import CampSchedule from '../CampSchedule/CampSchedule';

// 2022 여름 수련회 안내
const CampInfo = () => {
  const [menu, setMenu] = useState(null);

  const onClick = (event) => {
    if (!event.target.textContent) setMenu(() => null);
    setMenu(() => event.target.textContent);
  };

  return (
    <>
      {!menu && (
        <div>
          <CampMenu onClick={onClick} title='식당안내' />
          <br />
          <CampMenu onClick={onClick} title='진행본부' />
          <br />
          <CampMenu onClick={onClick} title='기도실(숙소)안내' />
          <br />
          <CampMenu onClick={onClick} title='차량운행' />
          <br />
          <CampMenu onClick={onClick} title='프로그램 세부정보' />
          <br />
          <CampMenu onClick={onClick} title='수련회 일정' />
        </div>
      )}

      {menu === '식당안내' && <CampMeal onClick={onClick} />}
      {menu === '진행본부' && <CampCentral onClick={onClick} />}
      {menu === '기도실(숙소)안내' && <CampRoom onClick={onClick} />}
      {menu === '차량운행' && <CampShuttle onClick={onClick} />}
      {menu === '프로그램 세부정보' && <CampEvents onClick={onClick} />}
      {menu === '수련회 일정' && <CampSchedule onClick={onClick} />}
    </>
  );
};

export default CampInfo;
