import { useRouter } from "next/router";

export default function Gnb() {
    const router = useRouter();
    return (
        <div class="inner">
            <h1 class="logo" onClick={() => { router.push("/"); }}>
                <img src="../images/logo.svg" alt="성락교회" />
            </h1>
            <span style={{float: "right", marginRight: "40px", lineHeight: "36px"}} onClick={() => { router.push("/admin"); }}>관리자</span>
            <a href="/settings" class="alarm on"></a>
        </div>
    );
}
