import { useRouter } from 'next/router';

export default function Programme53() {
  const router = useRouter();

  return (
    <>
      <img
        className='fixed top-3 left-3 z-50'
        src='/icons/ico_close.svg'
        onClick={() => router.push('/')}
      />
      <img className='absolute top-0' src='/images/Programme53.jpg' />
    </>
  );
}
