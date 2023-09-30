import { useRouter } from "next/router"
import useSWR from "swr"
import Link from "next/link"
import Loading from "../../src/components/Loading"
import ClickToMovePage from "../../src/components/atom/ClickToMovePage"
import List from "../../src/components/atom/List"
import Icon from "@/components/Icon"
import { useState } from "react"
import Modal from "@/components/base/Modal"

const YearFilterDropdown = () => {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const menu = ["2023년~", "2022년 01~12월", "2021년 01~12월"]

  return (
    <>
      <div className="px-4 flex items-center" onClick={() => setIsOpen(true)}>
        <span className="text-[#49454F] text-base font-normal mr-2">
          {menu[index]}
        </span>
        <img src="icons/BibleDropdownArrow.svg" />
      </div>

      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <section className="fixed bottom-0 w-screen h-[304px] px-5 pt-[30px] pb-[34px] bg-[#F5F5F5] flex flex-col z-[200]">
            <div className="flex flex-col gap-5">
              {menu.map((item, index) => (
                <button
                  key={index}
                  className="h-10 flex items-center text-[#222222] text-lg font-normal"
                  onClick={() => setIndex(index)}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="mt-auto" onClick={() => setIsOpen(false)}>
              <div className="h-[50px] flex items-center justify-center border border-[#EAEAEA] rounded text-[#666666] font-normal text-sm">
                닫기
              </div>
            </button>
          </section>
        </Modal>
      )}
    </>
  )
}

export default function weeklynews() {
  const router = useRouter()
  const { data } = useSWR("/api/weekly")

  return (
    <>
      <div className="">
        {/* 상단 바 */}
        <div className="fixed w-full z-10 bg-white">
          <div className="flex items-center justify-between h-[60px] px-1">
            <div className="flex items-center" onClick={() => router.push("/")}>
              <Icon.Back />
            </div>
            <h3 className="text-base font-medium text-[#222222]">주보</h3>
            <div className="flex items-center">
              {/* 검색 기능 숨김 */}
              {/* <Icon.Search /> */}
              <div className="h-12 w-12" />
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
            <div className="h-10 bg-[#88629B] text-white flex items-center justify-center text-sm font-normal">
              하나님의 신령한 은혜와 성도의 진정한 믿음의 조화
            </div>

            <div className="pt-[22px] px-4 bg-white">
              <Link href={`/weekly/${data?.weekly[0].id}`}>
                <a>
                  <div className="w-full rounded-2xl h-[258px] pt-[107px] px-6 pb-[30px] bg-[url('/images/weekly_main_banner.jpeg')] bg-no-repeat bg-center bg-cover flex flex-col justify-end">
                    <div className="info">
                      {/* <Share title="" thum="" vid="" /> */}
                      <span className="mb-2 inline-flex h-[27px] items-center bg-[#88629B] text-white rounded-[100px] px-2.5 text-sm font-medium">
                        {data?.weekly[0].publishedAt.substring(2)}
                      </span>
                    </div>
                    <div className="">
                      <div className="w-3/4 text-white font-bold text-2xl leading-8 break-keep">
                        {data?.weekly[0].orderSermon}
                      </div>
                      <div className="text-base font-normal text-white mt-1">
                        {data?.weekly[0].orderBible}
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="h-6 bg-white" />
            {/* 구분선 */}
            <div className="h-3 bg-[#F5F5F5] mb-6" />

            {/* 주보 연도 선택 드롭다운 */}
            <YearFilterDropdown />

            <List backgroundColor="white">
              {data?.weekly?.map((item, i) => {
                return (
                  <ClickToMovePage
                    route={`/weekly/${item.id}`}
                    key={item.id}
                    content={
                      <div className="py-5 px-4 flex items-center h-[80px]">
                        <div className="w-10 h-10 rounded-full bg-slate-300 mr-3 flex items-center justify-center">
                          <span className="text-[#8E248A] text-xs font-medium">
                            {item.weekNo}호
                          </span>
                        </div>

                        <div className="flex flex-col items-center">
                          <span className="text-base font-normal text-[#222222] mr-auto text-start line-clamp-1">
                            {item.orderSermon}
                          </span>
                          <span className="text-sm font-medium text-[#666666] mr-auto text-start line-clamp-1">
                            {item.publishedAt} · 성락교회 SUNGRAK CHURCH
                          </span>
                        </div>

                        <div className="ml-auto transform rotate-180">
                          <Icon.Back />
                        </div>
                      </div>
                    }
                  />
                )
              })}
            </List>
          </>
        )}
      </div>
    </>
  )
}
