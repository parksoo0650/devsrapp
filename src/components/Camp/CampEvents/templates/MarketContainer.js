import classNames from 'classnames/bind';
import Sub09SungrakCinema from '../subComponents/Sub09SungrakCinema';
import Sub10FleaMarket from '../subComponents/Sub10FleaMarket';
import Sub11KidsZone from '../subComponents/Sub11KidsZone';
import Sub12SungrakPlayground from '../subComponents/Sub12SungrakPlayground';
import Sub13SungrakBibleBridge from '../subComponents/Sub13SungrakBibleBridge';
import styles from './MarketContainer.module.scss';

const cn = classNames.bind(styles);

const MarketContainer = ({ title }) => {
  return (
    <section className={cn('MarketContainer')}>
      <h2>{title}</h2>
      <p>
        8. 4(목) - 5(금) 이틀간 우동마켓에서는 <br />
        플리마켓부터 성락시네마, 키즈존, 성락 플레이 그라운드, <br />
        성락 바이블 브릿지 등이 다양하게 준비되어 있습니다^^
      </p>

      <hr />
      <Sub09SungrakCinema />
      <hr />
      <Sub10FleaMarket />
      <hr />
      <Sub11KidsZone />
      <hr />
      <Sub12SungrakPlayground />
      <hr />
      <Sub13SungrakBibleBridge />
    </section>
  );
};

export default MarketContainer;
