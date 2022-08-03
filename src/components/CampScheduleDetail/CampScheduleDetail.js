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

const cn = classNames.bind(styles);

const contents = {
  'dawn-crusade': {
    title: '새벽성회',
    info: <Sub02DawnCrusade />,
  },
  'happy-lecture': {
    title: '행복한 특강',
    info: <Sub07HappyLecture />,
  },
  'lecture-for-everyone': {
    title: '전교인 특강',
    info: <Sub06LectureForEveryone />,
  },
  recreation: {
    title: '행복 더하기 (레크레이션)',
    info: <Sub08Recreation />,
  },
  'healing-crusade': {
    title: '신유집회',
    info: <Sub03HealingCrusade />,
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
    </div>
  );
};

export default CampScheduleDetail;
