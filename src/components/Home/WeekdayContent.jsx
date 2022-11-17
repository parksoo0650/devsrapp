import { useState, useEffect } from 'react';
import WeekdaySelectTab from './WeekdaySelectTab';
import WeekdayContentBody from './WeekdayContentBody';
import DateUtil from '../../utils/DateUtil';

export default function WeekdayContent({ dataOncontents }) {
  const [weeks, setWeeks] = useState('');

  const date = new Date();

  let onDay = date.getDay() == 0 || date.getDay() == 6 ? 1 : date.getDay();

  useEffect(() => {
    setWeeks(DateUtil.week[onDay]);
  }, [dataOncontents]);

  return (
    <div>
      <WeekdaySelectTab weeks={weeks} setWeeks={setWeeks} />
      <WeekdayContentBody weeks={weeks} dataOncontents={dataOncontents} />
    </div>
  );
}
