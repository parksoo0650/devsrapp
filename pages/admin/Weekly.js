import Layout from '../../src/components/AdminLayout';
import FloatingButton from '../../src/components/floating-button';
import Link from 'next/link';
import useUser from '../../libs/client/useUser';
import useSWR from 'swr';

const Weekly = () => {
  const { user, isLoading } = useUser();
  const { data } = useSWR('/api/weekly');
  return (
    <Layout canGoBack title='주보 관리자'>
      <div className='flex flex-col divide-y'>
        {data?.weekly?.map((week) => (
          <Link key={week.id} href={`/admin/weekly/${week.id}`}>
            <li className='py-3 sm:py-4 px-4'>
              <div className='flex items-center space-x-4'>
                <div className='flex-shrink-0'>
                  <img
                    className='w-8 h-8 rounded-full'
                    src='/icons/admin_weekly.png'
                    alt='주보'
                  />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-base font-medium text-gray-900  dark:text-white'>
                    {week.titleKR}
                  </p>
                  <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                    {week.publishedAt}
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-orange-500 dark:text-white'>
                  {week.volume}권 {week.weekNo}호
                </div>
              </div>
            </li>
          </Link>
        ))}

        <FloatingButton href='/admin/WeeklyUpload'>
          <svg
            className='h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Weekly;
