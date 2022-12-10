import CampHeader from '../CampHeader/CampHeader';
import classNames from 'classnames/bind';
import styles from './CampMap.module.scss';
import CampMapItem from '../CampMapItem/CampMapItem';

const cn = classNames.bind(styles);

const CampMap = () => {
  return (
    <section className={cn('CampMap')}>
      <CampHeader title='프로그램 위치 안내' />

      <div
        style={{
          height: '44px',
        }}
      />

      <img />

      <ul>
        <CampMapItem number='01' title='저녁성회' color='primary' />
        <CampMapItem number='02' title='새벽성회' color='primary' />
        <CampMapItem number='03' title='신유집회' color='secondary' />
        <CampMapItem number='04' title='상담 · 축사' color='secondary' />
        <CampMapItem number='05' title='상시기도실' color='secondary' />
        <CampMapItem number='06' title='전교인 특강' color='secondary' />
        <CampMapItem number='07' title='행복한 특강' color='secondary' />
        <CampMapItem
          number='08'
          title='행복더하기(레크레이션)'
          color='secondary'
        />
        <CampMapItem number='09-1' title='성락시네마 1관' color='market' />
        <CampMapItem number='09-2' title='성락시네마 2관' color='market' />
        <CampMapItem number='10' title='플리마켓' color='market' />
        <CampMapItem number='11' title='키즈존' color='market' />
        <CampMapItem number='12' title='성락 플레이 그라운드' color='market' />
        <CampMapItem number='13' title='성락 바이블 브릿지' color='market' />
        <CampMapItem number='14-A' title='여선교회 매점' color='food' />
        <CampMapItem number='14-B' title='베대원 매점 1호점' color='food' />
        <CampMapItem number='14-C' title='베대원 매점 2호점' color='food' />
        <CampMapItem number='15' title='식당' color='food' />
      </ul>

      <div
        style={{
          height: '44px',
        }}
      />
    </section>
  );
};

export default CampMap;
