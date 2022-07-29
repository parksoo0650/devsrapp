import CampHeader from '../CampHeader/CampHeader';
import classNames from 'classnames/bind';
import styles from './CampEvents.module.scss';
import Sub01EveningCrusade from './subComponents/Sub01EveningCrusade';
import Sub02DawnCrusade from './subComponents/Sub02DawnCrusade';
import Sub03HealingCrusade from './subComponents/Sub03HealingCrusade';
import Sub04ConsultingAndDeliverance from './subComponents/Sub04ConsultingAndDeliverance';
import Sub05PrayerRoom from './subComponents/Sub05PrayerRoom';
import Sub06LectureForEveryone from './subComponents/Sub06LectureForEveryone';
import Sub07HappyLecture from './subComponents/Sub07HappyLecture';
import Sub08Recreation from './subComponents/Sub08Recreation';
import MarketContainer from './templates/MarketContainer';
import Sub14Store from './subComponents/Sub14Store';
import Sub15Meals from './subComponents/Sub15Meals';

const cn = classNames.bind(styles);

const CampEvents = ({ onClick }) => {
  return (
    <section className={cn('CampEvents')}>
      <CampHeader onClick={onClick} title='프로그램 세부정보' />

      <Sub01EveningCrusade />
      <Sub02DawnCrusade />
      <Sub03HealingCrusade />
      <Sub04ConsultingAndDeliverance />
      <Sub05PrayerRoom />
      <Sub06LectureForEveryone />
      <Sub07HappyLecture />
      <Sub08Recreation />

      <MarketContainer title='09-13. 우동마켓(우리동네마켓)' />

      <Sub14Store title='14. 매점' />
      <Sub15Meals />
    </section>
  );
};

export default CampEvents;
