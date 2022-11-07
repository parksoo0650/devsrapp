import WeekdaySelectTab from './WeekdaySelectTab';
import WeekdayContentBody from './WeekdayContentBody';

export default function WeekdayContent({ weeks, setWeeks, dataOncontents }) {
  return (
    <div className='px-[30px]'>
      <WeekdaySelectTab weeks={weeks} setWeeks={setWeeks} />
      <WeekdayContentBody weeks={weeks} dataOncontents={dataOncontents} />
    </div>
  );
}

/**
 * <div className='title'>주중 콘텐츠</div>
 * liveDatas.videoId ? 'section pt0' : 'section pt25'
 */
