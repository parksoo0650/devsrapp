import Button from ".././../../src/components/button";
import Layout from ".././../../src/components/AdminLayout";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

const ContentsDetail = () => {
    const router = useRouter();
    const { data, error } = useSWR(
        router.query.id ? `/api/weekly/${router.query.id}` : null
    );
    return (
        <Layout canGoBack>
            <div className="px-4  py-4">
                <div className="mb-8">
                    <div className="mt-5">
                        <h1 className="text-3xl font-bold text-gray-900">
                            {data?.weekly?.titleKR}
                        </h1>
                        <p className="text-2xl block mt-3 text-gray-900">
                            {data?.weekly?.publishedAt}
                        </p>
                        <p className=" my-6 text-gray-700">{data?.weekly?.descriptionKR}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ContentsDetail;