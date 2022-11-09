import DepartmentSelect from './DepartmentSelect';

export default function Department() {
  return (
    <>
      <div className='text-[22px] font-semibold pt-[40px] px-[30px] pb-[24px]'>
        성락교회 미래세대
      </div>

      {/* 부서 선택 메뉴 */}
      <DepartmentSelect />
    </>
  );
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
