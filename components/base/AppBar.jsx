import {
  AlarmIcon,
  BackIcon,
  CiLogo,
  CloseIcon,
  CopyIcon,
  DownloadIcon,
  SearchIcon,
  SettingsIcon,
} from '@/components/base/Icon'
import Button from '@/components/base/Button'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useScrollDetector from '@/hooks/useScrollDetector'

/**
 * 앱 바.
 */
const AppBar = ({ left1, left2, right1, right2 }) => {
  const { isScrollingDown } = useScrollDetector()
  console.log('TopBar. isScrollingDown:', isScrollingDown)

  return (
    <>
      <section className="fixed w-full z-50 bg-white">
        <div className="flex items-center justify-between h-16 px-1">
          <div className="flex items-center">
            {left1 ? <>{left1}</> : null}
            {left2 ? (
              <span className="pl-1 font-normal font-medium text-lg">
                {left2}
              </span>
            ) : null}
          </div>
          <div className="flex">
            {right1 ? <>{right1}</> : null}
            {right2 ? <>{right2}</> : null}
          </div>
        </div>
      </section>

      {/* blank */}
      <div className="h-16" />
    </>
  )
}

export default AppBar

/**
 * 홈 페이지 앱 바.
 */
export const HomeAppBar = () => {
  return (
    <AppBar
      left1={
        <div className="pl-[14px]">
          <CiLogo />
        </div>
      }
      right1={
        <Button onClick={() => window.alert('준비 중입니다.')}>
          <AlarmIcon />
        </Button>
      }
      right2={
        <Button onClick={() => window.alert('준비 중입니다.')}>
          <SearchIcon />
        </Button>
      }
    />
  )
}

/**
 * 어드민 페이지 앱 바.
 */
export const AdminAppBar = ({ title }) => {
  const router = useRouter()
  return (
    <AppBar
      left1={
        <Button onClick={() => router.back()}>
          <BackIcon />
        </Button>
      }
      left2={title}
    />
  )
}

/**
 * 기도제목 페이지 앱 바.
 */
export const PrayerTitleAppBar = () => {
  const [toastShow, setToastShow] = useState(false)

  /**
   * 토스트 팝업.
   */
  const Toast = () => {
    const SPAN_STYLE =
      'flex items-center justify-between fixed bottom-24 text-white ' +
      'children-[14px] px-[14px] w-[320px] h-[43px] children-white bg-[#313131] rounded drop-shadow-lg'

    return (
      <div className="flex justify-center">
        <span className={SPAN_STYLE}>
          링크가 복사되었습니다!{' '}
          <img src="/icons/ico_share_2_white.svg" alt="copy link" />
        </span>
      </div>
    )
  }

  /**
   * 복사 버튼 클릭 시.
   */
  const handleCopyButton = () => {
    navigator.clipboard.writeText(window.location.href)
    setToastShow(true)
    setTimeout(() => setToastShow(false), 3000)
  }

  return (
    <>
      <AppBar
        left1={
          <Button href="/">
            <BackIcon />
          </Button>
        }
        left2="기도제목"
        right1={
          <Button onClick={handleCopyButton}>
            <CopyIcon />
          </Button>
        }
        right2={
          <a href="/images/prayer_4.png" download="성락인의 기도제목">
            <DownloadIcon />
          </a>
        }
      />
      {toastShow && <Toast />}
    </>
  )
}

/**
 * 예배 페이지 앱 바.
 */
export const WorshipAppBar = () => {
  return (
    <AppBar
      right2={
        <Button>
          <SearchIcon />
        </Button>
      }
    />
  )
}

/**
 * 콘텐츠 페이지 앱 바.
 */
export const ContentsAppBar = () => {
  return (
    <AppBar
      right2={
        <Button>
          <SearchIcon />
        </Button>
      }
    />
  )
}

/**
 * 전체보기 페이지 앱 바.
 */
export const MenuAppBar = () => {
  return (
    <AppBar
      right2={
        <Button>
          <CloseIcon />
        </Button>
      }
    />
  )
}
