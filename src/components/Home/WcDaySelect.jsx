export default function WcDaySelect({ weeks, setWeeks }) {
  const weekday = ['월', '화', '수', '목', '금'];

  return (
    <ul className='flex pt-[50px] pb-[30px] justify-between'>
      {weekday.map((day, index) => (
        <li
          key={index}
          onClick={() => setWeeks(day)}
          className={
            weeks == day
              ? 'text-base font-[600] text-black'
              : 'text-base font-[600] text-[#a0a0a0]'
          }
        >
          {day}요일
        </li>
      ))}
    </ul>
  );
}
