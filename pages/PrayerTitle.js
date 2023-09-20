import TopBar from "@/components/TopBar"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function PrayerTitlePage() {
  const STR_PRAYER_TITLE = "prayer-title"
  const STR_TIMETABLE = "timetable"

  const [tab, setTab] = useState(STR_PRAYER_TITLE)

  function handleTabClick(event) {
    if (event.target.id === STR_PRAYER_TITLE) {
      setTab(STR_PRAYER_TITLE)
    }
    if (event.target.id === STR_TIMETABLE) {
      setTab(STR_TIMETABLE)
    }
  }

  const STYLE_LIST_ITEM_SPECIAL = "font-normal font-medium text-base leading-7"
  const STYLE_LIST_ITEM = "font-normal font-medium text-base leading-7 pl-1"

  return (
    <>
      <TopBar.PrayerTitle />
      <div className="pt-2.5 px-5 pb-5 font-normal text-base text-gray-700">
        [2023년 9월 20일] <span className="text-gray-500">업데이트</span>
      </div>
      <div className="h-14 w-full flex items-center text-center">
        <div
          onClick={handleTabClick}
          id="prayer-title"
          className={`flex items-center justify-center w-1/2 h-full border-box border-b-2 ${
            tab === STR_PRAYER_TITLE
              ? "border-black transition duration-500 ease-in-out"
              : "border-gray-300"
          }`}
        >
          <span
            className={`font-medium text-base ${
              tab === STR_PRAYER_TITLE ? "text-black" : "text-gray-300"
            }`}
            id="prayer-title"
          >
            기도제목
          </span>
        </div>
        <div
          onClick={handleTabClick}
          id="timetable"
          className={`flex items-center justify-center w-1/2 h-full border-box border-b-2 ${
            tab === STR_TIMETABLE
              ? "border-black transition duration-500 ease-in-out"
              : "border-gray-300"
          }`}
        >
          <span
            className={`font-medium text-base ${
              tab === STR_TIMETABLE ? "text-black" : "text-gray-300"
            }`}
            id="timetable"
          >
            기도회 시간표
          </span>
        </div>
      </div>
      {tab === STR_PRAYER_TITLE ? (
        <section className="pb-10">
          <main className="px-5 bg-[#F5F5F5]">
            <h2 className="pt-10 pb-4 font-bold text-lg text-black">
              교회와 감독님을 위한 기도제목
            </h2>
            <ol className="pb-10 list-decimal">
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                1. 서울남부지법 1심 재판에서 무죄 판결을 받도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                2. 재판부가 억울한 이단정죄로 고통받고 있는 우리교회를 잘 이해할
                수 있도록, 살아계신 하나님께서 재판부를 통해 일하시도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                3. 오늘 진행되는 교회측 장로님들의 증인신문 등을 통해
                거짓주장들이 드러나 바로 잡히도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                4. 교회측 담당 변호사에게 변호의 지혜와 명철이 충만하도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                5. 재판부가 억울한 이단정죄로 고통 받고 있는 우리교회를 잘
                이해할 수 있도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                6. 남은 증인심문 준비 및 재판 진행절차가 원활히 진행될 수 있도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                7. 법무팀에게 맡은 업무를 감당할 충만한 지혜와 능력을 주시도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                8. 감독님과 가정에 하나님이 주시는 건강과 하나님의 평안이
                넘치도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                9. 감독님께서 교회와 성도를 이끌어 가시는데 지치지 않고 더
                담대할 수 있도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                10. 감독님이 성도들의 아픔과 고통을 위해 힘쓰신 부분을 재판부가
                잘 알 수 있도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                11. 감독님을 하나님께서 신원하여 주시고 평안과 위로가 넘치시도록
              </li>

              {/* <li className={STYLE_LIST_ITEM_SPECIAL}>
                1. 사무처리회를 철저히 준비하여 성공하도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                2. 사무처리회 성공을 통하여 미래를 향해 나가도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                3. 사무처리회 성공을 통하여 분열사태가 속히 종식되고 교회가
                안전하게 회복되도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                4. 사무처리회 성공을 통하여 교회의 재정적인 어려움이 해결되도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                5. 사무처리회 개최일에 성락인 모두 교회를 사랑하는 마음으로
                참여하도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                6. 사무처리회 준비팀, 명부팀. 진행팀에게 지혜와 안목이 넘치도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                7. 사무처리회 준비가운데 하나님의 사랑과 은혜로 하나 된 지체임을
                깨닫고 겸손히 연합할 수 있도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                8. 사무처리회를 위해 사랑과 겸손의 마음으로 간절히 기도하여
                하나님의 일하심을 보도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                9. 사무처리회를 통해 온 성도가 몸 된 교회를 사랑하고 든든히
                세워가도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                10. 사무처리회 성공을 위한 목장 및 목양사역이 될 수 있도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                11. 사무처리회 성공을 위해 각 가정과 직장 거처에서 기도로
                동참하도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                12. 사무처리회 현장 참석이 불가능한 성도들은 위임장을 반드시
                작성하여 제출 하도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                13. 분열측 성도들이 거짓이 아닌 진실 앞에 결단하여 사무처리회에
                참석 하도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                14. 장로, 안수집사 및 직분자들이 준비 과정에서 적극적으로 교회와
                함께 하도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                15. 모든 목장이 사무처리회 성공을 위한 사역으로 적극 지원하도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                16. 사무처리회 참여로 교인으로서의 책임과 의무를 다하도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                17. 사무처리회 현장 참여를 위해 성도들을 찾아가 적극 독려할 수
                있도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                18. 사무처리회 당일 참여치 못할 갑작스러운 다른 일정이 생기지
                않도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                19. 사무처리회 현장 참여를 위한 카플 운영이 잘 이루어지도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                20. 사무처리회를 통해 교회의 승리를 선포하는 기회가 되도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                21. 사무처리회 진행이 법적으로도 보호받을 수 있도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                22. 당일 사무처리회가 질서있게 진행 되도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                23. 사무처리회 성공을 통해 교회와 감독님의 법적권위가 회복되도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                24. 성락인 모두 하나 되어 교회와 감독님의 든든한 조력자로
                협력하도록
              </li>
              <li className={STYLE_LIST_ITEM_SPECIAL}>
                25. 성락인과 베뢰아인과 미래세대를 감독님께서 온전히
                이끌어가시도록
              </li> */}
            </ol>
          </main>

          <div className="pt-[30px] px-5">
            <h3 className="pb-2 font-bold text-base leading-5 text-[#D85E55]">
              I. 사무처리회 성공을 위한 기도
            </h3>
            <ol>
              <li className={STYLE_LIST_ITEM}>
                1. 사무처리회를 철저히 준비하고 성공하여 미래를 향해 나아가도록
              </li>
              <li className={STYLE_LIST_ITEM}>
                2. 사무처리회 준비팀에게 하나님의 지혜와 총명을 주시도록
              </li>
              <li className={STYLE_LIST_ITEM}>
                3. 사무처리회 회원 명부가 실질 교인으로 작성되고 확정될 수
                있도록
              </li>
              <li className={STYLE_LIST_ITEM}>
                4. 사무처리회 진행과 명부가 법적으로도 보호받고 하나님이
                인쳐주시도록
              </li>
              <li className={STYLE_LIST_ITEM}>
                5. 사무처리회 법적 소송을 승소하여 준비하는 개최일에 성공적으로
                개최될 수 있도록
              </li>
              <li className={STYLE_LIST_ITEM}>
                6. 사무처리회 성공을 통해 교회와 감독님의 법적권위가 회복되도록
              </li>
              <li className={STYLE_LIST_ITEM}>
                7. 사무처리회를 위해 사랑과 겸손의 마음으로 간절히 기도하여
                하나님의 일하심을 보도록
              </li>
              <li className={STYLE_LIST_ITEM}>
                8. 사무처리회를 통해서 온 교회가 하나될 수 있도록
              </li>
              <li className={STYLE_LIST_ITEM}>
                9. 사무처리회 성공을 통하여 분열사태가 속히 종식되고 교회가
                안전하게 회복되도록
              </li>
              <li className={STYLE_LIST_ITEM}>
                10. 사무처리회를 통해 교회의 승리를 선포하는 기회가 되도록
              </li>
            </ol>
          </div>

          <div className="pt-[30px] px-5">
            <h3 className="pb-2 font-bold text-base leading-5 text-[#D98F00]">
              II. 교회재정 극복을 위한 기도
            </h3>
            <ol>
              <li className={STYLE_LIST_ITEM}>
                1. 교회 재정 극복을 위한 온 성도의 기도로 하나님의 역사하심이
                있도록
              </li>
              <li className={STYLE_LIST_ITEM}>
                2. 주님이 우리를 살려주셨던 것처럼 우리가 주님의 몸된 교회를
                살릴 수 있도록
              </li>
              <li className={STYLE_LIST_ITEM}>
                3. 성락인 모두가 힘과 지혜를 하나로 모아 교회재정 위기를 극복할
                수 있도록
              </li>
              <li className={STYLE_LIST_ITEM}>
                4. 그리스도와 함께 영광을 얻기 위해 교회재정 극복을 위한 고난도
                함께 감당할 수 있도록
              </li>
            </ol>
          </div>

          <div className="pt-[30px] px-5">
            <h3 className="pb-2 font-bold text-base leading-5 text-[#64A775]">
              III. 감독님을 위한 기도
            </h3>
            <ol>
              <li className={STYLE_LIST_ITEM}>
                1. 감독님께서 하나님의 권능으로 교회를 치리하시도록
              </li>
              <li className={STYLE_LIST_ITEM}>
                2. 감독님께 말씀의 영감이 충만하시도록
              </li>
              <li className={STYLE_LIST_ITEM}>
                3. 감독님 중심으로 교역자와 평신도가 하나가 되도록
              </li>
              <li className={STYLE_LIST_ITEM}>
                4. 성락인과 베뢰아인과 미래세대를 감독님께서 온전히
                이끌어가시도록
              </li>
              <li className={STYLE_LIST_ITEM}>
                5. 감독님의 심령이 평안하며 육체가 강건하시도록
              </li>
            </ol>
          </div>

          {/*<div className="pt-[30px] px-5">*/}
          {/*    <h3 className="pb-2 font-bold text-base leading-5 text-[#6190B2]">4. 법적 승리를 위한 기도</h3>*/}
          {/*    <ol>*/}
          {/*        /!* empty *!/*/}
          {/*    </ol>*/}
          {/*</div>*/}
        </section>
      ) : (
        <section>
          <main className="pt-10 px-5 pb-10 bg-[#F5F5F5]">
            <div className="bg-white rounded-lg">
              <ul role="list" className="divide-y divide-gray-200">
                {/*<li className="flex w-full justify-between">*/}
                {/*    <div className="w-20 h-14 py-4 text-center text-base font-semibold text-[#D85E55]">1부</div>*/}
                {/*    <div>*/}
                {/*        <div className="flex items-center justify-between py-4 pr-4 w-[290px]">*/}
                {/*            <div className="text-base">10:00-10:05 (5분)</div>*/}
                {/*            <div className="text-base font-semibold">찬양</div>*/}
                {/*        </div>*/}
                {/*        <div className="flex items-center justify-between py-4 pr-4 w-[290px]">*/}
                {/*            <div className="text-base">10:05-10:45 (40분)</div>*/}
                {/*            <div className="text-base font-semibold">긴급기도1</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*<li className="flex w-full justify-between">*/}
                {/*    <div className="w-20 h-14 py-4 text-center text-base font-semibold text-[#D98F00]">2부</div>*/}
                {/*    <div>*/}
                {/*        <div className="flex items-center justify-between py-4 pr-4 w-[290px]">*/}
                {/*            <div className="text-base">10:45-10:50 (5분)</div>*/}
                {/*            <div className="text-base font-semibold">찬양</div>*/}
                {/*        </div>*/}
                {/*        <div className="flex items-center justify-between py-4 pr-4 w-[290px]">*/}
                {/*            <div className="text-base">10:50-11:30 (40분)</div>*/}
                {/*            <div className="text-base font-semibold">긴급기도2</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</li>*/}
                {/*<li className="flex w-full justify-between">*/}
                {/*    <div className="w-20 h-14 py-4 text-center text-base font-semibold text-white">2부</div>*/}
                {/*    <div>*/}
                {/*        <div className="flex items-center justify-between py-4 pr-4 w-[290px]">*/}
                {/*            <div className="text-base">11:30-13:30 (120분)</div>*/}
                {/*            <div className="text-base font-semibold">점심시간</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</li>*/}

                {/* <li className="flex w-full justify-between">
                  <div className="w-20 h-14 py-4 text-center text-base font-semibold text-[#64A775]">
                    1부
                  </div>
                  <div className="w-full divide-y divide-gray-200">
                    <div className="flex items-center justify-between py-4 pr-4">
                      <div className="text-base">15:30-15:35 (5분)</div>
                      <div className="text-base font-semibold">찬양</div>
                    </div>
                    <div className="flex items-center justify-between py-4 pr-4">
                      <div className="text-base">15:35-16:10 (35분)</div>
                      <div className="text-base font-semibold">합심기도1</div>
                    </div>
                  </div>
                </li> */}

                <li className="flex w-full justify-between">
                  <div className="w-20 h-14 py-4 text-center text-base font-semibold text-[#6190B2]">
                    일시
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between py-4 pr-4">
                      <div className="text-base">
                        9월 20일(수) 2시 - 3시 30분
                      </div>
                      {/* <div className="text-base font-semibold">합심기도2</div> */}
                    </div>
                  </div>
                </li>

                <li className="flex w-full justify-between">
                  <div className="w-20 h-14 py-4 text-center text-base font-semibold text-[#6190B2]">
                    장소
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between py-4 pr-4">
                      <div className="text-base">청년회관본당(Online)</div>
                      {/* <div className="text-base font-semibold">합심기도2</div> */}
                    </div>
                  </div>
                </li>
                <li className="flex w-full justify-between">
                  <div className="w-20 h-14 py-4 text-center text-base font-semibold text-[#6190B2]">
                    대상
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between py-4 pr-4">
                      <div className="text-base">전교인</div>
                      {/* <div className="text-base font-semibold">합심기도2</div> */}
                    </div>
                  </div>
                </li>

                {/*<li className="flex w-full justify-between">*/}
                {/*    <div className="w-20 h-14 py-4 text-center text-base font-semibold text-[#6190B2]">2부</div>*/}
                {/*    <div>*/}
                {/*        <div className="flex items-center justify-between py-4 pr-4 w-[290px]">*/}
                {/*            <div className="text-base">14:30-14:35 (5분)</div>*/}
                {/*            <div className="text-base font-semibold">찬양</div>*/}
                {/*        </div>*/}
                {/*        <div className="flex items-center justify-between py-4 pr-4 w-[290px]">*/}
                {/*            <div className="text-base">14:35-15:30 (55분)</div>*/}
                {/*            <div className="text-base font-semibold">긴급기도4</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</li>*/}

                {/* <li className="flex w-full justify-between">
                  <div className="w-20 h-14 py-4 text-center text-base font-semibold text-[#8E61B2]">
                    3부
                  </div>
                  <div className="w-full divide-y divide-gray-200">
                    <div className="flex items-center justify-between py-4 pr-4">
                      <div className="text-base">16:50-16:55 (5분)</div>
                      <div className="text-base font-semibold">찬양</div>
                    </div>
                    <div className="flex items-center justify-between py-4 pr-4">
                      <div className="text-base">16:55-17:30 (35분)</div>
                      <div className="text-base font-semibold">합심기도3</div>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </main>
        </section>
      )}
    </>
  )
}
