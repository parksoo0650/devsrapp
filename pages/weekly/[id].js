import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Weeklyorder from "../../src/components/Weeklyorder";
import Weeklysummary from "../../src/components/Weeklysummary";
import Loading from "../../src/components/Loading";
import useSWR from "swr";


export default function weekly() {
    const router = useRouter();
    let kind = "";
    (router.query.kind) ? kind = router.query.kind : kind = "ord";
    const [tabKind, setTabKind] = useState(kind);
    const [isLoading, setIsLoading] = useState(true);

    const { data, error } = useSWR(
        router.query.id ? `/api/weekly/${router.query.id}` : null
    );

    useEffect(() => {
        setTabKind(kind);
    }, [router]);

    return (
        <div className="sub_container sermon_detail">
            <div className="top_area">
                <span className="btn_prev" onClick={() => router.push("/weekly")}></span>
                <div className="top_title">주보</div>
            </div>
                {(!data) ? (
                    <div className="loading_box">
                        <Loading />
                    </div>
                ) : (
                    <>
                        <div className="flex justify-center items-center py-3 bg-zinc-700 text-white text-base">
                            제 {data?.weekly.volume}권 {data?.weekly.weekNo}호 <span className="px-2 opacity-50 text-sm">|</span> {data?.weekly.publishedAt}
                        </div>
                        <div className="section">
                            <ul className="tab_area">
                                <li onClick={() => { if (tabKind != "ord") { setTabKind("ord"); } }} className={(tabKind == "ord") ? "on" : ""}>예배순서</li>
                                <li onClick={() => { if (tabKind != "ser") { setTabKind("ser"); } }} className={(tabKind == "ser") ? "on" : ""}>설교요지</li>
                            </ul>
                            <div className="tab_con">
                                {(tabKind == "ord") && <Weeklyorder data={data?.weekly} />}
                                {(tabKind == "ser") && <Weeklysummary data={data?.weekly} />}
                            </div>
                        </div>
                    </>
                )}
        </div>
    );
}