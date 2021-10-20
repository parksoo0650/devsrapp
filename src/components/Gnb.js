import { useRouter } from "next/router";

export default function Gnb() {
    const router = useRouter();

    return (
        <div style={{ flex: 1, display: "flex", paddingLeft: 10, paddingRight: 10, justifyContent: "space-between" }}>
            <div onClick={() => { router.push("/"); }}>home</div>
            <div onClick={() => { router.push("/admin"); }}>admin</div>
        </div>
    );
}
