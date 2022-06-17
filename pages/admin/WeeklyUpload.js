import Layout from "../../src/components/AdminLayout";
import Button from "../../src/components/button";
import Input from "../../src/components/input";
import TextArea from "../../src/components/textarea";
import useMutation from "../../libs/client/useMutation";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const WeeklyUpload = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm();
    const [uploadWeekly, { loading, data }] = useMutation("/api/weekly");

    const onValid = async (data) => {
        if (loading) return;
        // console.log(data);
        uploadWeekly(data);
    };

    useEffect(() => {
        if (data?.ok) {
            router.replace(`/admin/weekly/${data.weekly.id}`);
        }
    }, [data, router]);

    return (
        <Layout canGoBack title="주보 등록">
            <form className="p-4 space-y-4" onSubmit={handleSubmit(onValid)}>
                <Input
                    register={register("volume", { required: true })}
                    required
                    label="권"
                    name="volume"
                    type="text"
                />
                <Input
                    register={register("weekNo", { required: true })}
                    required
                    label="호"
                    name="weekNo"
                    type="text"
                />
                <Input
                    register={register("publishedAt", { required: true })}
                    required
                    label="PublishedAt"
                    name="publishedAt"
                    type="text"
                />
                <Input
                    register={register("bible", { required: true })}
                    required
                    label="설교말씀(한글)"
                    name="bible"
                    type="text"
                />
                <Input
                    register={register("bibleEN", { required: true })}
                    required
                    label="설교말씀(영문)"
                    name="bibleEN"
                    type="text"
                />
                <Input
                    register={register("titleKR", { required: true })}
                    required
                    label="설교제목(한글)"
                    name="titleKR"
                    type="text"
                />
                <Input
                    register={register("titleEN", { required: true })}
                    required
                    label="설교제목(영문)"
                    name="titleEN"
                    type="text"
                />
                <TextArea
                    register={register("descriptionKR", { required: true })}
                    label="설교내용(한글)"
                    name="descriptionKR"
                    required
                />
                <TextArea
                    register={register("descriptionEN", { required: true })}
                    label="설교내용(영문)"
                    name="descriptionEN"
                    required
                />
                <Input
                    register={register("hymn1", { required: true })}
                    required
                    label="찬송1"
                    name="hymn1"
                    type="text"
                />
                <Input
                    register={register("hymn2", { required: true })}
                    required
                    label="찬송2"
                    name="hymn2"
                    type="text"
                />
                <Input
                    register={register("pray1", { required: true })}
                    required
                    label="대표기도 1부"
                    name="pray1"
                    type="text"
                />
                <Input
                    register={register("pray2", { required: true })}
                    required
                    label="대표기도 3부"
                    name="pray2"
                    type="text"
                />
                <Button text={loading ? "Loading..." : "Upload item"} />
            </form>
        </Layout>
    );
};

export default WeeklyUpload;