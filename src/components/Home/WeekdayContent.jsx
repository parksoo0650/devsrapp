import { useState, useEffect } from 'react';
import useSWR from 'swr';
import WeekdaySelectTab from './WeekdaySelectTab';
import WeekdayContentBody from './WeekdayContentBody';
import DateUtil from '../../utils/DateUtil';

export default function WeekdayContent() {
  const [weeks, setWeeks] = useState('');

  const { data } = useSWR('/api/contents?kind=oncontents');

  useEffect(() => {
    setWeeks(DateUtil.week[DateUtil.onlineContentsDay]);
  }, [data]);

  return (
    <div>
      <WeekdaySelectTab weeks={weeks} setWeeks={setWeeks} />
      <WeekdayContentBody weeks={weeks} data={data} />
    </div>
  );
}
