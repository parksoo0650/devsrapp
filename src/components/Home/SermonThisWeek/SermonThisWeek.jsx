import { useRouter } from 'next/router';
import Loading from '../../Loading';
import Share from '../../Share';
import styles from './SermonThisWeek.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const SermonThisWeek = ({ liveDatas, dataSermon }) => {
  const router = useRouter();

  return (
    <>
      {dataSermon?.contents[0] ? (
        <section className='section pt0'>
          <div className={cn('Movie')}>
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
                style={{ width: '100%' }}
                src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${liveDatas?.thumbnails}/public`}
              />
            </div>

            {/* 영상 정보(info) */}
            <div className={cn('info')}>
              <div className={cn('FlexBox')}>
                {/* 영상 제목 */}
                <div
                  className={cn('title')}
                  onClick={() => {
                    router.push(
                      `/sermondetail?vid=${liveDatas.videoId}&vtit=${liveDatas.title}&vdate=${liveDatas.publishedAt}`,
                      '/sermondetail'
                    );
                  }}
                >
                  <a href='#'>{liveDatas.title}</a>
                </div>

                {/* 공유 버튼 */}
                <Share
                  title={liveDatas.title}
                  thum='/images/kakao_def_new.jpg'
                  vid={liveDatas.videoId}
                />
              </div>
              {/* end of FlexBox */}

              {/* 영상 날짜 및 설교자 */}
              <div className={cn('date')}>{liveDatas.publishedAt}</div>
              <div className={cn('preacher')}>설교: 김성현 목사</div>
            </div>
            {/* end of info */}
          </div>
          {/* end of Movie */}
        </section>
      ) : (
        <div className={cn('Loading')}>
          <Loading />
        </div>
      )}
    </>
  );
};

export default SermonThisWeek;
