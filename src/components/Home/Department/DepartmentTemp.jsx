import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

export default function DepartmentTemp() {
  return (
    <div className='section pt0'>
      <div className='title'>성락교회 미래세대</div>
      <Swiper
        className='future_generation'
        spaceBetween={7}
        slidesPerView={'auto'}
        resistanceRatio={0}
        pagination={false}
      >
        <SwiperSlide>
          <Link href='https://www.youtube.com/channel/UCkrWb-HCk3fA7szpbmLHTmw'>
            <a>
              <div className='img'>
                <img src='/images/bwm_logo.png' />
              </div>
              <div className='txt'>청년부</div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='https://www.youtube.com/channel/UCW6bF9L0ZK__Tlwl19B0FYQ'>
            <a>
              <div className='img'>
                <img src='../icons/thumb_cba.svg' alt='대학부' />
              </div>
              <div className='txt'>대학부</div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='https://www.youtube.com/channel/UCcD3GeLh6aBwBN_A5yr4pEg'>
            <a>
              <div className='img'>
                <img src='../icons/thumb_high.svg' alt='고등부' />
              </div>
              <div className='txt'>고등부</div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='https://www.youtube.com/channel/UCDzjhPXk9IypRuCopoFDvlg'>
            <a>
              <div className='img'>
                <img src='../icons/thumb_secondary.svg' alt='중등부' />
              </div>
              <div className='txt'>중등부</div>
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='https://www.youtube.com/channel/UCVZgyTaNK1q-CKM481MO35A'>
            <a>
              <div className='img'>
                <img src='../icons/thumb_elementary.svg' alt='유치부' />
              </div>
              <div className='txt'>어린이부</div>
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
