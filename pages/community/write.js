import Button from "../../src/components/button";
import EventLayout from "../../src/components/EventLayout";
import TextArea from "../../src/components/textarea";
import Input from "../../src/components/input";
import useMutation from "../../libs/client/useMutation";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../../src/components/Loading";
import useCoords from "../../libs/client/useCoords";
import useSWR from "swr";

const Write = () => {
  const router = useRouter();
  const { latitude, longitude } = useCoords();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, watch } = useForm();
  const [post, { loading, data }] = useMutation("/api/posts");

  const { data: coords } = useSWR(
    latitude && longitude
      ? `/api/posts/coords?latitude=${latitude}&longitude=${longitude}`
      : null
  );

  const onValid = async ({
    kind,
    category,
    question,
    nickName,
    password,
    email,
  }) => {
    setIsLoading(true);

    if (loading) return;

    if (image && image.length > 0) {
      const { uploadURL } = await (await fetch(`/api/files`)).json();
      const form = new FormData();
      form.append("file", image[0], image[1]);
      const {
        result: { id },
      } = await (await fetch(uploadURL, { method: "POST", body: form })).json();
      post({
        kind,
        category,
        question,
        nickName,
        password,
        email,
        photoId: id,
      });
    } else {
      post({ kind, category, question, nickName, password, email });
    }
    setIsLoading(false);
    // post(data);
  };

  useEffect(() => {
    if (data && data.ok) {
      if (router.query.kind == "q") {
        router.push(`/community`);
      } else if (router.query.kind == "s") {
        router.push(`/srinsta`);
      }
      // router.push(`/community/${data.post.id}`);
    }
  }, [data, router]);

  const [imagePreview, setImagePreview] = useState("");
  const image = watch("image");
  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  return (
    <EventLayout
      canGoBack
      title={router.query.kind == "q" ? "문의하기" : "성락인스타 글쓰기"}
    >
      {isLoading === true ? (
        <div className="loading_box">
          <Loading />
        </div>
      ) : (
        <>
        {!coords?.coords[0]?.name && 
          <div className="mx-4 py-4 text-red-600 text-lg font-bold">
            수련회 장소에서만 작성이 가능합니다.
          </div>
        }
        <form onSubmit={handleSubmit(onValid)} className="mt-4">
          {router.query.kind == "q" ? (
            <>
              <Input
                register={register("kind", { required: true, value: "notice" })}
                required
                name="kind"
                type="hidden"
              />
              <div className="flex flex-wrap items-center space-x-4 px-4 py-4 justify-around text-base border-b border-t">
                <div className="flex items-center mr-4">
                  <input
                    {...register("category")}
                    type="radio"
                    name="category"
                    value="questions"
                    id="questions"
                    required
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="questions"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    수련회 질문
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    {...register("category")}
                    type="radio"
                    name="category"
                    value="lost"
                    id="lost"
                    required
                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="lost"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    분실/실종
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    {...register("category")}
                    type="radio"
                    name="category"
                    value="please"
                    id="please"
                    required
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="please"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    도와주세요
                  </label>
                </div>
              </div>
            </>
          ) : (
            <>
              <Input
                register={register("kind", { required: true, value: "insta" })}
                required
                name="kind"
                type="hidden"
              />
              <Input
                register={register("category", {
                  required: true,
                  value: "insta",
                })}
                required
                name="category"
                type="hidden"
              />
            </>
          )}

          <div className="mx-4 py-2 border-b">
            <TextArea
              register={register("question", { required: true })}
              required
              placeholder={
                router.query.kind == "q"
                  ? "성락교회 수련회 관련된 질문을 적어주세요."
                  : "성락인스타를 남겨주세요."
              }
            />
          </div>

          <div className="mx-4 py-4 border-b text-gray-500 text-xs">
            <label className="w-full cursor-pointer bg-gray-800 text-white font-bold flex items-center justify-center w-20 h-20 rounded-md mb-2">
              {imagePreview ? (
                <img src={imagePreview} className="h-full" />
              ) : (
                <svg
                  className="h-8 w-8"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <input
                {...register("image")}
                id="image"
                type="file"
                className="hidden"
                accept="image/*"
              />
            </label>
            최대 1장까지 사진 첨부 가능합니다.
          </div>

          <div className="mx-4 py-4 border-b">
            <Input
              register={register("nickName", { required: false })}
              name="nickName"
              type="text"
              label="닉네임"
              placeholder="닉네임 표기를 원하시면 입력해주세요."
            />
          </div>

          <div className="mx-4 py-4 border-b">
            <Input
              register={register("password", { required: false })}
              name="password"
              type="text"
              label="게시글 비번"
              placeholder="게시글 삭제를 원하시면 입력해주세요."
            />
          </div>

          {router.query.kind == "q" && (
            <div className="mx-4 py-4 border-b">
              <Input
                register={register("email", { required: false })}
                name="email"
                type="text"
                label="이메일"
                placeholder="답변을 메일로 받기 원하시면 입력해주세요."
              />
            </div>
          )}
          <div className="px-4 py-4">
            {coords?.coords[0]?.name ? (
              <Button text={loading ? "Loading..." : "글쓰기"} />
            ) : null}
          </div>
        </form>
        </>
      )}
    </EventLayout>
  );
};

export default Write;
