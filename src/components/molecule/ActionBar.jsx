/**
 * 액션 바(툴바).
 *
 * @param {string} title 액션 바 중앙 제목.
 * @param {*} left 액션 바 왼쪽 툴.
 * @param {*} right 액션 바 오른쪽 툴.
 */
export default function ActionBar({ left, title, right }) {
  const ACTION_BAR_HEIGHT = 10;
  const BACKGROUND_OPTIONS = 'bg-center bg-contain bg-no-repeat';

  return (
    <>
      <div
        className={`px-4 w-full h-${ACTION_BAR_HEIGHT} fixed flex items-center justify-between bg-white`}
      >
        <div className={`w-5 ${BACKGROUND_OPTIONS}`}>{left}</div>

        <h2 className='text-base font-semibold text-[#333333]'>{title}</h2>

        <div className={`w-5 ${BACKGROUND_OPTIONS}`}>{right}</div>
      </div>

      {/* blank */}
      <div className={`h-${ACTION_BAR_HEIGHT}`} />
    </>
  );
}
