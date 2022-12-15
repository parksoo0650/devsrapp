/**
 * 액션 바(툴바).
 *
 * @param {*} left 액션 바 왼쪽 툴.
 * @param {*} center 액션 바 중앙 툴.
 * @param {*} right 액션 바 오른쪽 툴.
 */
export default function ActionBar({ left, center, right, height = 10 }) {
  const BACKGROUND_OPTIONS = 'bg-center bg-contain bg-no-repeat';

  return (
    <>
      <div
        className={`px-4 w-full h-${height} fixed flex items-center justify-between bg-white z-50`}
      >
        <div className={`w-5 ${BACKGROUND_OPTIONS}`}>{left}</div>

        <h2 className='text-base font-semibold text-[#333333]'>{center}</h2>

        <div className={`w-5 ${BACKGROUND_OPTIONS}`}>{right}</div>
      </div>

      {/* blank */}
      <div className={`h-${height}`} />
    </>
  );
}
