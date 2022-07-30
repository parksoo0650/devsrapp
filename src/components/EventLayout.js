import React, { useState, useEffect } from "react";
import { cls } from "../../libs/utils";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import iconWrite from "../../public/icons/event/icon_write.png";

export default function Layout({ title, canGoBack, children, kind }) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div className={cls(
        "w-full max-w-2xl mx-auto mb-28"
        )}
    >
      <div
        className={cls(
          !canGoBack ? "justify-between" : "",
          "bg-white w-full max-w-2xl text-lg font-bold px-4 py-4 text-gray-800 top-0  flex items-center fixed z-50"
        )}
      >
        {canGoBack ? (
          <button onClick={onClick}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
        ) : null}

        {title ? <span>{title}</span> : null}

        { (!canGoBack && kind) ? (
          <Link href={`/community/write?kind=${kind}`}>
            <a className="cursor-pointer flex items-center">
              <Image
                src={iconWrite}
                placeholder="blur"
                quality={50}
                width={28}
                height={28}
              />
            </a>
          </Link>
        ) : null}
      </div>
      <div>{children}</div>
    </div>
  );
}
