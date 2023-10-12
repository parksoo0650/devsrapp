import Spinner from '@/components/Spinner'
import VideoCard from '@/components/base/VideoCard'

const InfiniteScrollTestBar = ({
  mutate,
  size,
  setSize,
  contents,
  isLoadingMore,
  isReachingEnd,
  isRefreshing,
}) => {
  return (
    <>
      <div className="w-full h-8 fixed flex justify-between bg-gray-300 z-50">
        <button>
          페이지: {size} / 항목: {isLoadingMore ? '...' : contents.length}개
        </button>

        <button
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
          className="bg-blue-600 text-white"
        >
          {isLoadingMore
            ? 'loading...'
            : isReachingEnd
            ? 'no more issues'
            : 'load more'}
        </button>
        <button disabled={isRefreshing} onClick={() => mutate()}>
          {isRefreshing ? 'refreshing' : 'refresh'}
        </button>
        <button disabled={!size} onClick={() => setSize(0)}>
          clear
        </button>
      </div>

      {/* blank */}
      <div className="block h-8" />
    </>
  )
}

const InfiniteScroll = ({
  mutate,
  size,
  setSize,
  contents,
  isLoadingMore,
  isEmpty,
  isReachingEnd,
  isRefreshing,
  isFetching,
  lastContentElementRef,

  testMode = false,
}) => {
  return (
    <>
      {testMode && (
        <InfiniteScrollTestBar
          mutate={mutate}
          size={size}
          setSize={setSize}
          contents={contents}
          isLoadingMore={isLoadingMore}
          isReachingEnd={isReachingEnd}
          isRefreshing={isRefreshing}
        />
      )}

      {isEmpty ? <p>콘텐츠를 찾지 못했습니다.</p> : null}

      {contents.map((content, index) => {
        if (contents.length === index + 1) {
          return (
            <div key={content.id} ref={lastContentElementRef}>
              <VideoCard content={content} />
            </div>
          )
        } else {
          return (
            <div key={content.id}>
              <VideoCard content={content} />
            </div>
          )
        }
      })}

      {isFetching && (
        <div className="w-full flex justify-center pb-4">
          <Spinner size={8} />
        </div>
      )}
    </>
  )
}

export default InfiniteScroll
