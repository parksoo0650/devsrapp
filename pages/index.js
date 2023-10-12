import Jumbotron from '../src/components/Home/Jumbotron'
import HomeBar from '../src/components/HomeBar'
import Today from '@/components/today/Today'
import PrayerTitleButton from '@/components/PrayerTitleButton'
import { HomeAppBar } from '@/components/base/AppBar'

export default function Home() {
  return (
    <>
      {/* 앱 상단 바 */}
      <HomeAppBar />

      {/* 대형 슬라이드 (메인 배너) */}
      <Jumbotron />

      {/* 교회 기도제목 */}
      {/*<ListRow.V1*/}
      {/*    title="교회를 위한 기도제목 바로가기"*/}
      {/*    backgroundColor="#88629B"*/}
      {/*    route="/PrayerTitle"*/}
      {/*/>*/}
      <PrayerTitleButton />

      {/* 성락 공지사항 */}
      {/*<Notice />*/}

      {/* 성락교회 투데이 */}
      <Today />

      {/* 주중 콘텐츠 */}
      {/*<WeekdayContent />*/}

      {/* 퀵 메뉴 7개 */}
      {/*<QuickMenu />*/}

      {/* 교회 표어 */}
      {/*<div className="mdbanner">*/}
      {/*    <img src="/images/banner_23.jpg" />*/}
      {/*</div>*/}

      {/* 은혜로운 찬양 */}
      {/*<Praise />*/}

      {/* 성락교회 미래세대 */}
      {/*<Department />*/}

      {/* 하단 메뉴 바 */}
      <HomeBar />
    </>
  )
}
