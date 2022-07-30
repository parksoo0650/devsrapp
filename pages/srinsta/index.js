import Link from "next/link";
import EventLayout from "../../src/components/EventLayout";
import useSWR from "swr";
import Image from "next/image";
import iconLike from "../../public/icons/event/icon_like.png";
import iconAnswer from "../../public/icons/event/icon_answer.png";
import CampNavbar from '../../src/components/CampNavbar/CampNavbar';

const Community = () => {
  const { data } = useSWR(`/api/posts?ckind=insta`);
  return (
    <EventLayout hasTabBar title="성락in스타" kind="s">
      <div className="space-y-4 pt-16">
        {data?.posts?.map((post) => (
          <Link key={post.id} href={`/srinsta/${post.id}`}>
            <a className="flex cursor-pointer flex-col items-start">
              <div className="px-4 pt-4 pb-2 flex items-center justify-between w-full text-gray-800 font-medium text-base">
                <span>{post?.nickName ? post?.nickName : "성락인"}</span>
              </div>
              {post?.image && (
                <div className="relative pb-96 w-full">
                  <Image
                    src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${post?.image}/shorts`}
                    className="bg-slate-300 object-cover"
                    layout="fill"
                  />
                </div>
              )}
              <div className="flex px-4 space-x-5 text-gray-700 py-2.5 w-full">
                <span className="flex space-x-1 items-center text-sm">
                  <Image
                    src={iconLike}
                    placeholder="blur"
                    quality={50}
                    width={20}
                    height={20}
                  />
                  <span>좋아요 {post._count.wondering}</span>
                </span>
                <span className="flex space-x-1 items-center text-sm">
                  <Image
                    src={iconAnswer}
                    placeholder="blur"
                    quality={50}
                    width={20}
                    height={20}
                  />
                  <span>댓글 {post._count.answers}</span>
                </span>
              </div>
              <div className="px-4 text-gray-700 whitespace-pre-wrap h-10 overflow-hidden text-ellipsis">
                {post.question}
              </div>
              <div className="w-full flex justify-end pr-4">...더보기</div>
            </a>
          </Link>
        ))}
      </div>
      <CampNavbar />
    </EventLayout>
  );
};

export default Community;
