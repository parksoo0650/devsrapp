import { useRouter } from 'next/router';
import PrayerCard from '../src/components/Prayer/PrayerCard';

export default function prayer() {
  const router = useRouter();

  return (
    <section>
      <header className='h-10 px-[22px] flex items-center justify-between'>
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
            onClick={() => {}}
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
      <div className='h-[52px]' />

      <PrayerCard
        title='01 교회 재건과 전도를 위한 기도'
        content1='분열사태가 속히 종식되고 교회가 재건되도록'
        content2='성락인 모두 단합하여 교회를 든든히 지키도록'
        content3='교회 수호와 재건에 모두 한마음으로 행동하도록'
        content4='사무처리회 성공을 위해 날마다 간절히 기도하는 성락인 되도록'
      />

      <PrayerCard
        title='01 교회 재건과 전도를 위한 기도'
        content1='분열사태가 속히 종식되고 교회가 재건되도록'
        content2='성락인 모두 단합하여 교회를 든든히 지키도록'
        content3='교회 수호와 재건에 모두 한마음으로 행동하도록'
        content4='사무처리회 성공을 위해 날마다 간절히 기도하는 성락인 되도록'
      />

      <PrayerCard
        title='01 교회 재건과 전도를 위한 기도'
        content1='분열사태가 속히 종식되고 교회가 재건되도록'
        content2='성락인 모두 단합하여 교회를 든든히 지키도록'
        content3='교회 수호와 재건에 모두 한마음으로 행동하도록'
        content4='사무처리회 성공을 위해 날마다 간절히 기도하는 성락인 되도록'
      />

      <PrayerCard
        title='01 교회 재건과 전도를 위한 기도'
        content1='분열사태가 속히 종식되고 교회가 재건되도록'
        content2='성락인 모두 단합하여 교회를 든든히 지키도록'
        content3='교회 수호와 재건에 모두 한마음으로 행동하도록'
        content4='사무처리회 성공을 위해 날마다 간절히 기도하는 성락인 되도록'
      />

      {/* <PrayerCard
        title=''
        content1=''
        content2=''
        content3=''
        content4=''
      />

      <PrayerCard
        title=''
        content1=''
        content2=''
        content3=''
        content4=''
      />
      
      <PrayerCard
        title=''
        content1=''
        content2=''
        content3=''
        content4=''
      />

      <PrayerCard
        title=''
        content1=''
        content2=''
        content3=''
        content4=''
      /> */}
    </section>
  );
}
