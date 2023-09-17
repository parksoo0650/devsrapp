import { useRouter } from "next/router"
import { useState } from "react"

/**
 * 상단 바.
 */
const TopBar = () => {
  const router = useRouter()

  return (
    <>
      <div className="fixed w-full z-50 bg-white px-4 flex items-center">
        <div className="w-full flex items-center justify-between h-[60px] px-1">
          <h3 className="text-base font-medium text-[#222222]">
            9, 10월 대표기도 순서
          </h3>
          <div
            className="flex items-center ml-auto"
            onClick={() => router.push("/")}
          >
            <img src="/icons/ico_close.svg" />
          </div>
        </div>
      </div>

      {/* blank */}
      <div className="h-[60px]" />
    </>
  )
}

/**
 * 주일예배/수요예배 탭.
 */
const Tab = ({ tab, setTab }) => {
  const TAB =
    "text-[#B3B3B3] text-base font-medium block w-full h-full flex items-center justify-center"
  const TAB_SELECTED =
    "text-[#222222] text-base font-medium block w-full h-full border-b-2 border-[#222222] flex items-center justify-center"

  return (
    <ul className="w-full h-[54px] px-4 flex items-center justify-around">
      <ul className={tab === 0 ? TAB_SELECTED : TAB} onClick={() => setTab(0)}>
        주일 예배
      </ul>
      <ul className={tab === 1 ? TAB_SELECTED : TAB} onClick={() => setTab(1)}>
        수요예배
      </ul>
    </ul>
  )
}

/**
 * 주일예배 정보.
 */
const SundayInfo = () => {
  return (
    <section className="text-[#666666] text-base font-normal bg-white px-5 py-6 rounded-[10px]">
      <div>장소 : 세계센터 대성전</div>
      <div>시간 : 1부예배(07:00AM) · 3부예배(11:00AM)</div>
    </section>
  )
}

/**
 * 수요예배 정보.
 */
const WednesdayInfo = () => {
  return (
    <section className="text-[#666666] text-base font-normal bg-white px-5 py-6 rounded-[10px]">
      <div>장소 : 청년회관</div>
      <div>시간 : 08:00PM</div>
    </section>
  )
}

/**
 * 주일예배 리스트 열.
 */
const SunListRow = ({ item, index }) => {
  const weekText =
    index === 0
      ? "첫째주"
      : index === 1
      ? "둘째주"
      : index === 2
      ? "셋째주"
      : index === 3
      ? "넷째주"
      : index === 4
      ? "다섯째주"
      : null

  return (
    <div className="flex items-center justify-between py-2 h-[118px] border-b">
      <div className="flex flex-col justify-center px-3 rounded-[6px] bg-[#f5f5f5] text-center w-[107px] h-[70px]">
        <span className="text-[#888888] text-base font-normal">{weekText}</span>
        <span className="text-[20px] font-normal text-[#666666]">
          {item[0]}
        </span>
      </div>
      <div className="w-[173px] flex flex-col divide-y">
        <div className="h-[51px] flex items-center justify-between">
          <span className="ml-[17px] text-[#666666] text-base font-normal">
            1부 예배
          </span>
          <span className="text-[#88629B] text-[20px] font-medium">
            {item[1]}
          </span>
        </div>
        <div className="h-[51px] flex items-center justify-between">
          <span className="ml-[17px] text-[#666666] text-base font-normal">
            3부 예배
          </span>
          <span className="text-[#88629B] text-[20px] font-medium">
            {item[2]}
          </span>
        </div>
      </div>
    </div>
  )
}

/**
 * 수요예배 리스트 열.
 */
const WedListRow = ({ item, index }) => {
  const weekText =
    index === 0
      ? "첫째주"
      : index === 1
      ? "둘째주"
      : index === 2
      ? "셋째주"
      : index === 3
      ? "넷째주"
      : index === 4
      ? "다섯째주"
      : null

  return (
    <div className="flex items-center justify-between py-2 h-[75px] border-b">
      <div className="flex flex-col justify-center px-3 rounded-[6px] bg-[#f5f5f5] text-center w-[80px] h-[27px]">
        <span className="text-[#888888] text-base font-normal">{weekText}</span>
      </div>
      <span className="text-[#666666] text-base font-normal w-[80px] text-end">
        {item[0]}
      </span>
      <span className="text-[#88629B] text-[20px] font-medium w-[80px] text-end">
        {item[1]}
      </span>
    </div>
  )
}

/**
 * 박스 2. 주일예배 이번달
 */
const Box2 = ({ prayerList }) => {
  return (
    <section className="px-5 pt-6 pb-[30px] rounded-[10px] bg-white">
      <div className="flex items-center justify-between pb-4 border-b border-black">
        <h3 className="text-[#222222] text-[26px] font-medium">9월</h3>
        <span className="text-[#888888] text-base font-normal">대표기도자</span>
      </div>

      {prayerList.map((item, index) => (
        <SunListRow key={index} item={item} index={index} />
      ))}
    </section>
  )
}
/**
 * 박스 3. 주일예배 다음달
 */
const Box3 = ({ prayerList }) => {
  return (
    <section className="px-5 pt-6 pb-[30px] rounded-[10px] bg-white">
      <div className="flex items-center justify-between pb-4 border-b border-black">
        <h3 className="text-[#222222] text-[26px] font-medium">10월</h3>
        <span className="text-[#888888] text-base font-normal">대표기도자</span>
      </div>

      {prayerList.map((item, index) => (
        <SunListRow key={index} item={item} index={index} />
      ))}
    </section>
  )
}

/**
 * 박스 4. 수요예배 이번달
 */
const Box4 = ({ prayerList }) => {
  return (
    <section className="px-5 pt-6 pb-[30px] rounded-[10px] bg-white">
      <div className="flex items-center justify-between pb-4 border-b border-black">
        <h3 className="text-[#222222] text-[26px] font-medium">9월</h3>
        <span className="text-[#888888] text-base font-normal">대표기도자</span>
      </div>

      {prayerList.map((item, index) => (
        <WedListRow key={index} item={item} index={index} />
      ))}
    </section>
  )
}

/**
 * 박스 5. 수요예배 다음달
 */
const Box5 = ({ prayerList }) => {
  return (
    <section className="px-5 pt-6 pb-[30px] rounded-[10px] bg-white">
      <div className="flex items-center justify-between pb-4 border-b border-black">
        <h3 className="text-[#222222] text-[26px] font-medium">10월</h3>
        <span className="text-[#888888] text-base font-normal">대표기도자</span>
      </div>

      {prayerList.map((item, index) => (
        <WedListRow key={index} item={item} index={index} />
      ))}
    </section>
  )
}

/**
 * 바닥글.
 */
const Footer = () => {
  return (
    <span className="text-[#666666] text-sm font-normal w-full text-center">
      * 변경사항이 있을 시에 연락 주십시오.
      <br />
      교무예배행정실 조은하 전도사(070-7300-6220)
    </span>
  )
}

/**
 * 대표 기도 페이지.
 */
const RepresentativePrayerPage = () => {
  // 주일예배 이번달 대표기도자.
  const sunThisMonthList = [
    ["9월 3일", "이영근", "김도근"],
    ["9월 10일", "장영동", "최문학"],
    ["9월 17일", "윤평원", "황환배"],
    ["9월 24일", "김윤태", "권태훈"],
  ]
  // 주일예배 다음달 대표기도자.
  const sunNextMonthList = [
    ["10월 1일", "장해종", "길계욱"],
    ["10월 8일", "최명진", "김용구"],
    ["10월 15일", "김기성", "이일락"],
    ["10월 22일", "이종열", "김인수"],
    ["10월 29일", "박한일", "김영태"],
  ]
  // 수요예배 대표기도자 명단.
  const wedThisMonthList = [
    ["9월 6일", "윤혜정"],
    ["9월 13일", "김수경"],
    ["9월 20일", "김정혜"],
    ["9월 27일", "추석성회"],
  ]
  // 수요예배 다음달 대표기도자.
  const wedNextMonthList = [
    ["10월 4일", "강인희"],
    ["10월 11일", "박은아"],
    ["10월 18일", "황민기"],
    ["10월 25일", "이상순"],
  ]

  const [tab, setTab] = useState(0)

  return (
    <>
      <TopBar />
      <Tab tab={tab} setTab={setTab} />

      {/* 주일예배 */}
      {tab === 0 && (
        <main className="bg-[#f5f5f5] pt-6 px-4 pb-[60px] flex flex-col gap-6">
          <SundayInfo />
          <Box2 prayerList={sunThisMonthList} />
          <Box3 prayerList={sunNextMonthList} />
          <Footer />
        </main>
      )}

      {/* 수요예배 */}
      {tab === 1 && (
        <main className="bg-[#f5f5f5] pt-6 px-4 pb-[60px] flex flex-col gap-6">
          <WednesdayInfo />
          <Box4 prayerList={wedThisMonthList} />
          <Box5 prayerList={wedNextMonthList} />
          <Footer />
        </main>
      )}
    </>
  )
}

export default RepresentativePrayerPage
