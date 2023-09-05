import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Link from "next/link"
import Weeklyorder from "../../src/components/Weeklyorder"
import Weeklysummary from "../../src/components/Weeklysummary"
import Loading from "../../src/components/Loading"
import useSWR from "swr"
import ActionBar from "../../src/components/molecule/ActionBar"
import ClickToMoveBack from "../../src/components/atom/ClickToMoveBack"

export default function weekly() {
  const router = useRouter()
  let kind = ""
  router.query.kind ? (kind = router.query.kind) : (kind = "ord")
  const [tabKind, setTabKind] = useState(kind)
  const [isLoading, setIsLoading] = useState(true)

  const { data, error } = useSWR(
    router.query.id ? `/api/weekly/${router.query.id}` : null
  )

  useEffect(() => {
    setTabKind(kind)
  }, [router])

  console.log(data)

  return (
    <div className="">
      {/* 상단 바 */}
      <section className="fixed w-full z-50 bg-white px-4 flex items-center">
        <div className="w-full flex items-center justify-between h-[60px] px-1">
          {/* <div className='flex items-center' onClick={() => router.push('/')}>
            <Icon.Back />
          </div> */}
          <h3 className="text-base font-medium text-[#222222]">
            {data?.weekly?.titleKR}
          </h3>
          <div
            className="flex items-center ml-auto"
            onClick={() => router.push("/weekly")}
          >
            <img src="/icons/ico_close.svg" />
          </div>
        </div>
      </section>

      {/* blank */}
      <div className="h-[60px]" />

      {!data ? (
        <div className="loading_box">
          <Loading />
        </div>
      ) : (
        <>
          <div className="p-4">
            {/* 카드 */}
            <div className="h-[152px] px-4 py-6 rounded-2xl bg-[#F5F5F5] flex flex-col">
              <h3 className="text-[20px] font-medium text-[#222222] leading-none">
                {data?.weekly?.titleKR}
              </h3>
              <h3 className="my-3 font-serif text-[#866842] text-base font-normal">
                {data?.weekly?.titleEN}
              </h3>
              <span className="text-[#666666] text-sm font-normal mt-auto">
                설교 | 김성현 목사
              </span>
            </div>
          </div>

          {/* 탭 */}
          {/* <ul className="w-full h-[54px] px-4 flex items-center justify-around">
            <li className="text-[#222222] text-base font-medium">
              주일예배순서
            </li>
            <li className="text-[#B3B3B3] text-base font-medium">예배순서</li>
            <li className="text-[#B3B3B3] text-base font-medium">주중말씀</li>
            <li className="text-[#B3B3B3] text-base font-medium">교회소식</li>
          </ul> */}

          {/* 내용 */}
          <main className="bg-[#F5F5F5] pt-6 px-4 pb-10 flex flex-col gap-6">
            {/* 첫번째 박스 */}
            <div className="bg-white rounded-2xl px-4 py-2.5 flex flex-col divide-y">
              <div className="py-6 flex gap-[30px]">
                <h4 className="w-[58px] text-[#005499] font-normal text-base">
                  대표기도
                </h4>
                <div>
                  <span className="block text-base font-normal text-[#222222]">
                    1부 | {data?.weekly?.pray1}
                  </span>
                  <span className="block text-base font-normal text-[#222222]">
                    3부 | {data?.weekly?.pray2}
                  </span>
                </div>
              </div>
              <div className="py-6 flex gap-[30px]">
                <h4 className="w-[58px] text-[#005499] font-normal text-base">
                  헌ㅤㅤ금
                </h4>
              </div>
              <div className="py-6 flex gap-[30px]">
                <h4 className="w-[58px] text-[#005499] font-normal text-base">
                  찬ㅤㅤ양
                </h4>
                <div>
                  <span className="block text-base font-normal text-[#222222]">
                    1부 | (할렐루야) 성가대 데이터?
                  </span>
                  <span className="block text-base font-normal text-[#222222]">
                    3부 | (시무언) 성가대 데이터?
                  </span>
                </div>
              </div>
              <div className="py-6 flex gap-[30px]">
                <h4 className="w-[58px] text-[#005499] font-normal text-base">
                  설ㅤㅤ교
                </h4>
                <div>
                  <span className="block font-bold text-base text-[#222222] leading-none">
                    {data?.weekly?.titleKR}
                  </span>
                  <span className="block my-[6px] text-[#866842] font-serif text-sm font-normal">
                    {data?.weekly?.titleEN}
                  </span>
                  <span className="block text-[#888888] font-normal text-base">
                    {data?.weekly?.bible}
                  </span>
                </div>
              </div>
              <div className="py-6 flex gap-[30px]">
                <h4 className="w-[58px] text-[#005499] font-normal text-base">
                  축ㅤㅤ도
                </h4>
              </div>
            </div>

            {/* 두번째 박스 */}
            <div className="bg-white rounded-2xl px-4 py-2.5">
              <div className="py-6 flex gap-[30px] flex-col divide-y">
                <h4 className="w-[106px] text-[#005499] font-normal text-base">
                  주일연합예배
                </h4>
                <div>
                  <span className="block text-base font-normal text-[#222222]">
                    1부 | {data?.weekly?.pray1}
                  </span>
                  <span className="block text-base font-normal text-[#222222]">
                    3부 | {data?.weekly?.pray2}
                  </span>
                </div>
              </div>
              <div className="py-6 flex gap-[30px]">
                <h4 className="w-[106px] text-[#005499] font-normal text-base">
                  수요예배
                </h4>
              </div>
              <div className="py-6 flex gap-[30px]">
                <h4 className="w-[106px] text-[#005499] font-normal text-base">
                  금요기도회
                </h4>
                <div>
                  <span className="block text-base font-normal text-[#222222]">
                    1부 | (할렐루야) 성가대 데이터?
                  </span>
                  <span className="block text-base font-normal text-[#222222]">
                    3부 | (시무언) 성가대 데이터?
                  </span>
                </div>
              </div>
              <div className="py-6 flex gap-[30px]">
                <h4 className="w-[106px] text-[#005499] font-normal text-base">
                  다음주기도
                </h4>
                <div>
                  <span className="block font-bold text-base text-[#222222] leading-none">
                    {data?.weekly?.titleKR}
                  </span>
                  <span className="block my-[6px] text-[#866842] font-serif text-sm font-normal">
                    {data?.weekly?.titleEN}
                  </span>
                  <span className="block text-[#888888] font-normal text-base">
                    {data?.weekly?.bible}
                  </span>
                </div>
              </div>
            </div>
          </main>

          {/* <div className="section">
            <div className="tab_con">
              {tabKind == "ord" && <Weeklyorder data={data?.weekly} />}
              {tabKind == "ser" && <Weeklysummary data={data?.weekly} />}
            </div>
          </div> */}
        </>
      )}
    </div>
  )
}
