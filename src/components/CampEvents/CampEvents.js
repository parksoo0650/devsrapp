import CampHeader from '../CampHeader/CampHeader';
import classNames from 'classnames/bind';
import styles from './CampEvents.module.scss';
import Sub01EveningCrusade from './subComponents/Sub01EveningCrusade';

const cn = classNames.bind(styles);

const CampEvents = ({ onClick }) => {
  return (
    <section className={cn('CampEvents')}>
      <CampHeader onClick={onClick} title='프로그램 세부정보' />
      <Sub01EveningCrusade />
    </section>
  );
};

export default CampEvents;
