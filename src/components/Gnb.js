import { useRouter } from "next/router";

export default function Gnb() {
    const router = useRouter();
    return (
        <div className="inner">
            <h1 className="logo" onClick={() => { router.push("/"); }}>
                <img src="../images/logo.svg" alt="성락교회" />
            </h1>
            <a href="/settings" className="alarm on"></a>
        </div>
    );
}
