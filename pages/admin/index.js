import Link from 'next/link';
import useSWR from 'swr';
import useUser from '../../libs/client/useUser';

/**
 * 어드민 패널 첫 화면.
 */
const Admin = () => {
  const { user, isLoading } = useUser();

  const { data: g } = useSWR('/api/contents?kind=shorts');
  const { data: s } = useSWR('/api/contents?kind=sermon');
  const { data: o } = useSWR('/api/contents?kind=oncontents');
  const { data: p } = useSWR('/api/contents?kind=praise');
  const { data: f } = useSWR('/api/contents?kind=feed');

  return (
    <section className='h-screen bg-slate-100'>
      <h1 className='mt-10 mx-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
        Hi,{' '}
        <span className='underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600'>
          Administrator
        </span>
        .
      </h1>
      <p className='mt-4 mx-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
        Manage the contents to be displayed in SRAPP.
      </p>

      <div className='max-w-2xl mx-4 pt-4'>
        <div className='p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
          {/* List Header */}
          <div className='flex justify-between items-center mb-4'>
            <h3 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
              Contents
            </h3>
            <a
              href='https://www.youtube.com/@SUNGRAKCHURCH'
              target='_blank'
              className='text-sm font-medium text-blue-600 hover:underline dark:text-blue-500'
            >
              유튜브 바로가기
            </a>
          </div>
          {/* end of List Header */}

          {/* List Body */}
          <div className='flow-root'>
            <ul
              role='list'
              className='divide-y divide-gray-200 dark:divide-gray-700'
            >
              <Link href='/admin/Contents?kind=shorts'>
                <li className='py-3 sm:py-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <img
                        className='w-8 h-8 rounded-full'
                        src='/icons/admin_shorts.png'
                        alt='1분 은혜'
                      />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <p className='text-base font-medium text-gray-900 truncate dark:text-white'>
                        1분 은혜 관리자
                      </p>
                    </div>
                    <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                      {g?.contents?.length}
                    </div>
                  </div>
                </li>
              </Link>

              <Link href='/admin/Contents?kind=sermon'>
                <li className='py-3 sm:py-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <img
                        className='w-8 h-8 rounded-full bg-teal-100'
                        src='/icons/admin_sermon.png'
                        alt='설교'
                      />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <p className='text-base font-medium text-gray-900 truncate dark:text-white'>
                        설교 관리자
                      </p>
                    </div>
                    <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                      {s?.contents?.length}
                    </div>
                  </div>
                </li>
              </Link>

              <Link href='/admin/Contents?kind=oncontents'>
                <li className='py-3 sm:py-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <img
                        className='w-8 h-8 rounded-full'
                        src='/icons/admin_contents.png'
                        alt='ON-콘텐츠'
                      />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <p className='text-base font-medium text-gray-900 truncate dark:text-white'>
                        ON-콘텐츠 관리자
                      </p>
                    </div>
                    <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                      {o?.contents?.length}
                    </div>
                  </div>
                </li>
              </Link>

              <Link href='/admin/Contents?kind=praise'>
                <li className='py-3 sm:py-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <img
                        className='w-8 h-8 rounded-full bg-red-200'
                        src='/icons/admin_praise.png'
                        alt='찬양'
                      />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <p className='text-base font-medium text-gray-900 truncate dark:text-white'>
                        찬양 관리자
                      </p>
                    </div>
                    <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                      {p?.contents?.length}
                    </div>
                  </div>
                </li>
              </Link>

              <Link href='/admin/Weekly'>
                <li className='py-3 sm:py-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <img
                        className='w-8 h-8 rounded-full'
                        src='/icons/admin_weekly.png'
                        alt='주보'
                      />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <p className='text-base font-medium text-gray-900 truncate dark:text-white'>
                        주보 관리자
                      </p>
                    </div>
                    <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                      -
                    </div>
                  </div>
                </li>
              </Link>

              <Link href='/admin/Contents?kind=feed'>
                <li className='pt-3 pb-0 sm:pt-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <img
                        className='w-8 h-8 rounded-full'
                        src='/icons/admin_feed.png'
                        alt='피드'
                      />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <p className='text-base font-medium text-gray-900 truncate dark:text-white'>
                        피드 관리자
                      </p>
                    </div>
                    <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                      {f?.contents?.length}
                    </div>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
          {/* end of List Body */}
        </div>
      </div>

      {/* Copyright */}
      <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400 mx-4 mt-8'>
        © {new Date().getFullYear()}{' '}
        <a
          href='http://sungrak.or.kr/sr/'
          target='_blank'
          className='hover:underline'
        >
          SUNGRAK CHURCH
        </a>
        . All Rights Reserved.
      </span>
    </section>
  );
};

export default Admin;
