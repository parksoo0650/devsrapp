import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css/pagination'
import Skeleton from '../molecule/Skeleton'
import ParsingUtil from '../../utils/ParsingUtil'
import DateUtil from '../../utils/DateUtil'

/**
 * 어플 메인 배너.
 */
export default function Jumbotron() {

    const router = useRouter()

    /**
     * 점보트론 높이 설정.
     */
    const [height, setHeight] = useState(null)

    useEffect(() => {
        setHeight(() => window.innerWidth * 1.333325)
        initBulletStyle()
    }, [])

    /**
     * 스와이퍼 불렛 스타일 초기화.
     */
    function initBulletStyle() {
        const bullets = document.querySelectorAll('.swiper-pagination-bullet')

        bullets.forEach(bullet => {
            bullet.style.backgroundColor = 'white'
            bullet.style.opacity = '0.7'
            bullet.style.width = '8px'
            bullet.style.transition = 'all 0.3s ease'
        })

        const activeBullet = document.querySelector('.swiper-pagination-bullet-active')
        if (activeBullet) {
            activeBullet.style.backgroundColor = 'white'
            activeBullet.style.opacity = '1'
            activeBullet.style.width = '20px'
            activeBullet.style.borderRadius = '10px'
        }
    }

    /**
     * 설교 데이터를 가져와서 파싱.
     */
    const { data } = useSWR('/api/contents?kind=sermon')
    const { fullName, publishedAt, videoId, category, title, scripture } =
        ParsingUtil.parseSermonData(data)

    /**
     * 스와이퍼 자동 넘김 설정.
     */
    SwiperCore.use([Autoplay])

    /**
     * 주일 설교 배너.
     */
    function SundaySermon() {

        const SERMON_BANNER = `w-full h-full bg-no-repeat bg-cover bg-center bg-[url('images/jumbotron_sermon.png')] px-8`
        const SERMON_TITLE = 'text-white font-extrabold text-[32px] mb-3 max-h-[80px] tracking-[-0.5px] break-keep max-w-xs leading-10 text-ellipsis overflow-hidden'
        const SERMON_SCRIPTURE = 'text-[#eeeeee] text-[14px] leading-6 font-bold'

        return <div className={SERMON_BANNER}
                    onClick={() => router.push(
                        `/sermondetail?vid=${videoId}&vtit=${fullName}&vdate=${publishedAt}&kind=${category}`,
                        '/sermondetail'
                    )}>
            <div className="absolute top-72">
                {title ?
                    <p className={`text-xs text-white px-[11px] py-[5.5px] mb-3 inline-block rounded-[100px] font-semibold ${
                        DateUtil.isLive ? 'bg-[#D43030]/70' : 'bg-[#D48830]/70'
                    }`}><span>{DateUtil.isLive ? '예배실황' : '주일예배'}</span></p> : <Skeleton.Badge />
                }
                {title ? <p className={SERMON_TITLE}>{title}</p> : <Skeleton.Title />}
                {scripture ? <p className={SERMON_SCRIPTURE}>{scripture}<br />김성현 감독님</p> : <Skeleton.Description />}
            </div>
        </div>
    }

    /**
     * 점보트론 슬라이드.
     *
     * 5초(delay: 5000)마다 자동으로 슬라이드 넘김.
     */
    return (
        <Swiper
            className="w-screen"
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}                                            // 슬라이드가 1개인 경우 false. 2개 이상은 true.
            onSlideChange={initBulletStyle}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
        >
            {/* 주일 설교 */}
            <SwiperSlide className={`h-[${height}px]`}>
                <SundaySermon />
            </SwiperSlide>

            {/* 어린이청소년부 여름수련회 워크숍 */}
            <SwiperSlide><img
                className="w-full bg-no-repeat bg-cover bg-center"
                src="images/banner_5.jpg" />
            </SwiperSlide>

            {/* 전교인 특별기도회 */}
            <SwiperSlide><img
                className="w-full bg-no-repeat bg-cover bg-center"
                src="images/banner_6.jpg" />
            </SwiperSlide>

            {/* 무화과 카페 */}
            <SwiperSlide><img
                className="w-full bg-no-repeat bg-cover bg-center"
                src="images/banner_7.jpg" />
            </SwiperSlide>

            {/* 2023 맥추절 */}
            <SwiperSlide><img
                className="w-full bg-no-repeat bg-cover bg-center"
                src="images/banner_8.jpg" />
            </SwiperSlide>

        </Swiper>
    )
}
