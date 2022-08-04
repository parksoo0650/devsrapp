import React, { useState, useEffect } from "react";
import PWABadge from "pwa-badge";

export default function Layout({ children }) {
  useEffect(() => {
    Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);

    // Create an Instance
    const badge = new PWABadge();

    if (badge.isSupported()) {
      //   console.log("yes");
      //   badge.syncSetBadge(1);
      //   badge.syncClearBadge();
    } else {
      //   console.log("no");
    }
  }, []);

  return <>{children}</>;
}
