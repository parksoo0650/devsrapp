import WcDaySelect from './WcDaySelect';
import WcConList from './WcConList/WcConList';

export default function WeekdayContent({
  liveDatas,
  weeks,
  setWeeks,
  dataOncontents,
}) {
  return (
    <div className='px-[30px]'>
      <WcDaySelect weeks={weeks} setWeeks={setWeeks} />
      <WcConList weeks={weeks} dataOncontents={dataOncontents} />
    </div>
  );
}

/**
 * <div className='title'>주중 콘텐츠</div>
 * liveDatas.videoId ? 'section pt0' : 'section pt25'
 */
