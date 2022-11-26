export default function PrayerCard({
  title,
  content1,
  content2,
  content3,
  content4,
  content5,
}) {
  return (
    <div className='px-5'>
      <h4 className='text-[#313131] text-lg font-bold pb-[14px]'>{title}</h4>

      <p className='pb-7 leading-7 text-base'>
        · {content1} <br />· {content2} <br />· {content3} <br />· {content4}
        <br />· {content5}
      </p>
    </div>
  );
}
