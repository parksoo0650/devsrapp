import Fundamental from '../templates/Fundamental';
import classNames from 'classnames/bind';
import styles from './Sub08Recreation.module.scss';

const cn = classNames.bind(styles);

const Sub08AddOn = () => {
  return (
    <ul className={cn('AddOn')}>
      <li>
        <span>① 성락 더하기</span>
        <span>우리 교회를 맞춰라!</span>
      </li>

      <li>
        <span>② 사랑 더하기</span>
        <span>나와라! 사랑의 눈!</span>
      </li>

      <li>
        <span>③ 겸손 더하기</span>
        <span>찾았다! 겸손한 성락인</span>
      </li>

      <li>
        <span>④ 행복 더하기</span>
        <span>성락교회에 행복을 주세요!</span>
      </li>
    </ul>
  );
};

const Sub08Recreation = () => {
  return (
    <Fundamental
      addon={<Sub08AddOn />}
      title='08. 행복더하기 (레크레이션)'
      place='세계센터 대성전'
      date='8. 4(목)'
      time='오후 2:30 - 4:30'
      description={
        <pre>교회와 함께 사랑과 겸손으로 행복한 성락인을 초대합니다!</pre>
      }
    />
  );
};

export default Sub08Recreation;
