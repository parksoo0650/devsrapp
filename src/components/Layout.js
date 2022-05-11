import React, { useState, useEffect } from "react";
import HomeBar from '../../src/components/HomeBar';

export default function Layout({ children }) {
    useEffect(() => {
        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    }, []);

    return (
        <>
            {children}
            { (children.type.name != "Admin") && <HomeBar />}
        </>
    )
}