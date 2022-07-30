import EventLayout from "../../src/components/EventLayout";
import TextArea from "../../src/components/textarea";
import Input from "../../src/components/input";
import Button from "../../src/components/button";
import Loading from "../../src/components/Loading";
import useSWR from "swr";
import useMutation from "../../libs/client/useMutation";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";

const CommunityPostDetail = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const [isWondering, setIsWondering] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const { data, mutate } = useSWR(
    router.query.id ? `/api/posts/${router.query.id}` : null
  );

  const [wonder, { loading }] = useMutation(
    `/api/posts/${router.query.id}/wonder`
  );

  const [sendAnswer, { data: answerData, loading: answerLoading }] =
    useMutation(`/api/posts/${router.query.id}/answers`);

  const [sendDelete, { data: deleteData, loading: deleteLoading }] =
    useMutation(`/api/posts/${router.query.id}/delete`);

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

  const onValidDelete = (form) => {
    if (deleteLoading) return;

    console.log(form.password);
    if (data?.post?.password && form.password === data?.post?.password) {
      sendDelete(form);
    } else {
      alert("비밀번호를 확인하세요");
    }
  };

  useEffect(() => {
    if (answerData && answerData.ok) {
      reset();
      mutate();
      setIsAnswer(false);
    }
  }, [answerData, reset, mutate]);

  useEffect(() => {
    if (deleteData && deleteData.ok) {
      router.push(`/srinsta`);
    }
  }, [deleteData]);

  return (
    <EventLayout canGoBack>
      {!data?.post ? (
        <div className="loading_box">
          <Loading />
        </div>
      ) : (
        <>
          <div className="pt-16">
            <div className="px-4 pt-4 pb-2 flex items-center justify-between w-full text-gray-800 font-medium text-base">
              <span>
                {data?.post?.nickName ? data?.post?.nickName : "성락인"}
              </span>
            </div>
            <div className="mb-2 px-4 text-gray-700 text-base whitespace-pre-wrap">
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

          <div className="px-4 my-2 space-y-2 text-gray-500">
            {data?.post.answers.map((answer) => (
              <div
                key={answer.id}
                className="flex items-start space-x-3 whitespace-pre-wrap"
              >
                <p className="text-gray-700 mt-2">{answer.answer} </p>
              </div>
            ))}
          </div>
          <div
            className="px-4 mt-4"
            onClick={() => {
              setIsAnswer(!isAnswer);
            }}
          >
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
              <span>댓글 달기</span>
            </span>
          </div>
          {!isAnswer ? null : (
            <form className="px-4" onSubmit={handleSubmit(onValid)}>
              <TextArea
                name="description"
                placeholder="댓글을 입력해주세요."
                required
                register={register("answer", { required: true })}
              />
              <Button text={answerLoading ? "Loading..." : "댓글 달기"} />
            </form>
          )}

          {data?.post?.password && (
            <>
              <div
                className="px-4 mt-4"
                onClick={() => {
                  setIsDelete(!isDelete);
                }}
              >
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
                  <span>게시글 삭제 하기</span>
                </span>
              </div>
              {!isDelete ? null : (
                <form
                  className="px-4 py-2"
                  onSubmit={handleSubmit(onValidDelete)}
                >
                  <div className="mb-2">
                    <Input
                      register={register("password", { required: true })}
                      required
                      name="password"
                      type="password"
                      placeholder="작성할때 입력한 비밀번호를 입력해주세요."
                    />
                  </div>
                  <div className="mb-2 text-red-500 text-sm font-bold ">비밀번호 분실시 삭제가 불가능합니다.</div>
                  <Button text={answerLoading ? "Loading..." : "삭제하기"} />
                </form>
              )}
            </>
          )}
        </>
      )}
    </EventLayout>
  );
};

export default CommunityPostDetail;
