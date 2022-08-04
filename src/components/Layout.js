import React, { useState, useEffect } from "react";ㅋ

export default function Layout({ children }) {
    useEffect(() => {
        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    }, []);

    return (
        <>
            {children}
        </>
    )
}