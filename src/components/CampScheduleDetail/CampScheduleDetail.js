import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import styles from './CampScheduleDetail.module.scss';
import Sub01EveningCrusade from '../CampEvents/subComponents/Sub01EveningCrusade';
import Sub02DawnCrusade from '../CampEvents/subComponents/Sub02DawnCrusade';
import Sub03HealingCrusade from '../CampEvents/subComponents/Sub03HealingCrusade';
import Sub06LectureForEveryone from '../CampEvents/subComponents/Sub06LectureForEveryone';
import Sub07HappyLecture from '../CampEvents/subComponents/Sub07HappyLecture';
import Sub08Recreation from '../CampEvents/subComponents/Sub08Recreation';
import Sub09SungrakCinema from '../CampEvents/subComponents/Sub09SungrakCinema';
import CampShuttleCard from '../CampShuttleCard/CampShuttleCard';

const cn = classNames.bind(styles);

const contents = {
  'dawn-crusade': {
    title: '새벽성회',
    info: <Sub02DawnCrusade />,
    shuttle: (
      <div
        style={{
          backgroundColor: 'white',
        }}
      >
        <CampShuttleCard
          color='#43BFC7'
          before='05:00 - 05:50'
          after='07:30 - 08:20'
          title='새벽성회'
        />
      </div>
    ),
  },
  'happy-lecture': {
    title: '행복한 특강',
    info: <Sub07HappyLecture />,
    shuttle: (
      <div
        style={{
          backgroundColor: 'white',
        }}
      >
        <CampShuttleCard
          color='#F9725F'
          before='10:10 - 11:00'
          after='12:00 - 12:50'
          title='오전 프로그램 (행복한 특강 / 전교인 특강)'
        />
      </div>
    ),
  },
  'lecture-for-everyone': {
    title: '전교인 특강',
    info: <Sub06LectureForEveryone />,
    shuttle: (
      <div
        style={{
          backgroundColor: 'white',
        }}
      >
        <CampShuttleCard
          color='#F9725F'
          before='10:10 - 11:00'
          after='12:00 - 12:50'
          title='오전 프로그램 (행복한 특강 / 전교인 특강)'
        />
      </div>
    ),
  },
  recreation: {
    title: '행복 더하기 (레크레이션)',
    info: <Sub08Recreation />,
    shuttle: (
      <div
        style={{
          backgroundColor: 'white',
        }}
      >
        <CampShuttleCard
          color='#6288FC'
          before='13:40 - 14:30'
          after='16:30 - 17:20'
          title='오후 프로그램 (행복 더하기 / 신유집회)'
        />
      </div>
    ),
  },
  'healing-crusade': {
    title: '신유집회',
    info: <Sub03HealingCrusade />,
    shuttle: (
      <div
        style={{
          backgroundColor: 'white',
        }}
      >
        <CampShuttleCard
          color='#6288FC'
          before='13:40 - 14:30'
          after='16:30 - 17:20'
          title='오후 프로그램 (행복 더하기 / 신유집회)'
        />
      </div>
    ),
  },
  'sungrak-cinema': {
    title: '성락시네마',
    info: (
      <div
        style={{
          backgroundColor: 'white',
          padding: '44px 15px 13px',
        }}
      >
        <Sub09SungrakCinema option='no-title' />
      </div>
    ),
  },
  'evening-crusade': {
    title: '저녁성회',
    info: <Sub01EveningCrusade />,
    shuttle: (
      <div
        style={{
          backgroundColor: 'white',
        }}
      >
        <CampShuttleCard
          color='#FD649C'
          before='19:10 - 20:00'
          after='22:30 - 23:20'
          title='저녁성회'
        />
      </div>
    ),
  },
};

const CampScheduleDetail = () => {
  const router = useRouter();
  const id = router.query.id;

  const onClick = () => {
    router.push('/2022-summer-camp/info/schedule');
  };

  return (
    <div className={cn('CampScheduleDetail')}>
      <header>
        <button onClick={onClick} />
        <h3>{contents[id].title}</h3>
      </header>

      {contents[id].info}
      {contents[id].shuttle}
    </div>
  );
};

export default CampScheduleDetail;
