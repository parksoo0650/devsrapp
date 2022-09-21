import styles from '../../../../pages/chapter/[id]/Bible.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

const BibleTabs = ({ bibleBook, setBibleBook }) => {
  return (
    <ul className={cn('Tab')}>
      <li
        onClick={() => {
          setBibleBook('전체');
        }}
        className={bibleBook == '전체' ? cn('on') : ''}
      >
        <span>
          <p>전체</p>
        </span>
      </li>

      <li
        onClick={() => {
          setBibleBook('구약');
        }}
        className={bibleBook == '구약' ? cn('on') : ''}
      >
        <span>
          <p>구약</p>
        </span>
      </li>

      <li
        onClick={() => {
          setBibleBook('신약');
        }}
        className={bibleBook == '신약' ? cn('on') : ''}
      >
        <span>
          <p>신약</p>
        </span>
      </li>
    </ul>
  );
};

export default BibleTabs;
