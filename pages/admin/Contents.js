import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import useUser from '../../libs/client/useUser';
import Layout from '../../src/components/AdminLayout';
import FloatingButton from '../../src/components/floating-button';

const Contents = () => {
  const { user, isLoading } = useUser();

  const router = useRouter();

  const { data } = useSWR(`/api/contents?kind=${router.query.kind}`);

  const strKind = {
    shorts: '1분 은혜 관리자',
    sermon: '설교 관리자',
    oncontents: 'ON-콘텐츠 관리자',
    praise: '찬양 관리자',
    feed: '피드 관리자',
    camp22: '2022 수련회 영상 등록',
  };

  const icons = {
    shorts: (
      <img
        className='w-8 h-8 rounded-full'
        src='/icons/admin_shorts.png'
        alt='1분 은혜'
      />
    ),

    sermon: (
      <img
        className='w-8 h-8 rounded-full bg-teal-100'
        src='/icons/admin_sermon.png'
        alt='설교'
      />
    ),

    oncontents: (
      <img
        className='w-8 h-8 rounded-full'
        src='/icons/admin_contents.png'
        alt='ON-콘텐츠'
      />
    ),

    praise: (
      <img
        className='w-8 h-8 rounded-full bg-red-200'
        src='/icons/admin_praise.png'
        alt='찬양'
      />
    ),

    feed: (
      <img
        className='w-8 h-8 rounded-full'
        src='/icons/admin_feed.png'
        alt='피드'
      />
    ),
  };

  return (
    <Layout canGoBack title={strKind[router.query.kind]}>
      <div className='flex flex-col divide-y'>
        {data?.contents?.map((content) => (
          <Link key={content.id} href={`/admin/contents/${content.id}`}>
            <li className='py-3 sm:py-4 px-4'>
              <div className='flex items-center space-x-4'>
                <div className='flex-shrink-0'>{icons[router.query.kind]}</div>
                <div className='flex-1 min-w-0'>
                  <p className='text-base font-medium text-gray-900  dark:text-white'>
                    {content.name}
                  </p>
                  <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                    {content.publishedAt}
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-orange-500 dark:text-white'>
                  {content.kind}
                </div>
              </div>
            </li>
          </Link>
        ))}

        <FloatingButton
          href={`/admin/ContentsUpload?kind=${router.query.kind}`}
        >
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

export default Contents;
