import ClickToMovePage from '../atom/ClickToMovePage';
import Share from '../Share';

/**
 *
 * @param {string} route 클릭 시 이동할 경로.
 * @param {*} data 영상 등 데이터 정보.
 * @param {*} thumbnail 공유 시 썸네일.
 * @returns
 */
Card.Rounded = ({ route, data, thumbnail, preacher }) => {
  return (
    <div className='m-4 rounded-lg border border-[#ebebeb]'>
      <ClickToMovePage
        route={route}
        content={
          <img
            src={data?.thumbnails}
            className='w-screen bg-cover bg-center bg-no-repeat rounded-lg'
          />
        }
      />

      <div className='flex justify-between bg-white px-4 py-3 rounded-lg'>
        <ClickToMovePage
          route={route}
          content={
            <div className='text-left'>
              <div className='text-lg font-bold text-[#333333] truncate w-[300px]'>
                {data?.title}
              </div>
              <div className='text-sm font-semibold text-[#a0a0a0]'>
                {data?.publishedAt} {preacher && ` | ${preacher}`}
              </div>
            </div>
          }
        />

        <Share title={data?.title} thum={thumbnail} vid={data?.videoId} />
      </div>
    </div>
  );
};

export default function Card() {}
