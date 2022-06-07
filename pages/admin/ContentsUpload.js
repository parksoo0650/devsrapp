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
    const { register, handleSubmit, watch } = useForm();
    const [uploadContents, { loading, data }] = useMutation("/api/contents");

    const onValid = async ({ name, kind, description, videoId, publishedAt }) => {
        if (loading) return;
        if (image && image.length > 0) {
            const { uploadURL } = await (await fetch(`/api/files`)).json();
            const form = new FormData();
            form.append("file", image[0], name);
            const {
                result: { id },
            } = await (await fetch(uploadURL, { method: "POST", body: form })).json();
            uploadContents({ name, kind, description, videoId, publishedAt, photoId: id });
        } else {
            uploadContents({ name, kind, description, videoId, publishedAt });
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
        <Layout canGoBack title="Upload Product">
            <form className="p-4 space-y-4" onSubmit={handleSubmit(onValid)}>
                <div>
                    <label className="w-full cursor-pointer text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
                        {imagePreview ? (
                            <img
                                src={imagePreview}
                                className="h-full"
                            />
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
                    register={register("name", { required: true })}
                    required
                    label="Name"
                    name="name"
                    type="text"
                />
                <Input
                    register={register("kind", { required: true })}
                    required
                    label="Kind"
                    name="kind"
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
                    register={register("publishedAt", { required: true })}
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
                <Button text={loading ? "Loading..." : "Upload item"} />
            </form>
        </Layout>
    );
};

export default ContentsUpload;