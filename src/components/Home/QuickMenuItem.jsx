import { useRouter } from 'next/router';

const QuickMenuItem = ({ pathname, imgSrc, title }) => {
  const router = useRouter();

  return (
    <li
      className='mb-[22px] text-center w-3/12 float-left'
      // 메뉴를 클릭하면 pathname 페이지로 이동
      onClick={() => router.push(pathname)}
    >
      {/* 메뉴 아이콘 이미지 소스 & 대체 텍스트 */}
      <div className='w-[66px] h-[66px] mx-auto mb-[6px] bg-white rounded-[20px] relative'>
        <img
          className='absolute translate-x-[34%] translate-y-[35%]'
          src={imgSrc}
          alt={title}
        />
      </div>

      {/* 메뉴 제목 */}
      <div className='text-xs text-center'>{title}</div>
    </li>
  );
};

export default QuickMenuItem;
