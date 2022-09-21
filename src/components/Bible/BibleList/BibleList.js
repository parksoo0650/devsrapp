import { BookConsumer } from '../../bibleProvider';
import styles from '../../../../pages/chapter/[id]/Bible.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);
import Link from 'next/link';
import { useState } from 'react';

const DEFAULT_INCREASE = 1;
const NEW_TESTAMENT_INCREASE = 40;

const BibleList = ({
  isBible, // 성경의 권(Bible) 수: 창세기는 1, 출애굽기는 2...
  setIsBible,
  bibleBook, // 전체, 구약, 신약, 장(Chapter)
  setBibleBook,
  isChapter, // 선택한 장(Chapter) 수
  setIsChapter,
  setIsOpen, // 모달창을 열면 true, 닫으면 false
}) => {
  /**
   * 성경 리스트 BODY 템플릿.
   */
  const BibleListBody = ({ type, start, end, indexIncrease }) => {
    const [isDropdownOpened, setIsDropdownOpened] = useState(false);

    return (
      <BookConsumer>
        {({ all_book }) => (
          <ul className={bibleBook == type ? cn('BookList') : 'book_list hide'}>
            {all_book.slice(start, end).map((book, i) => (
              <li
                key={i}
                className={isBible == i + indexIncrease ? 'on' : ''}
                onClick={() => {
                  setIsBible(i + indexIncrease);
                  setBibleBook('장');
                }}
              >
                <span>{book}</span>
                <span className={cn('BookDropdownArrowDown')} />
              </li>
            ))}
          </ul>
        )}
      </BookConsumer>
    );
  };

  return (
    <div className='tab_con'>
      {/* 전체 */}
      <BibleListBody
        type='전체'
        start={0}
        end={66}
        indexIncrease={DEFAULT_INCREASE}
      />

      {/* 구약 */}
      <BibleListBody
        type='구약'
        start={0}
        end={39}
        indexIncrease={DEFAULT_INCREASE}
      />

      {/* 신약 */}
      <BibleListBody
        type='신약'
        start={39}
        end={66}
        indexIncrease={NEW_TESTAMENT_INCREASE}
      />

      {/* 장 선택 */}
      <BookConsumer>
        {({ book_cnt }) => (
          <ul
            className={
              bibleBook == '장' ? cn('ChapterList') : 'chapter_list hide'
            }
          >
            {[...Array(book_cnt[isBible])].map((n, i) => (
              <li
                key={i}
                className={isChapter == i + 1 ? 'on' : ''}
                onClick={() => {
                  setIsChapter(i + 1);
                  setIsOpen(false);
                }}
              >
                <Link href={`/chapter/${isBible}/${i + 1}`}>
                  <a>
                    <span>{i + 1}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </BookConsumer>
    </div>
  );
};

export default BibleList;
