import Button from "../../src/components/button";
import EventLayout from "../../src/components/EventLayout";
import TextArea from "../../src/components/textarea";
import Input from "../../src/components/input";
import useMutation from "../../libs/client/useMutation";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../../src/components/Loading";

const Write = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, watch } = useForm();
  const [post, { loading, data }] = useMutation("/api/posts");

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
      router.push(`/community/${data.post.id}`);
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
        <form onSubmit={handleSubmit(onValid)} className="px-4 space-y-4">
          {router.query.kind == "q" ? (
            <>
              <Input
                register={register("kind", { required: true, value: "notice" })}
                required
                name="kind"
                type="hidden"
              />
              <div className="flex space-x-4">
                <label htmlFor="questions">
                  <input
                    {...register("category")}
                    type="radio"
                    name="category"
                    value="questions"
                    id="questions"
                    required
                  />
                  수련회질문
                </label>
                <label htmlFor="lost">
                  <input
                    {...register("category")}
                    type="radio"
                    name="category"
                    value="lost"
                    id="lost"
                    required
                  />
                  분실/실종
                </label>
                <label htmlFor="please">
                  <input
                    {...register("category")}
                    type="radio"
                    name="category"
                    value="please"
                    id="please"
                    required
                  />
                  해주세요
                </label>
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
          <TextArea
            register={register("question", { required: true })}
            required
            placeholder={
              router.query.kind == "q"
                ? "성락교회 수련회 관련된 질문을 적어주세요."
                : "성락인스타를 남겨주세요."
            }
          />
          <div>
            <label className="w-full cursor-pointer text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 w-10 h-10 rounded-md">
              {imagePreview ? (
                <img src={imagePreview} className="h-full" />
              ) : (
                <svg
                  className="h-12 w-12"
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
          </div>
          <Input
            register={register("nickName", { required: false })}
            name="nickName"
            type="text"
            label="닉네임"
            placeholder="닉네임 표기를 원하시면 입력해주세요."
          />
          <Input
            register={register("password", { required: false })}
            name="password"
            type="text"
            label="게시글비번"
            placeholder="게시글 수정/삭제를 원하시면 입력해주세요."
          />
          {router.query.kind == "q" && (
            <Input
              register={register("email", { required: false })}
              name="email"
              type="text"
              label="이메일"
              placeholder="답변을 메일로 받기 원하시면 입력해주세요."
            />
          )}
          <Button text={loading ? "Loading..." : "Submit"} />
        </form>
      )}
    </EventLayout>
  );
};

export default Write;
