import CampHeader from '../CampHeader/CampHeader';
import CampShuttleCard from '../CampShuttleCard/CampShuttleCard';
import ContactButton from '../../ContactButton/ContactButton';
import classNames from 'classnames/bind';
import styles from './CampShuttle.module.scss';

const cn = classNames.bind(styles);

const CampShuttle = ({ onClick }) => {
  return (
    <div>
      <CampHeader onClick={onClick} title='차량(셔틀)운행 안내' />

      <p className={cn('description')}>
        ◎ 상시셔틀 : <bold>30분 간격</bold> 운행
      </p>

      <CampShuttleCard
        color='#43BFC7'
        before='05:00 - 05:50'
        after='07:30 - 08:20'
        title='새벽성회'
      />

      <CampShuttleCard
        color='#F9725F'
        before='10:10 - 11:00'
        after='12:00 - 12:50'
        title='오전 프로그램 (행복한 특강 / 전교인 특강)'
      />

      <CampShuttleCard
        color='#6288FC'
        before='13:40 - 14:30'
        after='16:30 - 17:20'
        title='오후 프로그램 (행복 더하기 / 신유집회)'
      />

      <CampShuttleCard
        color='#FD649C'
        before='19:10 - 20:00'
        after='22:30 - 23:20'
        title='저녁성회'
      />

      <h3 className={cn('subTitle')}>◎ 차량운행 관련 문의 및 도움요청</h3>

      <ContactButton name='조상호 목사' tel='010 - 8775 - 2429' />
      <br />
      <br />
      <br />
      {/* <ContactButton name='정용진 목사' tel='010-5589-3176' /> */}
    </div>
  );
};

export default CampShuttle;
