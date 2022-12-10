import Fundamental from '../templates/Fundamental';
import classNames from 'classnames/bind';
import styles from './Sub01EveningCrusade.module.scss';

const cn = classNames.bind(styles);

const Sub01AddOn = () => {
  return (
    <div className={cn('AddOn')}>
      <h4>첫째날 - 8. 3 (수)</h4>
      <span>마음이 활짝 열리는 수련회 개회예배</span>
      <h4>둘째날 - 8. 4 (목)</h4>
      <span>
        전 세대가 함께 찬양하며 교회를 위해 뜨겁게 <br /> 기도하는 시간
      </span>
      <h4>셋째날 - 8. 5 (금)</h4>
      <span>감독님의 축복과 교회를 향한 감사와 다짐의 시간</span>
    </div>
  );
};

const Sub01EveningCrusade = () => {
  return (
    <Fundamental
      addon={<Sub01AddOn />}
      title='01. 저녁성회'
      place='세계센터 대성전'
      date='8. 3(수) - 5(금)'
      time='오후 8:00 - 10:30'
      description={
        <pre>
          감독님을 중심으로 전 세대가 함께하는 저녁성회 <br />
          세계센터 대성전 안에 새롭게 만들어진 자모실에서 <br />
          자녀와 함께 저녁성회를 드릴 수 있습니다.
        </pre>
      }
    />
  );
};

export default Sub01EveningCrusade;
