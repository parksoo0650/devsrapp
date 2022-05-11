import { useRouter } from "next/router";
import Link from "next/link";

export default function Sermonmain() {
    const router = useRouter();

    return (
        <div className="sub_container">
            <div className="top_area">
                <span className="btn_prev" onClick={() => router.push("/")}></span>
                <div className="top_title">콘텐츠</div>
            </div>
            <div className="section pt30">
                <Link href="/onmain">
                    <a>
                        <img style={{ width: "100%", paddingBottom: "15px" }} src="/images/contents_1.png" alt="온시리즈" />
                    </a>
                </Link>
                <Link href="/returnMain">
                    <a>
                        <img style={{ width: "100%", paddingBottom: "15px" }} src="/images/contents_2.png" alt="환언특강" />
                    </a>
                </Link>
                <Link href="/prayerMain">
                    <a>
                        <img style={{ width: "100%", paddingBottom: "15px" }} src="/images/contents_3.png" alt="기도회" />
                    </a>
                </Link>
            </div>
        </div>
    );
}