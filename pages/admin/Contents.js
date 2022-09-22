import Layout from "../../src/components/AdminLayout";
import FloatingButton from "../../src/components/floating-button";
import Link from "next/link";
import useUser from "../../libs/client/useUser";
import useSWR from "swr";
import { useRouter } from "next/router";

const Contents = () => {
    const router = useRouter();
    const { user, isLoading } = useUser();
    const { data } = useSWR(`/api/contents?kind=${router.query.kind}`);
    const strKind = {
        shorts: "1분 은혜 관리자",
        sermon: "메인 설교 관리자",
        oncontents: "메인 온콘텐츠 관리자",
        praise: "메인 찬양 관리자",
        camp22: "2022 수련회영상 등록",
    };
    return (
        <Layout canGoBack title={strKind[router.query.kind]}>
            <div className="flex flex-col space-y-5 divide-y">
                {data?.contents?.map((content) => (
                    <Link key={content.id} href={`/admin/contents/${content.id}`}>
                        <a className="flex cursor-pointer flex-col pt-4 items-start">
                            <span className="flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                {content.kind}
                            </span>
                            <div className="mt-2 px-2 text-gray-700">
                                <span className="text-orange-500 font-medium">{content.publishedAt}</span> {content.name}
                            </div>
                        </a>
                    </Link>
                ))}
                <FloatingButton href={`/admin/ContentsUpload?kind=${router.query.kind}`}>
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                </FloatingButton>
            </div>
        </Layout>
    );
};

export default Contents;