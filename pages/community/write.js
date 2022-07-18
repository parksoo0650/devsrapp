import Button from "../../src/components/button";
import AdminLayout from "../../src/components/AdminLayout";
import TextArea from "../../src/components/textarea";
import useMutation from "../../libs/client/useMutation";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Write = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [post, { loading, data }] = useMutation("/api/posts");
  const onValid = (data) => {
    if (loading) return;
    post(data);
  };
  useEffect(() => {
    if (data && data.ok) {
      router.push(`/community/${data.post.id}`);
    }
  }, [data, router]);
  return (
    <AdminLayout canGoBack title="문의하기 글쓰기">
      <form onSubmit={handleSubmit(onValid)} className="p-4 space-y-4">
        <TextArea
          register={register("question", { required: true, minLength: 5 })}
          required
          placeholder="성락교회 수련회 관련된 질문을 적어주세요."
        />
        <Button text={loading ? "Loading..." : "Submit"} />
      </form>
    </AdminLayout>
  );
};

export default Write;