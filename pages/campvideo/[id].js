import EventLayout from "../../src/components/EventLayout";
import Loading from "../../src/components/Loading";
import useSWR from "swr";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

const CommunityPostDetail = () => {
  const router = useRouter();

  const { data } = useSWR(
    router.query.id ? `/api/contents/${router.query.id}` : null
  );

  const opts = {
    width: "320px",
    height: "200px",
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <EventLayout canGoBack title="2022 여름수련회">
      {!data?.contents ? (
        <div className="loading_box">
          <Loading />
        </div>
      ) : (
        <>
          <div className="pt-16">
            <div className="px-4 pt-4 pb-2 flex items-center justify-between w-full text-gray-800 font-medium text-base">
              <span>{data?.contents?.name}</span>
            </div>
            {data?.contents?.videoId && (
              <div className="">
                <YouTube
                  videoId={data.contents.videoId}
                  opts={opts}
                  containerClassName="iframe_wrap"
                />
              </div>
            )}
          </div>
        </>
      )}
    </EventLayout>
  );
};

export default CommunityPostDetail;
