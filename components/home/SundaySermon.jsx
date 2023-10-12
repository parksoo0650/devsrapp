import DateUtil from '@/utils/DateUtil'
import Skeleton from '@components/molecule/Skeleton'
import useSWR from 'swr'
import ParsingUtil from '@/utils/ParsingUtil'
import { sermon } from '@/styles/tailwind'
import { useRouter } from 'next/router'

const SundaySermon = () => {
  const router = useRouter()
  const { data } = useSWR('/api/contents?kind=sermon')
  const { fullName, publishedAt, videoId, category, title, scripture } =
    ParsingUtil.parseSermonData(data)

  const pathname = `/sermondetail?vid=${videoId}&vtit=${fullName}&vdate=${publishedAt}&kind=${category}`

  return (
    <div
      className={sermon.banner}
      onClick={() => router.push(pathname, '/sermondetail')}
    >
      <div className="absolute top-72">
        {title ? (
          <p
            className={`text-xs text-white px-[11px] py-[5.5px] mb-3 inline-block rounded-[100px] font-semibold ${
              DateUtil.isLive ? 'bg-[#D43030]/70' : 'bg-[#D48830]/70'
            }`}
          >
            <span>{DateUtil.isLive ? '예배실황' : '주일예배'}</span>
          </p>
        ) : (
          <Skeleton.Badge />
        )}
        {title ? <p className={sermon.title}>{title}</p> : <Skeleton.Title />}
        {scripture ? (
          <p className={sermon.scripture}>
            {scripture}
            <br />
            김성현 감독님
          </p>
        ) : (
          <Skeleton.Description />
        )}
      </div>
    </div>
  )
}

export default SundaySermon
