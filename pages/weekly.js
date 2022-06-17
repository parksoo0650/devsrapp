import Share from "../src/components/Share";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import Loading from "../src/components/Loading";

export default function weeklynews() {
    const router = useRouter();
    const { data } = useSWR("/api/weekly");
    
    return (
        <>
            <div className="sub_container">
                <div className="top_area">
                    <span className="btn_prev" onClick={() => router.push("/")}></span>
                    <div className="top_title">주보</div>
                </div>

                {(!data) ? (
                    <div className="loading_box">
                        <Loading />
                    </div>
                ) : (
                    <>
                        <div className="section subborder jubo_wrap pt0">
                            <div className="movie_wrap">
                            <Link href={`/weekly/${data?.weekly[0].id}`}>
                                <a>
                                    <div className="visual">
                                        <div className="title">{data?.weekly[0].titleKR}</div>
                                        <div className="eng">{data?.weekly[0].titleEN}</div>
                                        <div className="bible">[{data?.weekly[0].bible}]</div>
                                    </div>
                                    <div className="info">
                                        {/* <Share title="" thum="" vid="" /> */}
                                        <div className="date">{data?.weekly[0].publishedAt}</div>
                                    </div>
                                </a>
                            </Link>
                            </div>
                        </div>

                        <div className="section subbordert">
                            <ul className="sermon_list">
                            {data?.weekly?.map((item) => (
                                <Link href={`/weekly/${item.id}`} key={item.id}>
                                    <a>
                                        <li >
                                            <div className="weekly_tit_box">
                                                <div className="tit">{item.titleKR}</div>
                                                <div className="date">{item.publishedAt}</div>
                                            </div>
                                        </li>
                                    </a>
                                </Link>
                            ))}
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}