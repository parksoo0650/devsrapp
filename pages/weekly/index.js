import Share from "../../src/components/Share"
import { useRouter } from "next/router"
import useSWR from "swr"
import Link from "next/link"
import Loading from "../../src/components/Loading"
import ActionBar from "../../src/components/molecule/ActionBar"
import ClickToMoveBack from "../../src/components/atom/ClickToMoveBack"
import ClickToMovePage from "../../src/components/atom/ClickToMovePage"
import ListRow from "../../src/components/molecule/ListRow"
import List from "../../src/components/atom/List"
import Icon from "@/components/Icon"

export default function weeklynews() {
  const router = useRouter()
  const { data } = useSWR("/api/weekly")

  return (
    <>
      <div className="">
        {/* 상단 바 */}
        <div className="fixed w-full z-50 bg-white">
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

            <div className="pt-[22px] px-5 bg-white">
              <Link href={`/weekly/${data?.weekly[0].id}`}>
                <a>
                  <div className="w-full rounded-2xl h-[258px] bg-slate-300 pt-[107px] px-6 pb-[30px]">
                    <div className="info">
                      {/* <Share title="" thum="" vid="" /> */}
                      <span className="mb-2 inline-flex h-[27px] items-center bg-[#88629B] text-white rounded-[100px] px-2.5 text-sm font-medium">
                        {data?.weekly[0].publishedAt}
                      </span>
                    </div>
                    <div className="visual">
                      <div className="w-1/2 text-white font-bold text-2xl leading-8">
                        {data?.weekly[0].titleKR}
                      </div>
                      {/* <div className='text-base font-semibold text-[#a0a0a0]'>
                        {data?.weekly[0].titleEN}
                      </div> */}
                      <div className="text-base font-normal text-white">
                        {data?.weekly[0].bible}
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="h-6 bg-white" />
            {/* 구분선 */}
            <div className="h-3 bg-[#F5F5F5]" />

            <List backgroundColor="white">
              {data?.weekly?.map((item, i) => {
                if (i == 0) {
                  return false
                }
                return (
                  <ClickToMovePage
                    route={`/weekly/${item.id}`}
                    key={item.id}
                    content={
                      <div className="py-5 px-4 flex items-center">
                        <div className="w-10 h-10 rounded-full bg-slate-300 mr-3" />

                        <div className="flex flex-col text-start">
                          <span className="text-base font-normal text-[#222222] text-ellipsis">
                            {item.titleKR}
                          </span>
                          <span className="text-sm font-medium text-[#666666] text-ellipsis">
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
