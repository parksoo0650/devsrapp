import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { isIOS } from 'react-device-detect';

export default function HomeBar() {
  const router = useRouter();
  const [bottomPadding, setBottomPadding] = useState('');
  const pathNameSplit = router.pathname.split('/');
  const contentSrinstaPages = ['/srinsta'];
  const contentCommunityPages = ['/community'];

  useEffect(() => {
    if (isIOS) {
      setBottomPadding('26px');
    }
  }, []);

  return (
    <>
      <ul id='home_bar'>
        <li>
          <Link href='/2022-summer-camp'>
            <a>
              <div className='ico'>
                <img
                  src={
                    router.pathname == '/2022-summer-camp'
                      ? '/icons/CampHomeActivated.svg'
                      : '/icons/CampHome.svg'
                  }
                  alt='홈'
                />
              </div>
              <div className='menu'>홈</div>
            </a>
          </Link>
        </li>

        <li>
          <Link href='/srinsta'>
            <a>
              <div className='ico'>
                <img
                  src={
                    contentSrinstaPages.includes(router.pathname)
                      ? '/icons/CampInstaActivated.svg'
                      : '/icons/CampInsta.svg'
                  }
                  alt='성락in스타'
                />
              </div>
              <div className='menu'>성락in스타</div>
            </a>
          </Link>
        </li>

        <li>
          <Link href='/2022-summer-camp/info'>
            <a>
              <div className='ico'>
                <img
                  src={
                    router.pathname == '/2022-summer-camp/info'
                      ? '/icons/CampProgramActivated.svg'
                      : '/icons/CampProgram.svg'
                  }
                  alt='수련회 안내'
                />
              </div>
              <div className='menu'>수련회 안내</div>
            </a>
          </Link>
        </li>

      </ul>

      <style jsx>
        {`
          #home_bar {
            padding-bottom: ${bottomPadding};
          }
        `}
      </style>
    </>
  );
}
