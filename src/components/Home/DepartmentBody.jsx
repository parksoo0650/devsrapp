import DepartmentContent from './DepartmentContent';

export default function DepartmentBody({ department }) {
  return (
    <>
      <span className='p-[30px] text-xl text-[#333333]'>
        <strong>[{department}] </strong>
        콘텐츠 보여줄 자리입니다...
      </span>

      <DepartmentContent />
      <DepartmentContent />
    </>
  );
}
