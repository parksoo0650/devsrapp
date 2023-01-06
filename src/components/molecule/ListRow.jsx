import ClickToMovePage from '../atom/ClickToMovePage';

/**
 * 목록 행(1).
 *
 * @param {string} title 제목.
 * @param {string} backgroundColor 배경 색상.
 */
ListRow.V1 = ({ title, backgroundColor }) => {
  return (
    <ClickToMovePage
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

export default function ListRow() {}
