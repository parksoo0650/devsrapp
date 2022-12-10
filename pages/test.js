import ClickToMovePage from '../src/components/molecule/ClickToMovePage';

export default function test() {
  return (
    <>
      <ClickToMovePage
        route='/'
        content={
          <div className='flex items-center justify-between px-7 py-5 bg-[#d38730]'>
            <span className='text-base font-medium text-white'>
              교회를 위한 기도제목 바로가기
            </span>

            <div className='w-4 h-4 bg-[url("/icons/right_arrow_white.svg")] bg-no-repeat bg-contain bg-center' />
          </div>
        }
      />

      <ClickToMovePage
        route='/Programme53'
        content={<img src='/images/banner_53_quick.png' />}
      />
    </>
  );
}
