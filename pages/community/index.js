import Link from "next/link";
import EventLayout from "../../src/components/EventLayout";
import useSWR from "swr";
import { cls } from "../../libs/utils";
import Image from "next/image";

const Community = () => {
  const { data } = useSWR(`/api/posts?ckind=notice`);
  const kind = {
    questions: "수련회 질문",
    lost: "분실/실종",
    please: "도와주세요",
  };
  return (
    <EventLayout hasTabBar title="문의하기" kind="q">
      <div className="space-y-4 divide-y-[8px]">
        {data?.posts?.map((post) => (
          <Link key={post.id} href={`/community/${post.id}`}>
            <a className="flex cursor-pointer flex-col pt-4 items-start">
              <span
                className={cls(
                  post.category == "questions" ? "bg-blue-600" : "bg-gray-800",
                  post.category == "lost" ? "bg-red-600" : "bg-gray-800",
                  post.category == "please" ? "bg-green-600" : "bg-gray-800",
                  "flex ml-4 items-center px-2.5 py-1 rounded-sm text-xs font-medium text-white"
                )}
              >
                {kind[post.category]}
              </span>
              <div className="mt-2 px-4 text-gray-700 whitespace-pre-wrap">
                <div className="h-20 overflow-hidden text-ellipsis">
                  {post.question}
                </div>
                {post?.image ? (
                  <div className="pt-4 w-20 relative pb-20">
                    <Image
                      src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${post?.image}/shorts`}
                      // width="80"
                      // height="80"
                      layout="fill"
                      className=" rounded-md object-cover"
                    />
                  </div>
                ) : null}
              </div>

              <div className="mt-5 px-4 flex items-center justify-between w-full text-gray-500 font-medium text-xs">
                <span>{post?.nickName ? post?.nickName : "성락인"}</span>
                <span>{post.createdAt.substring(0, 10)}</span>
              </div>
              <div className="flex px-4 space-x-5 mt-3 text-gray-700 py-2.5 border-t   w-full">
                <span className="flex space-x-2 items-center text-sm">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>궁금해요 {post._count.wondering}</span>
                </span>
                <span className="flex space-x-2 items-center text-sm">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  <span>답변 {post._count.answers}</span>
                </span>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </EventLayout>
  );
};

export default Community;
