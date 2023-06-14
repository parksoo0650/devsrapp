import DepartmentBody from './DepartmentBody'
import DepartmentSelect from './DepartmentSelect'
import { useState } from 'react'

export default function Department() {
    const [department, setDepartment] = useState('전체')

    return (
        <>
            <div className="text-[22px] font-semibold pt-[40px] px-[30px] pb-[24px]">
                오늘의 콘텐츠
            </div>

            {/* 부서 선택 메뉴 */}
            <DepartmentSelect department={department} setDepartment={setDepartment} />

            {/* 부서 콘텐츠 내용 */}
            <DepartmentBody department={department} />
        </>
    )
}

{
    /* <Swiper
    className='flex overflow-auto'
    spaceBetween={7}
    slidesPerView={'auto'}
    resistanceRatio={0}
    pagination={false}
  >
    <SwiperSlide className='w-[77px] mb-[15px] text-center'>
      <DepartmentItem
        href='youtube://channel/UCkrWb-HCk3fA7szpbmLHTmw'
        imgSrc='/images/bwm_logo.png'
        title='청년부'
      />
    </SwiperSlide>
  </Swiper> */
}
