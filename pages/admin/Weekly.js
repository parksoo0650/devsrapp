import Layout from "../../src/components/AdminLayout";
import FloatingButton from "../../src/components/floating-button";
import Link from "next/link";
import useUser from "../../libs/client/useUser";
import useSWR from "swr";

const Weekly = () => {
    const { user, isLoading } = useUser();
    const { data } = useSWR("/api/weekly");
    return (
        <Layout canGoBack title="주보 관리자">
            <div className="flex flex-col space-y-5 divide-y">
                {data?.weekly?.map((week) => (
                    <Link key={week.id} href={`/admin/weekly/${week.id}`}>
                        <a className="flex cursor-pointer flex-col pt-4 items-start">
                            <span className="flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                {week.volume}권 {week.weekNo}호
                            </span>
                            <div className="mt-2 px-2 text-gray-700">
                                <span className="text-orange-500 font-medium">{week.publishedAt}</span> {week.titleKR}
                            </div>
                        </a>
                    </Link>
                ))}
                <FloatingButton href="/admin/WeeklyUpload">
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

export default Weekly;