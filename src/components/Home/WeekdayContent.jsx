import WeekdaySelectTab from './WeekdaySelectTab';
import WeekdayContentBody from './WeekdayContentBody';

export default function WeekdayContent({ weeks, setWeeks, dataOncontents }) {
  return (
    <div>
      <WeekdaySelectTab weeks={weeks} setWeeks={setWeeks} />
      <WeekdayContentBody weeks={weeks} dataOncontents={dataOncontents} />
    </div>
  );
}
