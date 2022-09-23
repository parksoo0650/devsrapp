import styles from '../../../../pages/chapter/[id]/Bible.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

const BibleTabs = ({ category, setCategory }) => {
  return (
    <ul className={cn('Tab')}>
      <li
        onClick={() => {
          setCategory('전체');
        }}
        className={category == '전체' ? cn('on') : ''}
      >
        <span>
          <p>전체</p>
        </span>
      </li>

      <li
        onClick={() => {
          setCategory('구약');
        }}
        className={category == '구약' ? cn('on') : ''}
      >
        <span>
          <p>구약</p>
        </span>
      </li>

      <li
        onClick={() => {
          setCategory('신약');
        }}
        className={category == '신약' ? cn('on') : ''}
      >
        <span>
          <p>신약</p>
        </span>
      </li>
    </ul>
  );
};

export default BibleTabs;
