import { useRouter } from 'next/router'
import { animation } from '@/styles/tailwind'

const PrayerTitleButton = () => {
  const router = useRouter()

  return (
    <div className="py-5 px-5" onClick={() => router.push('/PrayerTitle')}>
      <div
        className={`flex items-center justify-center bg-[#EFEAF1] h-[53px] rounded-[5px] gap-1 ${animation.onClick}`}
      >
        <span className="text-base font-normal text-[#222222]">
          교회를 위한 기도제목
        </span>
        <span className="text-base font-medium text-[#7D3C97]">바로가기</span>
      </div>
    </div>
  )
}

export default PrayerTitleButton
