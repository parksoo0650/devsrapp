import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Loading from "../../src/components/Loading"
import useSWR from "swr"

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
      <div className="fixed w-full z-50 bg-white px-4 flex items-center">
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
      </div>

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
          <ul className="w-full h-[54px] px-4 flex items-center justify-around">
            <li className="text-[#222222] text-base font-medium">
              주일예배순서
            </li>
            <li className="text-[#B3B3B3] text-base font-medium">예배순서</li>
            <li className="text-[#B3B3B3] text-base font-medium">주중말씀</li>
            <li className="text-[#B3B3B3] text-base font-medium">교회소식</li>
          </ul>

          {/* 내용 */}
          <main className="bg-[#F5F5F5] pt-6 px-4 pb-10 flex flex-col gap-6">
            {/* 첫번째 박스 */}
            <div className="bg-white rounded-2xl px-4 py-2.5 flex flex-col divide-y">
              <div className="py-6 flex gap-[30px]">
                <h4 className="text-[#005499] font-normal text-base flex justify-center tracking-wide">
                  대표기도
                </h4>
                <div className="flex flex-col gap-1">
                  <span className="flex items-center text-base font-normal text-[#222222]">
                    <div className="h-[27px] flex items-center justify-center px-[6px] mr-[6px] rounded-[6px] bg-[#F5F5F5] text-[#666666] text-base font-normal">
                      1부
                    </div>
                    {data?.weekly?.pray1}
                  </span>
                  <span className="flex items-center text-base font-normal text-[#222222]">
                    <div className="h-[27px] flex items-center justify-center px-[6px] mr-[6px] rounded-[6px] bg-[#F5F5F5] text-[#666666] text-base font-normal">
                      3부
                    </div>
                    {data?.weekly?.pray2}
                  </span>
                </div>
              </div>
              <div className="py-6 flex gap-[30px]">
                <h4 className="w-[57px] min-w-[57px] text-[#005499] font-normal text-base flex justify-between">
                  <span>헌</span>
                  <span>금</span>
                </h4>
              </div>
              <div className="py-6 flex gap-[30px]">
                <h4 className="w-[57px] min-w-[57px] text-[#005499] font-normal text-base flex justify-between">
                  <span>찬</span>
                  <span>양</span>
                </h4>
                <div className="flex flex-col gap-1">
                  <span className="flex text-base font-normal text-[#222222]">
                    <div className="h-[27px] flex items-center justify-center px-[6px] mr-[6px] rounded-[6px] bg-[#F5F5F5] text-[#666666] text-base font-normal break-keep">
                      1부{" "}
                      <strong className="pl-1 font-normal text-[#005499]">
                        할렐루야
                      </strong>
                    </div>
                    <span className="line-clamp-1">I AM</span>
                  </span>
                  <span className="flex text-base font-normal text-[#222222]">
                    <div className="h-[27px] flex items-center justify-center px-[6px] mr-[6px] rounded-[6px] bg-[#F5F5F5] text-[#666666] text-base font-normal break-keep">
                      3부{" "}
                      <strong className="pl-1 font-normal text-[#005499]">
                        시무언
                      </strong>
                    </div>
                    <span className="line-clamp-1">주님은 굳건한 반석</span>
                  </span>
                </div>
              </div>
              <div className="py-6 flex gap-[30px]">
                <h4 className="w-[57px] min-w-[57px] text-[#005499] font-normal text-base flex justify-between">
                  <span>설</span>
                  <span>교</span>
                </h4>
                <div className="w-[238px]">
                  <span className="block font-bold text-base text-[#222222]">
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
                <h4 className="w-[57px] min-w-[57px] text-[#005499] font-normal text-base flex justify-between">
                  <span>축</span>
                  <span>도</span>
                </h4>
              </div>
            </div>

            {/* 두번째 박스 */}
            <div className="bg-white rounded-2xl px-4 py-2.5 flex-col divide-y">
              <div className="py-6 flex gap-[20px]">
                <h4 className="block rounded-full py-1 text-center w-[100px] min-w-[100px] h-fit border border-[#005499] text-[#005499] font-normal text-base">
                  주일연합예배
                </h4>
                <div className="flex flex-col gap-1">
                  <span className="flex text-base font-normal text-[#222222]">
                    <div className="h-[27px] flex items-center justify-center px-[6px] mr-[6px] rounded-[6px] bg-[#F5F5F5] text-[#666666] text-base font-normal">
                      말씀
                    </div>
                    김성현 목사
                  </span>
                  <span className="flex text-base font-normal text-[#222222]">
                    <div className="h-[27px] flex items-center justify-center px-[6px] mr-[6px] rounded-[6px] bg-[#F5F5F5] text-[#666666] text-base font-normal break-keep">
                      찬양{" "}
                      <strong className="pl-1 font-normal text-[#005499]">
                        뉴헤븐
                      </strong>
                    </div>
                    <span className="line-clamp-1">내가 예수 믿고서</span>
                  </span>
                </div>
              </div>
              <div className="py-6 flex gap-[20px]">
                <h4 className="block rounded-full py-1 text-center w-[100px] min-w-[100px] h-fit border border-[#005499] text-[#005499] font-normal text-base">
                  수요예배
                </h4>
                <div className="flex flex-col gap-1">
                  <span className="flex text-base font-normal text-[#222222]">
                    <div className="h-[27px] flex items-center justify-center px-[6px] mr-[6px] rounded-[6px] bg-[#F5F5F5] text-[#666666] text-base font-normal break-keep">
                      말씀
                    </div>
                    <span className="line-clamp-1">정기성 목사</span>
                  </span>
                  <span className="flex text-base font-normal text-[#222222]">
                    <div className="h-[27px] flex items-center justify-center px-[6px] mr-[6px] rounded-[6px] bg-[#F5F5F5] text-[#666666] text-base font-normal break-keep">
                      기도
                    </div>
                    <span className="line-clamp-1">김정혜 선교사</span>
                  </span>
                </div>
              </div>
              <div className="py-6 flex gap-[20px]">
                <h4 className="block rounded-full py-1 text-center w-[100px] min-w-[100px] h-fit border border-[#005499] text-[#005499] font-normal text-base">
                  금요기도회
                </h4>
                <div>
                  <span className="flex text-base font-normal text-[#222222]">
                    <div className="h-[27px] flex items-center justify-center px-[6px] mr-[6px] rounded-[6px] bg-[#F5F5F5] text-[#666666] text-base font-normal break-keep">
                      말씀
                    </div>
                    <span className="line-clamp-1">이형진 목사</span>
                  </span>
                </div>
              </div>
              <div className="py-6 flex gap-[20px]">
                <h4 className="block rounded-full py-1 text-center w-[100px] min-w-[100px] h-fit border border-[#005499] text-[#005499] font-normal text-base">
                  다음주 기도
                </h4>
                <div className="flex flex-col gap-1">
                  <span className="flex text-base font-normal text-[#222222]">
                    <div className="w-[120px] h-[27px] flex items-center justify-center px-[6px] mr-[6px] rounded-[6px] bg-[#F5F5F5] text-[#666666] text-base font-normal break-keep">
                      주일예배 1부
                    </div>
                    <span className="line-clamp-1">김윤태 안수집사</span>
                  </span>
                  <span className="flex text-base font-normal text-[#222222]">
                    <div className="w-[120px] h-[27px] flex items-center justify-center px-[6px] mr-[6px] rounded-[6px] bg-[#F5F5F5] text-[#666666] text-base font-normal break-keep">
                      주일예배 3부
                    </div>
                    <span className="line-clamp-1">권태훈 안수집사</span>
                  </span>
                  <span className="flex text-base font-normal text-[#222222]">
                    <div className="h-[30px] flex items-center justify-center px-[6px] mr-[6px] rounded-[6px] bg-[#F5F5F5] text-[#666666] text-base font-normal break-keep">
                      수요예배
                    </div>
                    <span className="line-clamp-1">추석축복성회</span>
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
