import EventLayout from "../../src/components/EventLayout";
import TextArea from "../../src/components/textarea";
import Button from "../../src/components/button";
import useSWR from "swr";
import useMutation from "../../libs/client/useMutation";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import { cls } from "../../libs/utils";
import Image from "next/image";

const CommunityPostDetail = () => {
  const router = useRouter();
  const kind = {
    questions: "수련회질문",
    lost: "분실/실종",
    please: "해주세요",
  };
  const { register, handleSubmit, reset } = useForm();
  const [isWondering, setIsWondering] = useState(false);
  const { data, mutate } = useSWR(
    router.query.id ? `/api/posts/${router.query.id}` : null
  );

  const [wonder, { loading }] = useMutation(
    `/api/posts/${router.query.id}/wonder`
  );
  const [sendAnswer, { data: answerData, loading: answerLoading }] =
    useMutation(`/api/posts/${router.query.id}/answers`);

  const onWonderClick = () => {
    setIsWondering(true);
    if (!data) return;
    mutate(
      {
        ...data,
        post: {
          ...data.post,
          _count: {
            ...data.post._count,
            wondering: data?.post._count.wondering + 1,
          },
        },
      },
      false
    );
    if (!loading) {
      wonder({});
    }
  };

  const onValid = (form) => {
    if (answerLoading) return;
    sendAnswer(form);
  };

  useEffect(() => {
    if (answerData && answerData.ok) {
      reset();
      mutate();
    }
  }, [answerData, reset, mutate]);

  return (
    <EventLayout canGoBack title="성락인스타">
      <div className=" border-t mt-4">
        <div className="mt-2 px-4 text-gray-700 text-lg whitespace-pre-wrap">
          {data?.post?.question}
        </div>
        {data?.post?.image && (
          <img
            src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${data?.post.image}/public`}
            className="w-full bg-slate-300"
          />
        )}
        <div className="flex px-4 space-x-5 text-gray-700 py-2.5 border-b-[2px]  w-full">
          {!isWondering ? (
            <button
              onClick={onWonderClick}
              className="flex space-x-2 items-center text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>좋아요 {data?.post?._count?.wondering}</span>
            </button>
          ) : (
            <span className="flex space-x-2 items-center text-sm text-teal-600">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>좋아요 {data?.post?._count?.wondering}</span>
            </span>
          )}

          <span className="flex space-x-2 items-center text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>댓글 {data?.post?._count?.answers}</span>
          </span>
        </div>
      </div>
      <div className="px-4 my-5 space-y-5">
        {data?.post.answers.map((answer) => (
          <div key={answer.id} className="flex items-start space-x-3">
            <div>
              <span className="text-sm block font-medium text-gray-700"></span>
              <span className="text-xs text-gray-500 block ">
                {answer.createdAt}
              </span>
              <p className="text-gray-700 mt-2">{answer.answer} </p>
            </div>
          </div>
        ))}
      </div>
      <form className="px-4" onSubmit={handleSubmit(onValid)}>
        <TextArea
          name="description"
          placeholder="댓글을 입력해주세요."
          required
          register={register("answer", { required: true })}
        />
        <Button text={answerLoading ? "Loading..." : "댓글 달기"} />
      </form>
    </EventLayout>
  );
};

export default CommunityPostDetail;
