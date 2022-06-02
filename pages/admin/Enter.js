import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../src/components/button";
import Input from "../../src/components/input";
import useMutation from "../../libs/client/useMutation";
import { useRouter } from "next/router";

const Enter = () => {
    const [enter, { loading, data, error }] = useMutation("/api/users/enter");
    const [confirmToken, { loading: tokenLoading, data: tokenData }] = useMutation("/api/users/confirm");
    const { register, handleSubmit, reset } = useForm();
    const { register: tokenRegister, handleSubmit: tokenHandleSubmit } = useForm();
    const [method, setMethod] = useState("email");
    const onValid = (validForm) => {
        if (loading) return;
        enter(validForm);
    };
    const onTokenValid = (validForm) => {
        if (tokenLoading) return;
        confirmToken(validForm);
    };
    const router = useRouter();
    useEffect(() => {
        if (tokenData?.ok) {
            router.push("/admin");
        }
    }, [tokenData, router]);
    return (
        <div className="mt-16 px-4">
            <h3 className="text-3xl font-bold text-center">Enter to Admin</h3>
            <div className="mt-12">
                {data?.ok ? (
                    <form
                        onSubmit={tokenHandleSubmit(onTokenValid)}
                        className="flex flex-col mt-8 space-y-4"
                    >
                        <Input
                            register={tokenRegister("token", {
                                required: true,
                            })}
                            name="token"
                            label="Confirmation Token"
                            type="number"
                            required
                        />
                        <Button text={tokenLoading ? "Loading" : "Confirm Token"} />
                    </form>
                ) : (
                    <>
                        <form
                            onSubmit={handleSubmit(onValid)}
                            className="flex flex-col mt-8 space-y-4"
                        >
                            {method === "email" ? (
                                <Input
                                    register={register("email", {
                                        required: true,
                                    })}
                                    name="email"
                                    label="Email address"
                                    type="email"
                                    required
                                />
                            ) : null}
                            {method === "email" ? (
                                <Button text={loading ? "Loading" : "Get login link"} />
                            ) : null}
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};
export default Enter;