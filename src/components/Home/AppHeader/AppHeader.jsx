import { useRouter } from 'next/router';

export default function AppHeader() {
  const router = useRouter();

  return (
    <header>
      <div className='inner'>
        <h1
          className='logo'
          onClick={() => {
            router.push('/');
          }}
        >
          <img src='../images/logo.svg' alt='성락교회' />
        </h1>
        {isLive ? (
          <div className='live'>
            라이브 <img src='/icons/ico_live.svg' alt='라이브' />
          </div>
        ) : (
          <>
            {dataSermon?.contents[0]?.subKind == 'live' && (
              <div className='live'>
                라이브 <img src='/icons/ico_live.svg' alt='라이브' />
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
}
