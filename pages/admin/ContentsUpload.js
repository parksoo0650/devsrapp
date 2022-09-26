import Layout from "../../src/components/AdminLayout";
import Button from "../../src/components/button";
import Input from "../../src/components/input";
import TextArea from "../../src/components/textarea";
import useMutation from "../../libs/client/useMutation";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const ContentsUpload = () => {
  const router = useRouter();
  const { register, handleSubmit, setValue, watch } = useForm();
  const [uploadContents, { loading, data }] = useMutation("/api/contents");
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month >= 10 ? month : "0" + month;
  let day = date.getDate();
  day = day >= 10 ? day : "0" + day;

  const contentKind = ["oncontents", "praise", "sermon", "shorts"];

  const strShortsSubKind = {
    min: "1분은혜",
  };

  const strPraiseSubKind = {
    p11: "주일예배찬양",
    p15: "주일연합예배찬양",
    prc: "성가대",
    pro: "헌금송",
  };

  const strSermonSubKind = {
    def: "주일설교",
    sun: "주일예배",
    live: "라이브",
  };

  const strOncontentsSubKind = {
    onm: "온라인특별 새벽기도회",
    onb: "온성경",
    ont: "온3분",
    tue: "환언특강",
    wed1: "수요예배",
    wed2: "수요저녁예배 및 기도회",
    fri: "금요기도회",
  };

  const onValid = async ({
    name,
    kind,
    subKind,
    description,
    videoId,
    publishedAt,
  }) => {
    if (loading) return;
    if (image && image.length > 0) {
      const { uploadURL } = await (await fetch(`/api/files`)).json();
      const form = new FormData();
      form.append("file", image[0], name);
      const {
        result: { id },
      } = await (await fetch(uploadURL, { method: "POST", body: form })).json();
      uploadContents({
        name,
        kind,
        subKind,
        description,
        videoId,
        publishedAt,
        photoId: id,
      });
    } else {
      uploadContents({
        name,
        kind,
        subKind,
        description,
        videoId,
        publishedAt,
      });
    }
  };

  useEffect(() => {
    if (data?.ok) {
      router.replace(`/admin/contents/${data.contents.id}`);
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
    <Layout canGoBack title="Upload Content">
      <form className="p-4 space-y-4" onSubmit={handleSubmit(onValid)}>
        <div>
          <label className="w-full cursor-pointer text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
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

        {router.query.kind == "sermon" && (
          <div className="flex flex-col items-start justify-center py-4 text-base border-b border-t">
            <div className="flex items-center py-2">
              <input
                {...register("subKindChk")}
                type="radio"
                name="subKindChk"
                value="def"
                id="def"
                required
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => {
                  setValue("description", strSermonSubKind[e.target.value]);
                }}
              />
              <label
                htmlFor="def"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                주일설교
              </label>
            </div>
            <div className="flex items-center py-2">
              <input
                {...register("subKindChk")}
                type="radio"
                name="subKindChk"
                value="sun"
                id="sun"
                required
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => {
                  setValue("description", strSermonSubKind[e.target.value]);
                }}
              />
              <label
                htmlFor="sun"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                주일예배
              </label>
            </div>
            <div className="flex items-center py-2">
              <input
                {...register("subKindChk")}
                type="radio"
                name="subKindChk"
                value="live"
                id="live"
                required
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => {
                  setValue("name", "");
                  setValue("description", strSermonSubKind[e.target.value]);
                }}
              />
              <label
                htmlFor="live"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                라이브
              </label>
            </div>
          </div>
        )}

        {router.query.kind == "oncontents" && (
          <div className="flex flex-col items-start justify-center py-4 text-base border-b border-t">
            <div className="flex items-center py-2">
              <input
                {...register("subKindChk")}
                type="radio"
                name="subKindChk"
                value="onm"
                id="onm"
                required
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => {
                  setValue("name", strOncontentsSubKind[e.target.value]);
                  setValue("description", strOncontentsSubKind[e.target.value]);
                  setValue("subKind", "onm");
                }}
              />
              <label
                htmlFor="onm"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                온라인특별 새벽기도회
              </label>
            </div>
            <div className="flex items-center py-2">
              <input
                {...register("subKindChk")}
                type="radio"
                name="subKindChk"
                value="onb"
                id="onb"
                required
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => {
                  setValue("name", "");
                  setValue("description", strOncontentsSubKind[e.target.value]);
                  setValue("subKind", "onb");
                }}
              />
              <label
                htmlFor="onb"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                온성경
              </label>
            </div>
            <div className="flex items-center py-2">
              <input
                {...register("subKindChk")}
                type="radio"
                name="subKindChk"
                value="ont"
                id="ont"
                required
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => {
                  setValue("name", "");
                  setValue("description", strOncontentsSubKind[e.target.value]);
                  setValue("subKind", "ont");
                }}
              />
              <label
                htmlFor="ont"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                온3분
              </label>
            </div>

            <div className="flex items-center py-2">
              <input
                {...register("subKindChk")}
                type="radio"
                name="subKindChk"
                value="tue"
                id="tue"
                required
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => {
                  setValue("name", strOncontentsSubKind[e.target.value]);
                  setValue("description", strOncontentsSubKind[e.target.value]);
                  setValue("subKind", "tue");
                }}
              />
              <label
                htmlFor="tue"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                환언특강
              </label>
            </div>

            <div className="flex items-center py-2">
              <input
                {...register("subKindChk")}
                type="radio"
                name="subKindChk"
                value="wed1"
                id="wed1"
                required
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => {
                  setValue("name", strOncontentsSubKind[e.target.value]);
                  setValue("description", strOncontentsSubKind[e.target.value]);
                  setValue("subKind", "wed1");
                }}
              />
              <label
                htmlFor="wed1"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                수요예배
              </label>
            </div>

            <div className="flex items-center py-2">
              <input
                {...register("subKindChk")}
                type="radio"
                name="subKindChk"
                value="wed2"
                id="wed2"
                required
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => {
                  setValue("name", strOncontentsSubKind[e.target.value]);
                  setValue("description", strOncontentsSubKind[e.target.value]);
                  setValue("subKind", "wed2");
                }}
              />
              <label
                htmlFor="wed2"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                수요저녁예배 및 기도회
              </label>
            </div>

            <div className="flex items-center py-2">
              <input
                {...register("subKindChk")}
                type="radio"
                name="subKindChk"
                value="fri"
                id="fri"
                required
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => {
                  setValue("name", strOncontentsSubKind[e.target.value]);
                  setValue("description", strOncontentsSubKind[e.target.value]);
                  setValue("subKind", "fri");
                }}
              />
              <label
                htmlFor="fri"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                금요기도회
              </label>
            </div>
          </div>
        )}

        {router.query.kind == "praise" && (
          <div className="flex flex-col items-start justify-center py-4 text-base border-b border-t">
            <div className="flex items-center py-2">
              <input
                {...register("subKindChk")}
                type="radio"
                name="subKindChk"
                value="p11"
                id="p11"
                required
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => {
                  setValue("description", strPraiseSubKind[e.target.value]);
                  setValue("subKind", "p11");
                }}
              />
              <label
                htmlFor="p11"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                주일예배찬양
              </label>
            </div>
            <div className="flex items-center py-2">
              <input
                {...register("subKindChk")}
                type="radio"
                name="subKindChk"
                value="p15"
                id="p15"
                required
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => {
                  setValue("description", strPraiseSubKind[e.target.value]);
                  setValue("subKind", "p15");
                }}
              />
              <label
                htmlFor="p15"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                주일연합예배찬양
              </label>
            </div>
            <div className="flex items-center py-2">
              <input
                {...register("subKindChk")}
                type="radio"
                name="subKindChk"
                value="prc"
                id="prc"
                required
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => {
                  setValue("description", strPraiseSubKind[e.target.value]);
                  setValue("subKind", "prc");
                }}
              />
              <label
                htmlFor="prc"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                성가대
              </label>
            </div>
            <div className="flex items-center py-2">
              <input
                {...register("subKindChk")}
                type="radio"
                name="subKindChk"
                value="pro"
                id="pro"
                required
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => {
                  setValue("description", strPraiseSubKind[e.target.value]);
                  setValue("subKind", "pro");
                }}
              />
              <label
                htmlFor="pro"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                헌금송
              </label>
            </div>
          </div>
        )}

        {router.query.kind == "shorts" && (
          <div className="flex flex-col items-start justify-center py-4 text-base border-b border-t">
            <div className="flex items-center py-2">
              <input
                {...register("subKindChk")}
                type="radio"
                name="subKindChk"
                value="min"
                id="min"
                required
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => {
                  setValue("description", strShortsSubKind[e.target.value]);
                  setValue("subKind", "min");
                }}
              />
              <label
                htmlFor="min"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                1분은혜
              </label>
            </div>
          </div>
        )}

        <Input
          register={register("name", { required: true })}
          required
          label="Name"
          name="name"
          type="text"
        />

        <Input
          register={register("videoId", { required: true })}
          required
          label="VideoId"
          name="videoId"
          type="text"
        />

        <Input
          register={register("publishedAt", {
            required: true,
            value: year + "." + month + "." + day,
          })}
          required
          label="PublishedAt"
          name="publishedAt"
          type="text"
        />

        <TextArea
          register={register("description", { required: true })}
          label="Description"
          name="description"
          required
        />

        <Input
          register={register("kind", {
            required: true,
            value: router.query.kind,
          })}
          required
          name="kind"
          type="hidden"
        />

        <Input
          register={register("subKind", {
            required: true,
          })}
          required
          name="subKind"
          type="text"
        />

        <Button text={loading ? "Loading..." : "Upload item"} />
      </form>
    </Layout>
  );
};

export default ContentsUpload;
