import { BookConsumer } from '../../bibleProvider';
import styles from '../../../../pages/chapter/[id]/Bible.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const DEFAULT_INCREASE = 1;
const NEW_TESTAMENT_INCREASE = 40;

const BibleList = ({
  currentBook, // 성경의 권(Bible) 수: 창세기는 1, 출애굽기는 2...
  setCurrentBook,
  category, // 전체, 구약, 신약, 장
  currentChapter, // 선택한 장(Chapter) 수
  setCurrentChapter,
  setIsOpen, // 모달창을 열면 true, 닫으면 false
}) => {
  const [openedDropdownIndex, setOpenedDropdownIndex] = useState(null);
  const router = useRouter();

  /**
   * 성경 장수 선택 컴포넌트.
   */
  const BibleChapterSelect = ({ book_cnt, bookIndex }) => {
    return (
      <div className={cn('ChapterList')}>
        {[...Array(book_cnt[bookIndex])].map((n, i) => (
          <Link href={`/chapter/${currentBook}/${i + 1}`} key={i}>
            <a>
              <p
                key={i}
                className={
                  router.query.id == bookIndex && currentChapter == i + 1
                    ? cn('on')
                    : ''
                }
                onClick={() => {
                  setCurrentChapter(i + 1);
                  setIsOpen(false);
                }}
              >
                <span>{i + 1}</span>
              </p>
            </a>
          </Link>
        ))}
      </div>
    );
  };

  /**
   * 탭 밑 부분, BODY 템플릿.
   */
  const BibleListBody = ({ type, start, end, indexIncrease }) => {
    return (
      <BookConsumer>
        {({ all_book, book_cnt }) => (
          <ul className={category == type ? cn('BookList') : 'book_list hide'}>
            {all_book.slice(start, end).map((book, i) => (
              <li
                key={i}
                // className={currentBook == i + indexIncrease ? '' : ''}
                onClick={() => {
                  setCurrentBook(i + indexIncrease);

                  // 클릭한 드롭다운이 이미 열려있으면 닫고, 아니면 열기.
                  openedDropdownIndex == i + indexIncrease
                    ? setOpenedDropdownIndex(() => null)
                    : setOpenedDropdownIndex(() => i + indexIncrease);
                }}
              >
                <p className={cn('BookDropdown')}>
                  <span
                    className={
                      openedDropdownIndex == i + indexIncrease ? cn('on') : null
                    }
                  >
                    {book}
                  </span>
                  <span
                    className={
                      openedDropdownIndex == i + indexIncrease
                        ? cn('BookDropdownArrowUp')
                        : cn('BookDropdownArrowDown')
                    }
                  />
                </p>

                {/* 성경 장수 선택 컴포넌트 */}
                {openedDropdownIndex == i + indexIncrease ? (
                  <BibleChapterSelect
                    book_cnt={book_cnt}
                    bookIndex={i + indexIncrease}
                  />
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </BookConsumer>
    );
  };

  /**
   * 탭 밑 부분, BODY 컴포넌트.
   */
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
    </div>
  );
};

export default BibleList;
