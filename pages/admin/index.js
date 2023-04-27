import Link from 'next/link'
import useSWR from 'swr'
import useUser from '../../libs/client/useUser'
import ListRow from '@/components/ListRow'

/**
 * 어드민 패널 첫 화면.
 */
const AdminPage = () => {
    const { user, isLoading } = useUser()

    const { data: g } = useSWR('/api/contents?kind=shorts')
    const { data: s } = useSWR('/api/contents?kind=sermon')
    const { data: o } = useSWR('/api/contents?kind=oncontents')
    const { data: p } = useSWR('/api/contents?kind=praise')
    const { data: f } = useSWR('/api/contents?kind=feed')

    return (
        <section className="bg-gray-100">
            <h1 className="mt-10 mx-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Hi,{' '}
                <span
                    className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                    Administrator</span>
                .
            </h1>
            <p className="mt-4 mx-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                Manage the contents to be displayed in SRAPP.
            </p>

            <div className="max-w-2xl mx-4 pt-4">
                <div
                    className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <ListRow.Admin url="/admin/MainBanner"
                                   icon="/icons/admin_banner.png"
                                   alt="메인 배너"
                                   title="메인 배너 관리자"
                                   size={''} />
                </div>
            </div>

            {/* Content 관리 */}
            <div className="max-w-2xl mx-4 pt-4">
                <div
                    className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    {/* List Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                            Contents
                        </h3>
                        <a
                            href="https://www.youtube.com/@SUNGRAKCHURCH"
                            target="_blank"
                            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                            유튜브 바로가기
                        </a>
                    </div>
                    {/* end of List Header */}

                    {/* List Body */}
                    <div className="flow-root">
                        <ul role="list"
                            className="divide-y divide-gray-200 dark:divide-gray-700">

                            <ListRow.Admin url="/admin/Contents?kind=shorts"
                                           icon="/icons/admin_shorts.png"
                                           alt="1분 은혜"
                                           title="1분 은혜 관리자"
                                           size={g?.contents?.length} />
                            <ListRow.Admin url="/admin/Contents?kind=sermon"
                                           icon="/icons/admin_sermon.png"
                                           alt="설교"
                                           title="설교 관리자"
                                           size={s?.contents?.length} />
                            <ListRow.Admin url="/admin/Contents?kind=oncontents"
                                           icon="/icons/admin_contents.png"
                                           alt="ON-콘텐츠"
                                           title="ON-콘텐츠 관리자"
                                           size={o?.contents?.length} />
                            <ListRow.Admin url="/admin/Contents?kind=praise"
                                           icon="/icons/admin_praise.png"
                                           alt="찬양"
                                           title="찬양 관리자"
                                           size={p?.contents?.length}
                                           opt={true} />
                            <ListRow.Admin url="/admin/Weekly"
                                           icon="/icons/admin_weekly.png"
                                           alt="주보"
                                           title="주보 관리자"
                                           size="-" />
                            <ListRow.Admin url="/admin/Contents?kind=feed"
                                           icon="/icons/admin_feed.png"
                                           alt="피드"
                                           title="피드 관리자"
                                           size={f?.contents?.length} />
                        </ul>
                    </div>
                    {/* end of List Body */}
                </div>
            </div>

            {/* Copyright */}
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mx-4 mt-8">
        © {new Date().getFullYear()}{' '}
                <a href="http://sungrak.or.kr/sr/"
                   target="_blank"
                   className="hover:underline">
          SUNGRAK CHURCH
        </a>
        . All Rights Reserved.
      </span>
        </section>
    )
}

export default AdminPage
