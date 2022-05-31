import React, { useState, useEffect } from "react";
import HomeBar from '../../src/components/HomeBar';

export default function Layout({ children }) {
    const homeBarPages = ["Home", "Sermonmain", "Onmain", "Post", "faith"];

    useEffect(() => {
        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    }, []);

    return (
        <>
            {children}
            {/* { (adminPages && !adminPages.includes(children.type.name)) && <HomeBar />} */}
            { (homeBarPages && homeBarPages.includes(children.type.name)) && <HomeBar />}
        </>
    )
}