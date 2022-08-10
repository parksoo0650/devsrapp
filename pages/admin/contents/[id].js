import Button from "../../../src/components/button";
import Layout from "../../../src/components/AdminLayout";
import Input from "../../../src/components/input";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import useMutation from "../../../libs/client/useMutation";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";

const ContentsDetail = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const { data, error } = useSWR(
    router.query.id ? `/api/contents/${router.query.id}` : null
  );

  const [sendDelete, { data: deleteData, loading: deleteLoading }] =
    useMutation(`/api/contents/${router.query.id}/delete`);

  const onValidDelete = (form) => {
    if (deleteLoading) return;
    sendDelete(form);
  };

  useEffect(() => {
    if (deleteData && deleteData.ok) {
      router.push(`/admin`);
    }
  }, [deleteData]);

  return (
    <Layout canGoBack>
      <div className="px-4  py-4">
        <div className="mb-8">
          <img
            src={`https://imagedelivery.net/dnbl58MgrkUrjmB9YWa_dA/${data?.contents.image}/public`}
            className="h-96 bg-slate-300"
          />
          <div className="flex cursor-pointer py-3 border-t border-b items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-sm font-medium text-gray-700">
                {data?.contents?.user?.name}
              </p>
              {/* <Link href={`/admin/ContentsUpload?${data?.contents?.id}`}>
                                <a className="text-xs font-medium text-gray-500">
                                    edit
                                </a>
                            </Link> */}
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-bold text-gray-900">
              {data?.contents?.name}
            </h1>
            <p className="text-2xl block mt-3 text-gray-900">
              {data?.contents?.kind}
            </p>
            <p className="text-2xl block mt-3 text-gray-900">
              {data?.contents?.publishedAt}
            </p>
            <p className="text-2xl block mt-3 text-gray-900">
              {data?.contents?.videoId}
            </p>
            <p className=" my-6 text-gray-700">{data?.contents?.description}</p>
          </div>
        </div>
        <form className="px-4 py-2" onSubmit={handleSubmit(onValidDelete)}>
          <div className="mb-2">
            <Input
              register={register("id", {
                required: true,
                value: data?.contents?.id,
              })}
              required
              name="id"
              type="text"
            />
          </div>
          <Button text={deleteLoading ? "Loading..." : "삭제하기"} />
        </form>
      </div>
    </Layout>
  );
};

export default ContentsDetail;
