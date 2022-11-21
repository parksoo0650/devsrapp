import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';

export default function HomeBar() {
  const router = useRouter();
  const [bible, setBible] = useState('1');
  const [chapter, setChapter] = useState('1');
  const pathNameSplit = router.pathname.split('/');
  const contentPages = ['/feed', '/onmain', '/prayerMain', '/returnMain'];

  useEffect(() => {
    setBible(() => localStorage.getItem('bible') || '1');
    setChapter(() => localStorage.getItem('chapter') || '1');
  }, []);

  return (
    <>
      <section
        className={`fixed bottom-0 flex items-center justify-around 
        bg-white z-50 w-full h-[72px] py-[9px] border-t border-[#ebebeb]`}
      >
        <Navbar.Tab
          text='홈'
          path='/'
          icon={
            router.pathname == '/'
              ? '/icons/ico_home.svg'
              : '/icons/ico_home_off.svg'
          }
        />
        <Navbar.Tab
          text='예배'
          path='/sermonmain'
          icon={
            router.pathname == '/sermonmain'
              ? '/icons/ico_sermonnew_on.svg'
              : '/icons/ico_sermonnew_off.svg'
          }
        />
        <Navbar.Tab
          text='성경'
          path={`/chapter/${bible}/${chapter}`}
          icon={
            pathNameSplit[1] == 'chapter'
              ? '/icons/ico_bible.svg'
              : '/icons/ico_bible_off.svg'
          }
        />
        <Navbar.Tab
          text='피드'
          path='/feed'
          icon={
            contentPages.includes(router.pathname)
              ? '/icons/ico_content.svg'
              : '/icons/ico_content_off.svg'
          }
        />
        <Navbar.Tab
          text='전체보기'
          path='/SiteMap'
          icon={
            router.pathname == '/SiteMap'
              ? '/icons/ico_menu.svg'
              : '/icons/ico_menu_off.svg'
          }
        />
      </section>
    </>
  );
}
