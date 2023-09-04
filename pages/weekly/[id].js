import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Weeklyorder from '../../src/components/Weeklyorder';
import Weeklysummary from '../../src/components/Weeklysummary';
import Loading from '../../src/components/Loading';
import useSWR from 'swr';
import ActionBar from '../../src/components/molecule/ActionBar';
import ClickToMoveBack from '../../src/components/atom/ClickToMoveBack';

export default function weekly() {
  const router = useRouter();
  let kind = '';
  router.query.kind ? (kind = router.query.kind) : (kind = 'ord');
  const [tabKind, setTabKind] = useState(kind);
  const [isLoading, setIsLoading] = useState(true);

  const { data, error } = useSWR(
    router.query.id ? `/api/weekly/${router.query.id}` : null
  );

  useEffect(() => {
    setTabKind(kind);
  }, [router]);

  return (
    <div className='sub_container sermon_detail'>
      {/* 상단 바 */}
      <section className='fixed w-full z-50 bg-white'>
        <div className='flex items-center justify-between h-[60px] px-1'>
          {/* <div className='flex items-center' onClick={() => router.push('/')}>
            <Icon.Back />
          </div> */}
          <h3 className='text-base font-medium text-[#222222]'>
            {data?.weekly?.titleKR}
          </h3>
          <div className='flex items-center'>
            {/* 검색 기능 숨김 */}
            {/* <Icon.Search /> */}
            <div className='h-12 w-12' />
          </div>
        </div>
      </section>

      {!data ? (
        <div className='loading_box'>
          <Loading />
        </div>
      ) : (
        <>
          <div className='flex justify-center items-center py-3 bg-zinc-700 text-white text-base'>
            제 {data?.weekly.volume}권 {data?.weekly.weekNo}호{' '}
            <span className='px-2 opacity-50 text-sm'>|</span>{' '}
            {data?.weekly.publishedAt}
          </div>
          <div className='section'>
            <ul className='tab_area'>
              <li
                onClick={() => {
                  if (tabKind != 'ord') {
                    setTabKind('ord');
                  }
                }}
                className={tabKind == 'ord' ? 'on' : ''}
              >
                예배순서
              </li>
              <li
                onClick={() => {
                  if (tabKind != 'ser') {
                    setTabKind('ser');
                  }
                }}
                className={tabKind == 'ser' ? 'on' : ''}
              >
                설교요지
              </li>
            </ul>
            <div className='tab_con'>
              {tabKind == 'ord' && <Weeklyorder data={data?.weekly} />}
              {tabKind == 'ser' && <Weeklysummary data={data?.weekly} />}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
