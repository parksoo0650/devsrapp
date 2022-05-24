import Layout from "../../src/components/AdminLayout";
import FloatingButton from "../../src/components/floating-button";
import Link from "next/link";

const Weekly = () => {
    return (
        <Layout canGoBack title="주보관리자">
            <div className="space-y-4 divide-y-[2px]">
                {[1, 2, 3, 4, 5, 6].map((_, i) => (
                    <Link key={i} href={`/admin/weeklyCreate`}>
                        <a className="flex cursor-pointer flex-col pt-4 items-start">
                            <span className="flex ml-4 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                No.
                            </span>
                            <div className="mt-2 px-4 text-gray-700">
                                <span className="text-orange-500 font-medium">Title.</span> 제목
                            </div>
                            <div className="mt-5 px-4 flex items-center justify-between w-full text-gray-500 font-medium text-xs">
                                <span>요약</span>
                            </div>
                        </a>
                    </Link>
                ))}
                <FloatingButton href="/admin/weeklyCreate">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        ></path>
                    </svg>
                </FloatingButton>
            </div>
        </Layout>
    );
};

export default Weekly;