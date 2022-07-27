import classNames from 'classnames/bind';
import Sub09SungrakCinema from '../subComponents/Sub09SungrakCinema';
import styles from './MarketContainer.module.scss';

const cn = classNames.bind(styles);

const MarketContainer = ({ title }) => {
  return (
    <section className={cn('MarketContainer')}>
      <h3>{title}</h3>
      <p>
        8. 4(목) - 5(금) 이틀간 우동마켓에서는 <br />
        플리마켓부터 성락시네마, 키즈존, 성락 플레이 그라운드, <br />
        성락 바이블 브릿지 등이 다양하게 준비되어 있습니다^^
      </p>

      <hr />
      <Sub09SungrakCinema />
    </section>
  );
};

export default MarketContainer;
