import Link from "next/link";
import EventLayout from "../../src/components/EventLayout";
import useSWR from "swr";
import Image from "next/image";
import Loading from "../../src/components/Loading";

const Community = () => {
  const { data } = useSWR(`/api/contents?kind=camp22`);
  return (
    <EventLayout canGoBack hasTabBar title="2022 여름수련회">
      {!data ? (
        <div className="loading_box">
          <Loading />
        </div>
      ) : (
        <div className="space-y-4 pt-16">
          {data?.contents?.map((content) => (
            <Link key={content.id} href={`/campvideo/${content.id}`}>
              <a className="flex cursor-pointer flex-col items-start">
                <div className="px-4 pt-4 pb-2 flex items-center justify-between w-full text-gray-800 font-medium text-base">
                  <span>{content.name}</span>
                </div>
                {content?.image && (
                  <div className="relative pb-56 w-full">
                    <Image
                      src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${content?.image}/public`}
                      className="bg-slate-300 object-cover"
                      layout="fill"
                    />
                  </div>
                )}
              </a>
            </Link>
          ))}
        </div>
      )}
    </EventLayout>
  );
};

export default Community;
