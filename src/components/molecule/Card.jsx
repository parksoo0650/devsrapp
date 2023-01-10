import ClickToMovePage from '../atom/ClickToMovePage';
import Share from '../Share';

Card.V1 = ({ route, data, series }) => {
  return (
    <div className='section subborder'>
      <div className='movie_wrap'>
        <ClickToMovePage
          route={route}
          content={
            <img
              src={data?.thumbnails}
              className='bg-cover bg-center bg-no-repeat'
            />
          }
        />

        <div className='info'>
          <Share
            title={data.title}
            thum={`/images/kakao_${series}_new.jpg`}
            vid={data.videoId}
          />

          <ClickToMovePage route={route} content={<div>{data?.title}</div>} />
          <div className='date'>{data.publishedAt}</div>
        </div>
      </div>
    </div>
  );
};

export default function Card() {}
