import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const Select = ({ children }) => <>{children}</>

Select.Department = ({ departments, setFilter }) => {
  const [tab, setTab] = useState(departments[0])

  const STYLE_PILL_SELECTED =
    'block w-fit px-[14px] py-2 rounded-full bg-[#88629B] font-medium text-sm text-white'
  const STYLE_PILL =
    'block w-fit px-[14px] py-2 rounded-full bg-gray-200 font-medium text-sm text-gray-600'

  const handleClick = (event) => {
    setTab(event.target.innerText)
    setFilter(event.target.innerText)
  }

  const Pill = ({ text }) => (
    <span
      onClick={handleClick}
      className={text === tab ? STYLE_PILL_SELECTED : STYLE_PILL}
    >
      {text}
    </span>
  )

  return (
    <div className="mb-10">
      <Swiper
        className="w-full px-5"
        spaceBetween={10}
        freeMode={true}
        slidesPerView="auto"
      >
        <>
          {departments.map((dept) => (
            <SwiperSlide className="w-fit">
              <Pill text={dept} />
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  )
}

export default Select
