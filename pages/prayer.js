import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PrayerCard from '../src/components/Prayer/PrayerCard';

export default function prayer() {
  const router = useRouter();
  const [toastShow, setToastShow] = useState(false);

  return (
    <section>
      <header className='fixed h-10 px-[22px] flex items-center justify-between'>
        <img
          className='w-5 h-5'
          src='/icons/ico_close.svg'
          onClick={() => router.push('/')}
        />

        <h3 className='text-base'>기도제목</h3>

        <div className='w-5 h-5'>
          <img
            className='w-5 h-5 absolute right-[60px]'
            src='/icons/ico_share_3.svg'
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setToastShow(() => true);
              setTimeout(() => setToastShow(() => false), 3000);
            }}
          />

          <a href='/images/sungrak_prayer.bmp' download='성락인의 기도제목'>
            <img
              className='w-5 h-5'
              src='/icons/ico_download.svg'
              onClick={() => {}}
            />
          </a>
        </div>
      </header>

      {/* blank */}
      <div className='h-14' />

      <PrayerCard
        title='임시감독선임 신청 기각을 위한 기도제목'
        content1='재판부가 임시감독 선임 기각 결정을 내릴 수 있도록'
        content2='감독님의 치리로 교회가 안정적으로 운영되고 있음을 재판부가 잘 알도록'
        content3='감독님의 지시를 따라 사무처리회를 공정하게 준비하고 있음을 재판부가 잘 알도록'
        content4='분열측이 사무처리회 준비에 전혀 협조하지 않음을 재판부가 잘 알도록'
        content5='담당 변호사가 교회의 상황을 잘 알고 서면과 증거를 잘 정리하여 제출하도록'
        content6='재판부가 임시감독 선임 불필요성을 알고 교회의 자율적인 신앙을 지켜주는 결정을 내리도록'
        content7='감독님께서 교회와 성도를 이끌어 가시는데 지치지 않고 더 담대할 수 있도록'
        content8='법무팀에게 맡은 업무를 감당할 충만한 지혜와 능력을 주시도록'
      />

      {/* <PrayerCard
        title='교회와 감독님을 위한 기도제목'
        content1='서울남부지법 1심 재판에서 업무상횡령에 대해 무죄 판결을 받도록'
        content2='교회측 담당 변호사에게 변호의 지혜와 명철이 충만하도록'
        content3='재판부가 억울한 이단 정죄로 고통받고 있는 우리 교회를 잘 이해하고, 살아계신 하나님께서 재판부를 통해 일하시도록'
        content4='증인 심문과 재판 진행 절차가 원활히 진행되고, 수사 과정에서 왜곡된 사실관계들은 바로잡히도록'
        content5='재판이 진행될수록 교회와 성도들을 위한 노력이었음이 더욱 드러나도록'
        content6='법무팀에게 맡은 업무를 감당할 충만한 지혜와 능력을 주시도록'
        content7='감독님과 가정에 하나님이 주시는 건강과 하나님의 평안이 넘치도록'
        content8='감독님께서 교회와 성도를 이끌어 가시는데 지치지 않고 더 담대할 수 있도록'
        content9='감독님이 교회와 성도들의 아픔과 고통을 위해 힘쓰신 부분을 재판부가 잘 알 수 있도록'
        content10='감독님의 억울하고 답답한 마음을 하나님께서 신원하여 주셔서 평안과 위로를 얻으실 수 있도록'
      /> */}

      <PrayerCard
        title='01 교회 재건과 전도를 위한 기도'
        content1='분열사태가 속히 종식되고 교회가 재건되도록'
        content2='성락인 모두 단합하여 교회를 든든히 지키도록'
        content3='교회 수호와 재건에 모두 한마음으로 행동하도록'
        content4='교회의 미래세대가 어릴 때부터 교회관과 신앙관을 견고히 세우도록'
        content5='교회 이미지가 좋아지며, 선한 영향력을 끼쳐 전도의 결실을 맺도록'
      />

      <PrayerCard
        title='02 사무처리회 성공을 위한 기도'
        content1='사무처리회를 철저히 준비하여 성공하도록'
        content2='사무처리회 성공을 통해 교회 재정 안정을 이루도록'
        content3='사무처리회 개최일에 성락인 모두가 참여하도록'
        content4='사무처리회 준비팀에게 지혜와 안목이 넘치도록'
        content5='사무처리회 성공을 위해 날마다 간절히 기도하는 성락인 되도록'
      />

      <PrayerCard
        title='03 감독님을 위한 기도'
        content1='감독님께서 하나님의 권능으로 교회를 치리하시도록'
        content2='감독님께 말씀의 영감이 충만하시도록'
        content3='감독님 중심으로 교역자와 평신도가 하나되도록'
        content4='감독님께서 하나님의 지혜로 교회 미래를 이끌어가시도록'
        content5='감독님의 심령이 평안하며 육체가 강건하시도록'
      />

      <PrayerCard
        title='04 법적 승리를 위한 기도'
        content1='분열사태의 모든 법적 소송을 승리하도록'
        content2="감독님 소송 사건 모두 '혐의없음'으로 결정되도록"
        content3='분열사태의 왜곡된 주장들이 바로잡히도록'
        content4='법무팀과 담당 변호사들에게 지혜와 명철을 주시도록'
        content5='분열사태로 인한 교회와 가정의 아픔을 서로 위로하고 격려하도록'
      />

      {/* 링크 복사 알림 팝업 */}
      {toastShow && (
        <div className='flex justify-center'>
          <span
            className='flex items-center justify-between fixed bottom-24 text-[14px] 
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
