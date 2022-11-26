import Feed from '../../src/components/Feed';
import FeedDetail from '../../src/components/Feed/FeedDetail';
import HomeBar from '../../src/components/HomeBar';
import useSWR from 'swr';

export default function feed() {

  const { data: dataFeed } = useSWR('/api/contents?kind=feed');

  return (
    <section>
      <Feed.Tags />

      {dataFeed?.contents.map((currentContent, index, contents) =>
        (
        <div key={currentContent.id}>
          {/* 새로운 날짜 표시. 동일한 날짜 생략. */}
          {contents[index - 1]?.publishedAt == currentContent.publishedAt || (
            <Feed.Date date={currentContent.publishedAt} />
          )}

          <Feed.Content
            date={currentContent.publishedAt}
            title={currentContent.name}
            tags={currentContent.description.split(",")}
            department={currentContent.subKind}
            imageSrc={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${currentContent.image}/public`}
            videoId={currentContent.videoId}
          />
        </div>
      ))}

      {/* blank */}
      <div
        style={{
          height: '82px',
        }}
      />

      <HomeBar />
    </section>
  );
}
