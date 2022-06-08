import React, { useState, useEffect } from "react";

export default function Layout({ children }) {
    useEffect(() => {
        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
        // setTimeout(scrollTo, 0, 0, 100);
        window.addEventListener("load", function () {
            // Set a timeout...
            setTimeout(function () {
                // Hide the address bar!
                window.scrollTo(0, 10);
            }, 0);
        });
    }, []);

    return (
        <>
            {children}
        </>
    )
}