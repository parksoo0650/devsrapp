import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { isIOS } from 'react-device-detect';

export default function HomeBar() {
  const router = useRouter();
  const [bottomPadding, setBottomPadding] = useState('');
  const pathNameSplit = router.pathname.split('/');
  const contentPages = ['/onmain', '/prayerMain', '/returnMain'];
  const [lsBible, setLsBible] = useState('1');
  const [lsChapter, setLsChapter] = useState('1');

  useEffect(() => {
    if (localStorage.getItem('bible')) {
      setLsBible(localStorage.getItem('bible'));
    } else {
      setLsBible('1');
    }
    if (localStorage.getItem('chapter')) {
      setLsChapter(localStorage.getItem('chapter'));
    } else {
      setLsChapter('1');
    }
    if (isIOS) {
      setBottomPadding('26px');
    }
  }, []);

  return (
    <>
      <ul className={`pb-[${bottomPadding}]`}>
        <li>
          <Link href='/'>
            <a>
              <div className='ico'>
                <img
                  src={
                    router.pathname == '/'
                      ? '/icons/ico_home.svg'
                      : '/icons/ico_home_off.svg'
                  }
                  alt='홈'
                />
              </div>
              <div className='menu'>홈</div>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/sermonmain'>
            <a>
              <div className='ico'>
                <img
                  src={
                    router.pathname == '/sermonmain'
                      ? '/icons/ico_sermonnew_on.svg'
                      : '/icons/ico_sermonnew_off.svg'
                  }
                  alt='예배'
                />
              </div>
              <div className='menu'>예배</div>
            </a>
          </Link>
        </li>
        <li>
          <Link href={`/chapter/${lsBible}/${lsChapter}`}>
            <a>
              <div className='ico'>
                <img
                  src={
                    pathNameSplit[1] == 'chapter'
                      ? '/icons/ico_bible.svg'
                      : '/icons/ico_bible_off.svg'
                  }
                  alt='성경'
                />
              </div>
              <div className='menu'>성경</div>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/onmain'>
            <a>
              <div className='ico'>
                <img
                  src={
                    contentPages.includes(router.pathname)
                      ? '/icons/ico_content.svg'
                      : '/icons/ico_content_off.svg'
                  }
                  alt='피드'
                />
              </div>
              <div className='menu'>피드</div>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/SiteMap'>
            <a>
              <div className='ico'>
                <img
                  src={
                    router.pathname == '/SiteMap'
                      ? '/icons/ico_menu.svg'
                      : '/icons/ico_menu_off.svg'
                  }
                  alt='전체보기'
                />
              </div>
              <div className='menu'>전체보기</div>
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
}
