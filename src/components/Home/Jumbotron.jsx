import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css/pagination';
import useSWR from 'swr';
import Skeleton from '../molecule/Skeleton';
import ParsingUtil from '../../utils/ParsingUtil';
import DateUtil from '../../utils/DateUtil';

/**
 * 어플 메인 대형 스크린.
 */
export default function Jumbotron() {
    const router = useRouter();

    /**
     * 점보트론 높이 설정.
     */
    const [height, setHeight] = useState(null);
    useEffect(() => {
        setHeight(() => window.innerWidth * 1.333325);
        initBulletStyle();
    }, []);

    /**
     * 스와이퍼 불렛 스타일 초기화.
     */
    function initBulletStyle() {
        const bullets = document.querySelectorAll('.swiper-pagination-bullet');

        bullets.forEach(bullet => {
            bullet.style.backgroundColor = 'white';
            bullet.style.opacity = '0.7';
            bullet.style.width = '8px';
            bullet.style.transition = 'all 0.3s ease';
        });

        const activeBullet = document.querySelector('.swiper-pagination-bullet-active');
        if (activeBullet) {
            activeBullet.style.backgroundColor = 'white';
            activeBullet.style.opacity = '1';
            activeBullet.style.width = '20px';
            activeBullet.style.borderRadius = '10px';
        }
    }

    /**
     * 설교 데이터를 가져와서 파싱.
     */
    const { data } = useSWR('/api/contents?kind=sermon');
    const { fullName, publishedAt, videoId, category, title, scripture } =
        ParsingUtil.parseSermonData(data);

    /**
     * 스와이퍼 자동 넘김 설정.
     */
    SwiperCore.use([Autoplay]);

    /**
     * 주일 설교.
     */
    function SundaySermon() {
        return (
            <div
                className={`w-full h-full bg-no-repeat bg-cover bg-center bg-[url('images/jumbotron_sermon.png')] px-8`}
                onClick={() => {
                    router.push(
                        `/sermondetail?vid=${videoId}&vtit=${fullName}&vdate=${publishedAt}&kind=${category}`,
                        '/sermondetail'
                    );
                }}
            >
                <div className="absolute top-72">
                    <LiveBadge />
                    <SermonTitle />
                    <SermonScriptureAndPreacher />
                </div>
            </div>
        );
    }

    /**
     * 라이브 뱃지.
     */
    function LiveBadge() {
        return (
            <>
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
            </>
        );
    }

    /**
     * 설교 제목.
     */
    function SermonTitle() {
        return (
            <>
                {title ? (
                    <p className="text-white font-extrabold text-[32px] mb-3 max-h-[80px] tracking-[-0.5px] break-keep max-w-xs leading-10 text-ellipsis overflow-hidden">
                        {title}
                    </p>
                ) : (
                    <Skeleton.Title />
                )}
            </>
        );
    }

    /**
     * 설교 본문 및 설교자.
     */
    function SermonScriptureAndPreacher() {
        return (
            <>
                {scripture ? (
                    <p className="text-[#eeeeee] text-[14px] leading-6 font-bold">
                        {scripture} <br />
                        김성현 감독님
                    </p>
                ) : (
                    <Skeleton.Description />
                )}
            </>
        );
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
            loop={true}
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

            {/* 2023 고난주간 */}
            <SwiperSlide>
                <img
                    className="w-full bg-no-repeat bg-cover bg-center"
                    src="images/banner_2023_4.jpeg"
                />
            </SwiperSlide>

            {/* 2023 부활절 */}
            <SwiperSlide>
                <img
                    className="w-full bg-no-repeat bg-cover bg-center"
                    src="images/banner_2023_r.jpg"
                />
            </SwiperSlide>
        </Swiper>
    );
}
