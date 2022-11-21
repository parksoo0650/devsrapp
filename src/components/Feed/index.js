/**
 * 피드 최상단 태그.
 */
Feed.Tags = () => {
  const tags = ['노스킵', '어린이부', '헌신'];

  return (
    <div className='px-5 py-7'>
      {tags.map((tag) => (
        <span className='inline-block text-[22px] font-semibold mr-3'>
          #{tag}
        </span>
      ))}
    </div>
  );
};

/**
 * 피드 날짜.
 */
Feed.Date = ({ date }) => {
  return <h3 className='font-semibold text-[20px] px-5 mb-3'>{date}</h3>;
};

/**
 * 피드 콘텐츠.
 */
Feed.Content = ({ date, title, tags, department }) => {
  return (
    <div className='px-5'>
      {/* 영상 썸네일로 교체해야 합니다. */}
      <div className='w-full h-[188px] bg-black mb-[14px]' />

      <span className='block text-base mb-3'>{title}</span>

      {tags.map((tag) => (
        <span
          className='inline-block text-[#444444] text-[14px] 
          px-[10px] pt-[4px] pb-[2px] mr-[10px] border border-[#d4d4d4] rounded'
        >
          #{tag}
        </span>
      ))}

      <span className='block py-3 mb-7 text-xs'>
        {date} ﹒ {department}
      </span>
    </div>
  );
};

export default function Feed() {}
