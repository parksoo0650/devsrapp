import { useRouter } from 'next/router';
import Loading from '../Loading';
import Share from '../Share';

const SermonThisWeek = ({ liveDatas, dataSermon }) => {
  const router = useRouter();

  return (
    <>
      {dataSermon?.contents[0] ? (
        <section className='pt-[50px]'>
          <div>
            {/* 유튜브 영상 */}
            <div
              onClick={() => {
                router.push(
                  `/sermondetail?vid=${liveDatas.videoId}&vtit=${liveDatas.title}&vdate=${liveDatas.publishedAt}&kind=${liveDatas.subKind}`,
                  '/sermondetail'
                );
              }}
            >
              <img
                src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${liveDatas?.thumbnails}/public`}
              />
            </div>

            {/* 영상 정보(info) */}
            <div className='pt-[20px] px-[30px] pb-[50px]'>
              <div className='flex justify-between'>
                <h2 className='text-lg font-bold text-[#313131] pb-2'>
                  주일 설교
                </h2>

                {/* 공유 버튼 */}
                <Share
                  title={liveDatas.title}
                  thum='/images/kakao_def_new.jpg'
                  vid={liveDatas.videoId}
                />
              </div>
              {/* end of FlexBox */}

              {/* 영상 제목 */}
              <div
                className='w-64'
                onClick={() => {
                  router.push(
                    `/sermondetail?vid=${liveDatas.videoId}&vtit=${liveDatas.title}&vdate=${liveDatas.publishedAt}`,
                    '/sermondetail'
                  );
                }}
              >
                <a
                  href='#'
                  className='text-base text-ellipsis overflow-hidden break-keep'
                >
                  {liveDatas.title}
                </a>
              </div>

              {/* 영상 날짜 및 설교자 */}
              <div className='pt-2 text-xs'>{liveDatas.publishedAt}</div>
              {/* <div>설교: 김성현 목사</div> */}
            </div>
            {/* end of info */}
          </div>
          {/* end of Movie */}
        </section>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </>
  );
};

export default SermonThisWeek;
