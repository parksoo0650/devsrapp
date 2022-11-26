import Link from 'next/link';
import { useEffect } from 'react';

export default function Modal({ handleModalBackground }) {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px; 
      overflow-y: scroll; 
      width: 100%;
    `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <div>
      <div
        className='absolute top-0 w-screen h-screen bg-black/70 z-[100]'
        onClick={() => handleModalBackground()}
      />

      <div
        className='fixed bottom-0 w-screen h-[375px] flex items-end justify-center
        bg-[url("images/popup_53.png")] bg-contain bg-center bg-no-repeat z-[200]'
      >
        <div
          className='w-full px-5 pb-[34px]'
          onClick={() => setTimeout(handleModalBackground, 500)}
        >
          <Link href='/Programme53'>
            <a className='inline-block w-full bg-black text-white font-[500] text-[14px] py-4 text-center'>
              53주년 교회창립 예배 순서 바로가기
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
