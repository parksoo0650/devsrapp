import { useState } from 'react';
import { useRouter } from 'next/router';

export default function feedDetail() {
  const [toastShow, setToastShow] = useState(false);
  const router = useRouter();
  const tags = ['노스킵', '어린이부', '헌신'];

  return (
    <section>
      {/* 헤더: X 버튼 + 행사 영상 */}
      <div className='h-[40px] flex items-center justify-between px-[22px]'>
        <img
          className='w-[16px] h-[16px]'
          src='/icons/ico_close.svg'
          onClick={() => router.push('/feed')}
        />
        <h3 className='text-base font-[500]'>행사 영상</h3>
        <div id='blank' className='w-[14px] h-[14px]' />
      </div>

      {/* 영상 */}
      <div className='w-full h-[210px] bg-[#c4c4c4] mb-[14px]' />

      {/* 하단 영상 정보 */}
      <div className='px-5'>
        <div className='flex items-start justify-between'>
          <span className='block text-base mb-3 w-[280px] break-keep'>
            2022 교회와 함께! 성락인과 함께! 헌신 참여 챌린지 - 「No Skip송」
            #shorts
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
          />
        </div>

        {tags.map((tag) => (
          <span
            className='inline-block text-[#444444] text-[14px] 
            px-[10px] pt-[4px] pb-[2px] mr-[10px] border border-[#d4d4d4] rounded'
          >
            #{tag}
          </span>
        ))}

        <span className='block py-3 mb-7 text-xs'>
          2022.11.02 ﹒ 성락교회 어린이부
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
