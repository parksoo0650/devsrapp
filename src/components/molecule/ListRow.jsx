import ClickToMovePage from '../atom/ClickToMovePage';

/**
 * 목록 행(1).
 *
 * @param {string} title 제목.
 * @param {string} backgroundColor 배경 색상.
 */
ListRow.V1 = ({ title, backgroundColor, route }) => {
  return (
    <ClickToMovePage
      route={route}
      content={
        <div
          className={`w-screen flex items-center justify-between px-7 h-16 bg-[${backgroundColor}]`}
        >
          <span className='text-base font-medium text-white'>{title}</span>

          <div className='w-4 h-4 bg-[url("/icons/right_arrow_white.svg")] bg-no-repeat bg-contain bg-center' />
        </div>
      }
    />
  );
};

/**
 * 목록 행(2). 추후 텍스트 정렬 옵션 추가(left, center, right).
 */
ListRow.TextsOnly = ({ text1, text2, route }) => {
  return (
    <ClickToMovePage
      route={route}
      content={
        <div className='w-screen text-left px-4 py-2 h-16 bg-white grid items-center'>
          <span className='block font-bold text-lg text-[#333333]'>
            {text1}
          </span>
          <span className='block font-semibold text-sm text-[#999999]'>
            {text2}
          </span>
        </div>
      }
    />
  );
};

export default function ListRow() {}
