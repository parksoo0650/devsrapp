import { BookConsumer } from '../../bibleProvider';
import styles from '../../../../pages/chapter/[id]/Bible.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);
import Link from 'next/link';

const BibleHeader = ({ setIsOpen, bid, cid, isActive }) => {
  return (
    <BookConsumer>
      {({ book_name }) => (
        // 성경 페이지의 헤더(탑) 부분
        <div className={cn('top_area', 'Header')}>
          {/* 성경 환경 설정 (Settings)  */}
          <div className={cn('Settings')} />

          {/* 성경 이름과 장 표시 드롭다운 */}
          <div
            className={cn('top_title', 'txt_left', 'Dropdown')}
            onClick={() => setIsOpen(true)}
          >
            <div className={cn('DropdownText')}>
              {book_name[bid]} {cid}장{' '}
            </div>
            <span className={cn('DropdownArrow')} />
          </div>

          {/* 검색 버튼 */}
          <Link href={`/search`}>
            <a>
              <div alt='검색' className={cn('Search')} />
            </a>
          </Link>

          {/* <ul className='tool_list'>
                <li onClick={handleToggle}>
                  <img src='/icons/ico_setting.svg' alt='설정' />
                </li>
                <Link href={`/search`}>
                  <a>
                    <li>
                      <img src='/icons/ico_search.svg' alt='검색' />
                    </li>
                  </a>
                </Link>
              </ul> */}

          <div className={isActive ? 'txt_control' : 'txt_control hide'}>
            <div className='tit'>
              <strong>텍스트 크기</strong>
              <span>16pt</span>
            </div>
            <ul className='size'>
              <li>가</li>
              <li>
                <strong>가</strong>
              </li>
            </ul>
          </div>
        </div>
        // end of top_area
      )}
    </BookConsumer>
  );
};

export default BibleHeader;
