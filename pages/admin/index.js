import Layout from "../../src/components/AdminLayout";
import Link from "next/link";

const Admin = () => {
    return (
        <Layout title="Admin">
            <div className="flex flex-col space-y-5 divide-y">
                <Link href="/admin/weekly">
                    <a>
                        <div className="flex px-4 pt-5 cursor-pointer justify-between">
                            <div className="flex space-x-4">
                                <div className="pt-2 flex flex-col">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        주보 관리자
                                    </h3>
                                    <span className="text-xs text-gray-500">Black</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
                <div className="flex px-4 pt-5 cursor-pointer justify-between">
                    <div className="flex space-x-4">
                        <div className="pt-2 flex flex-col">
                            <h3 className="text-sm font-medium text-gray-900">
                                콘텐츠 관리자
                            </h3>
                            <span className="text-xs text-gray-500">Black</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Admin;