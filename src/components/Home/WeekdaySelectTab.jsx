export default function WeekdaySelectTab({ weeks, setWeeks }) {
  const weekday = ['월', '화', '수', '목', '금'];

  return (
    <ul className='flex pt-[40px] px-[30px] pb-[22px] justify-between'>
      {weekday.map((day, index) => (
        <li
          key={index}
          onClick={() => setWeeks(day)}
          className={
            weeks == day
              ? 'pb-2 text-base font-[600] text-black border-b-2 border-black'
              : 'pb-2 text-base font-[600] text-[#a0a0a0]'
          }
        >
          {day}요일
        </li>
      ))}
    </ul>
  );
}
