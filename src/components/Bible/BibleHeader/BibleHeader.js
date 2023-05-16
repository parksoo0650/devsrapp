import { BookConsumer } from '../../bibleProvider'
import styles from '../../../../pages/chapter/[id]/Bible.module.scss'
import classNames from 'classnames/bind'
import Link from 'next/link'
import Sheet from 'react-modal-sheet'

const cn = classNames.bind(styles)

const SettingsModal = ({ isActive, setActive, textSize, setTextSize }) => {

    const TEXT_SIZE_DOWN = 0
    const TEXT_SIZE_UP = 1

    const handleTextSize = (option) => {
        if (option === TEXT_SIZE_DOWN) {
            if (textSize > 0) {
                setTextSize(textSize - 1)
            } else {
                return null
            }
        } else if (option === TEXT_SIZE_UP) {
            if (textSize < 6) {
                setTextSize(textSize + 1)
            } else {
                return null
            }
        }
    }

    return <Sheet isOpen={isActive} onClose={() => setActive(false)} snapPoints={[0.2]}>
        <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
                <section className="flex items-center justify-between px-5 py-4 bg-white">
                    <div className="text-base font-medium">
                        <strong className="text-base font-normal">텍스트 크기</strong>
                        <span className="ml-6 text-base font-medium inline-block">
                            {textSize === 0 ? '12px' : textSize === 1 ? '14px' : textSize === 2 ? '16px' : textSize === 3
                                ? '18px' : textSize === 4 ? '20px' : textSize === 5 ? '24px' : textSize === 6 ? '30px' : null}
                        </span>
                    </div>
                    <ul className="bg-[#f9f9f9] border border-[#ebebeb] rounded flex items-center">
                        <button onClick={() => handleTextSize(TEXT_SIZE_DOWN)}>
                            <li className="w-[73px] text-sm text-center border-r">가</li>
                        </button>
                        <button onClick={() => handleTextSize(TEXT_SIZE_UP)}>
                            <li className="w-[73px] text-lg text-center"><strong>가</strong></li>
                        </button>
                    </ul>
                </section>
            </Sheet.Content>
        </Sheet.Container>
    </Sheet>
}

const BibleHeader = ({ setIsOpen, bid, cid, isActive, setActive, textSize, setTextSize }) => {
    return <BookConsumer>{({ book_name }) => (
        <div className={cn('top_area', 'Header')}>

            {/* SETTINGS */}
            <div className={cn('Settings')}
                 onClick={() => setActive(!isActive)} />

            {/* DROPDOWN */}
            <div className={cn('top_title', 'txt_left', 'Dropdown')}
                 onClick={() => setIsOpen(true)}>
                <div className={cn('DropdownText')}>{book_name[bid]} {cid}장{' '}</div>
                <span className={cn('DropdownArrow')} />
            </div>

            {/* SEARCH */}
            <Link href={`/search`}><a>
                <div alt="검색" className={cn('Search')} />
            </a></Link>

            <SettingsModal isActive={isActive} setActive={setActive} textSize={textSize} setTextSize={setTextSize} />
        </div>
    )}</BookConsumer>
}

export default BibleHeader


/**
 * <ul className="tool_list">
 *     <li onClick={handleToggle}>
 *         <img src="/icons/ico_setting.svg" alt="설정" />
 *     </li>
 *     <Link href={`/search`}>
 *         <a>
 *             <li>
 *                 <img src="/icons/ico_search.svg" alt="검색" />
 *             </li>
 *         </a>
 *     </Link>
 * </ul>
 */