import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useSWR from 'swr';

const Praise = () => {
  const router = useRouter();
  const { data: dataPraise } = useSWR('/api/contents?kind=praise');

  return (
    <div>
      <div className='flex items-end justify-between pt-[40px] px-[30px] pb-[20px]'>
        <div className='text-[22px] font-semibold'>은혜로운 찬양</div>

        <Link href='/praisemain'>
          <a className='text-xs text-[#444444]'>전체보기</a>
        </Link>
      </div>

      <Swiper spaceBetween={15} slidesPerView={1.3} className='px-[30px]'>
        {dataPraise?.contents.map((doc, i) => {
          return (
            <SwiperSlide key={doc.id}>
              <div
                onClick={() => {
                  router.push(
                    `/praisedetail?vid=${doc.videoId}&vtit=${doc.name}&vdate=${doc.publishedAt}&kind=${doc.subKind}`,
                    '/praisedetail'
                  );
                }}
              >
                <div>
                  <img
                    className='w-full'
                    src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${doc.image}/public`}
                  />
                </div>

                <a
                  className='block pt-4 text-lg font-bold text-[#313131] '
                  href='#'
                >
                  {doc.name}
                </a>

                <div className='text-base text-ellipsis overflow-hidden break-keep'>
                  {doc.description}
                </div>

                <div className='pt-2 text-xs'>{doc.publishedAt}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Praise;
