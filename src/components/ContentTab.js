import { useRouter } from "next/router";

export default function ContentTab() {
    const router = useRouter();
    return (
        <>
            <span className="btn_prev" onClick={() => router.push("/")}></span>
            <div className="top_title">콘텐츠</div>
            <div className="tab_wrap">
                <ul className="tab_area">
                    <li onClick={() => router.push("/onmain")} className={(router.pathname == "/onmain") ? "on" : ""}>온시리즈</li>
                    <li onClick={() => router.push("/returnMain")} className={(router.pathname == "/returnMain") ? "on" : ""}>환언특강</li>
                    <li onClick={() => router.push("/prayerMain")} className={(router.pathname == "/prayerMain") ? "on" : ""}>주중 기도회</li>
                    <li onClick={() => router.push("/faith")} className={(router.pathname == "/faith") ? "on" : ""}>1분 은혜</li>
                </ul>
            </div>
        </>

    )
}