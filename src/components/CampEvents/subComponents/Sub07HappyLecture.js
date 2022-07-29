import Fundamental from '../templates/Fundamental';
import classNames from 'classnames/bind';
import styles from './Sub07HappyLecture.module.scss';

const cn = classNames.bind(styles);

const Sub07AddOn = () => {
  return (
    <ul className={cn('AddOn')}>
      <li>
        <span>① 성경적 육아와 자녀교육</span>
        <span>
          세계센터 <bold>8층</bold>
        </span>
      </li>

      <li>
        <span>② 내가 건강해야 교회가 건강하다</span>
        <span>
          세계센터 <bold>9층</bold>
        </span>
      </li>

      <li>
        <span>③ 그리스도인의 삶과 문화</span>
        <span>
          세계센터 <bold>10층</bold>
        </span>
      </li>

      <li>
        <span>④ 교회와 직장에서의 대인관계</span>
        <span>
          세계센터 <bold>11층</bold>
        </span>
      </li>
    </ul>
  );
};

const Sub07HappyLecture = () => {
  return (
    <Fundamental
      addon={<Sub07AddOn />}
      title='07. 행복한특강'
      place='세계센터 8, 9, 10, 11층'
      date='8. 4(목)'
      time='오전 10:00 - 12:00'
      description={
        <pre>
          우리 삶에서의 작은 행복을 발견하여 <br />
          교회에 행복을 불어넣는 강의
        </pre>
      }
    />
  );
};

export default Sub07HappyLecture;
