import { useEffect, useState } from 'react';
import YouTube from "react-youtube";

export default function FeedDetail({
  date,
  title,
  tags,
  department,
  videoId,
  handleDetailHidden,
}) {
  const [toastShow, setToastShow] = useState(false);

  const opts = {
    width: "320px",
    height: "200px",
    playerVars: {
      loop: 1,
      controls: 1,
    },
  };
  const [youtubeTarget, setYoutubeTarget] = useState({});
  const [isMute, setIsMute] = useState(false);
  const onPlayerReady = (event) => {
    event.target.mute();
    event.target.setVolume(0);
    event.target.playVideo();
    setYoutubeTarget(event.target);
    setIsMute(true);
  };

  /**
   * 상세 페이지를 열었을 때, 외부 피드 페이지 스크롤 방지.
   */
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <section className='fixed top-0 bg-white w-full h-screen z-50'>
      {/* 헤더: X 버튼 + 행사 영상 */}
      <div className='h-[40px] flex items-center justify-between px-[22px]'>
        <img
          className='w-[16px] h-[16px]'
          src='/icons/ico_close.svg'
          onClick={() => handleDetailHidden(true)}
        />
        <h3 className='text-base font-[500]'>행사 영상</h3>
        <div id='blank' className='w-[14px] h-[14px]' />
      </div>

      {/* 영상 */}
      <div className='w-full h-[210px] bg-[#c4c4c4] mb-[14px]'>
        {isMute && (
          <div
            onClick={() => {
              youtubeTarget.unMute();
              youtubeTarget.setVolume(100);
              setIsMute(false);
            }}
            style={{ 
              position: "absolute",
              zIndex: "10",
              padding: "15px",
            }}
          >
            <img style={{ width: "50%" }} src="/images/btn_mute.png" alt="음소거" />
          </div>
        )}
        <YouTube
          videoId={videoId}
          opts={opts}
          containerClassName="iframe_wrap"
          onReady={onPlayerReady}
        />
      </div>

      {/* 하단 영상 정보 */}
      <div className='px-5'>
        <div className='flex items-start justify-between'>
          <span className='block text-base mb-3 w-[280px] break-keep'>
            {title}
          </span>

          {/* 링크 복사 버튼 */}
          <img
            className='w-[30px] h-[30px]'
            src='/icons/ico_share_2.svg'
            onClick={() => {
              navigator.clipboard.writeText('복사할 링크를 이곳에 입력하세요.');
              setToastShow(() => true);
              setTimeout(() => setToastShow(() => false), 3000);
            }}
            alt = "copy link"
          />
        </div>

        {tags.map((tag, i) => (
          <span
            key = {i}
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

      {/* 링크 복사 알림 팝업 */}
      {toastShow && (
        <div className='flex justify-center'>
          <span
            className='flex items-center justify-between fixed bottom-14 text-[14px] 
            px-[14px] w-[320px] h-[43px] text-white bg-[#313131] rounded drop-shadow-lg'
          >
            링크가 복사되었습니다!
            <img src='/icons/ico_share_2_white.svg' />
          </span>
        </div>
      )}
    </section>
  );
}
