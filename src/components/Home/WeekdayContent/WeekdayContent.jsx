import styles from './WeekdayContent.module.scss';
import classNames from 'classnames/bind';
import WcDaySelect from '../WcDaySelect/WcDaySelect';
import WcConList from '../WcConList/WcConList';

const cn = classNames.bind(styles);

const WeekdayContent = ({ liveDatas, weeks, setWeeks, dataOncontents }) => {
  return (
    <div className={liveDatas.videoId ? 'section pt0' : 'section pt25'}>
      <div className='title'>주중 콘텐츠</div>

      <div className={cn('days_wrap')}>
        <WcDaySelect weeks={weeks} setWeeks={setWeeks} />
        <WcConList weeks={weeks} dataOncontents={dataOncontents} />
      </div>
    </div>
  );
};

export default WeekdayContent;
