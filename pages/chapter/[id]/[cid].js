import React, { useState, useEffect } from 'react'
import Sheet from 'react-modal-sheet'
import { useRouter } from 'next/router'
// import Link from 'next/link';
import Loading from '../../../src/components/Loading'
import HomeBar from '../../../src/components/HomeBar'
import styles from './Bible.module.scss'
import classNames from 'classnames/bind'
import BibleList from '../../../src/components/Bible/BibleList/BibleList'
import BibleTabs from '../../../src/components/Bible/BibleTabs/BibleTabs'
import BibleHeader from '../../../src/components/Bible/BibleHeader/BibleHeader'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const cn = classNames.bind(styles)

const Post = ({ items, bid, cid }) => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setActive] = useState(false)
    const [currentChapter, setCurrentChapter] = useState(cid)
    const [currentBook, setCurrentBook] = useState(bid)
    const [category, setCategory] = useState('전체')
    const [swiper, setSwiper] = useState(null)

    const bibleTextSize = ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl']
    const [textSize, setTextSize] = useState(2)

    useEffect(() => {
        localStorage.setItem('bible', bid)
        localStorage.setItem('chapter', cid)
    }, [router])

    useEffect(() => {
        // 마지막 슬라이드 인덱스 비활성화 방지
        if (swiper) swiper.snapGrid = swiper.slidesGrid.slice(0)
    }, [swiper])

    // 각 성경의 마지막 페이지 수, lastPage[bid] 로 접근.
    const lastPage = [
        0, 50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42,
        150, 31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4, 28,
        16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 3, 1, 13, 5, 5, 3, 5, 1,
        1, 1, 22,
    ]

    const bookId = parseInt(bid)
    const chapterId = parseInt(cid)

    const movePrevChapter = () => {
        if (chapterId == 1) {
            if (bookId == 1) return
            router.push(`/chapter/${bookId - 1}/${lastPage[bookId - 1]}`)
        } else {
            router.push(`/chapter/${bookId}/${chapterId - 1}`)
        }
    }

    const moveNextChapter = () => {
        if (chapterId == lastPage[bookId]) {
            if (bookId == 66) return
            router.push(`/chapter/${bookId + 1}/1`)
        } else {
            router.push(`/chapter/${bookId}/${chapterId + 1}`)
        }
    }

    const getPrevChapter = () => {
        if (chapterId == 1) {
            if (bookId == 1) return 0
            else return lastPage[bookId - 1]
        } else {
            return chapterId - 1
        }
    }

    const getNextChapter = () => {
        if (chapterId == lastPage[bookId]) {
            if (bookId == 66) return 0
            else return 1
        } else {
            return chapterId + 1
        }
    }

    const handleToggle = () => {
        setActive(!isActive)
    }

    if (router.isFallback) {
        return <Loading />
    }

    console.log(
        `snapGrid: ${swiper?.snapGrid} / slidesGrid: ${swiper?.slidesGrid}`
    )

    console.log(
        `Modal(${isOpen}), Category(${category}), Current(${currentBook} : ${currentChapter}), ID(${bid} : ${cid})`
    )

    return (
        <>
            <div className={cn('container', 'BibleContainer')}>
                {/* 성경 헤더: 설정, 드롭다운, 검색 */}
                <BibleHeader
                    setIsOpen={setIsOpen}
                    bid={bid}
                    cid={cid}
                    isActive={isActive}
                    setActive={setActive}
                    textSize={textSize}
                    setTextSize={setTextSize}
                />

                <div className="shadow"></div>
                <style jsx>{`
                  .shadow {
                    display: ${isActive ? 'block' : 'none'};
                  }
                `}</style>

                {/* 드롭다운 누르면 나오는 모달창 */}
                <Sheet
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    snapPoints={[1]}
                >
                    <Sheet.Container>
                        <Sheet.Header />
                        <Sheet.Content>
                            <div className={cn('layer_bible_read', 'Modal')}>
                                <div className={cn('Header')}>
                                    <button
                                        className={cn('CloseButton')}
                                        onClick={() => setIsOpen(false)}
                                    />
                                    <div className={cn('Title')}>성경 구절 찾기</div>
                                    <div className={cn('Empty')} />
                                </div>

                                {/* 전체, 구약, 신약 */}
                                <BibleTabs category={category} setCategory={setCategory} />

                                {/* 탭 밑에 표시되는 성경 리스트 */}
                                <BibleList
                                    currentBook={currentBook}
                                    setCurrentBook={setCurrentBook}
                                    category={category}
                                    setCategory={setCategory}
                                    setCurrentChapter={setCurrentChapter}
                                    setIsOpen={setIsOpen}
                                    cid={cid}
                                />
                            </div>
                        </Sheet.Content>
                    </Sheet.Container>
                    <Sheet.Backdrop />
                </Sheet>
                {/* end of Modal(Sheet) */}

                <div className="section bible_con">
                    {/* 성경 본문 표시 */}
                    <Swiper
                        className={cn('Swiper')}
                        slidesPerView="auto"
                        initialSlide={1}
                        onSwiper={setSwiper}
                        onSlideChange={() => {
                            // 마지막 슬라이드 인덱스 비활성화 방지
                            if (swiper?.snapGrid) swiper.snapGrid = [...swiper.slidesGrid]
                            console.log(`slide to ${swiper?.activeIndex}`)

                            /**
                             * 왼쪽 슬라이드 인덱스는 0, 오른쪽 슬라이드 인덱스는 2
                             * 좌우로 어느쪽으로 당기든지, 다시 가운데(인덱스 1)로 돌아옴
                             */
                            swiper?.activeIndex == 0
                                ? movePrevChapter()
                                : swiper?.activeIndex == 2
                                    ? moveNextChapter()
                                    : null
                            swiper?.slideTo(1)
                        }}
                    >
                        <SwiperSlide className={cn('SlideLeft')}>
                            {bid == 1 && cid == 1 ? null : <div>{getPrevChapter()}</div>}
                        </SwiperSlide>

                        <SwiperSlide>
                            <ul className={cn('verse_list', 'VerseList')}>
                                {items.map((item, i) => (
                                    <li key={i}>
                                        <span className={bibleTextSize[textSize]}>
                                            <strong>{item.verse}.</strong> {item.content}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </SwiperSlide>

                        <SwiperSlide className={cn('SlideRight')}>
                            {bid == 66 && cid == 22 ? null : <div>{getNextChapter()}</div>}
                        </SwiperSlide>
                    </Swiper>

                    {/* 이전 장, 다음 장 버튼 */}
                    {bid == 1 && cid == 1 ? null : (
                        <img
                            className="btn_left"
                            src="/icons/ico_left.svg"
                            alt="이전"
                            onClick={() => movePrevChapter()}
                        />
                    )}
                    {bid == 66 && cid == 22 ? null : (
                        <img
                            className="btn_right"
                            src="/icons/ico_right.svg"
                            alt="다음"
                            onClick={() => moveNextChapter()}
                        />
                    )}
                    {/* end of floating buttons */}
                </div>
            </div>

            <HomeBar />
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            // { params: { id: "1", cid: "1" } },
        ],
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const dev = process.env.NODE_ENV !== 'production'
    const server = dev ? 'http://localhost:3000' : 'https://srapp.vercel.app'

    const id = context.params.id
    const cid = context.params.cid

    // const res = await fetch('http://localhost:3000/api/bible');
    const response = await fetch(`${server}/api/bible?b=${id}&c=${cid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const json = await response.json()

    return {
        props: {
            items: json.bibles,
            bid: id,
            cid: cid,
        },
    }
}

export default Post
