import useUser from "../../libs/client/useUser";
import Layout from "../../src/components/AdminLayout";
import Link from "next/link";

const Admin = () => {
    const { user, isLoading } = useUser();
    return (
        <Layout title="Admin">
            <div className="flex flex-col space-y-5 divide-y">
                <Link href="/admin/Contents?kind=shorts">
                    <a>
                        <div className="flex px-4 cursor-pointer justify-between">
                            <div className="flex space-x-4">
                                <div className="pt-2 flex flex-col">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        1분 은혜 관리자
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
                <Link href="/admin/Contents?kind=sermon">
                    <a>
                        <div className="flex px-4 cursor-pointer justify-between">
                            <div className="flex space-x-4">
                                <div className="pt-2 flex flex-col">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        메인 설교 관리자
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
                <Link href="/admin/Contents?kind=oncontents">
                    <a>
                        <div className="flex px-4 cursor-pointer justify-between">
                            <div className="flex space-x-4">
                                <div className="pt-2 flex flex-col">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        메인 온콘텐츠 관리자 (주중콘텐츠)
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
                <Link href="/admin/Contents?kind=praise">
                    <a>
                        <div className="flex px-4 cursor-pointer justify-between">
                            <div className="flex space-x-4">
                                <div className="pt-2 flex flex-col">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        메인 찬양 관리자
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
                <Link href="/admin/Weekly">
                    <a>
                        <div className="flex px-4 cursor-pointer justify-between">
                            <div className="flex space-x-4">
                                <div className="pt-2 flex flex-col">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        주보 관리자
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
                <Link href="/admin/Contents?kind=camp22">
                    <a>
                        <div className="flex px-4 cursor-pointer justify-between">
                            <div className="flex space-x-4">
                                <div className="pt-2 flex flex-col">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        2022 수련회영상 등록
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </Layout>
    );
};

export default Admin;