import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Admin() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false);

    function checkLogin() {
        //로그인
        setIsLogin(true);
    }

    function logout() {
        //로그아웃
    }

    useEffect(() => {
        checkLogin();
    }, []);
    return (
        <>
            admin page
            {isLogin && <div onClick={logout}>Logout</div>}
        </>
    );
}
