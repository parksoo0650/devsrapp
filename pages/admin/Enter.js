import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../src/components/button";
import Input from "../../src/components/input";
import useMutation from "../../libs/client/useMutation";
import { cls } from "../../libs/utils";

const Enter = () => {
    const [enter, { loading, data, error }] = useMutation("/api/users/enter");
    const { register, handleSubmit, reset } = useForm();
    const [method, setMethod] = useState("email");
    const onEmailClick = () => {
        reset();
        setMethod("email");
    };
    const onPhoneClick = () => {
        reset();
        setMethod("phone");
    };
    const onValid = (validForm) => {
        if (loading) return;
        enter(validForm);
    };
    return (
        <div className="mt-16 px-4">
            <h3 className="text-3xl font-bold text-center">Enter to Admin</h3>
            <div className="mt-12">
                <div className="flex flex-col items-center">
                    <h5 className="text-sm text-gray-500 font-medium">Enter using:</h5>
                    <div className="grid border-b  w-full mt-8 grid-cols-2 ">
                        <button
                            className={cls(
                                "pb-4 font-medium text-sm border-b-2",
                                method === "email"
                                    ? " border-orange-500 text-orange-400"
                                    : "border-transparent hover:text-gray-400 text-gray-500"
                            )}
                            onClick={onEmailClick}
                        >
                            Email
                        </button>
                        <button
                            className={cls(
                                "pb-4 font-medium text-sm border-b-2",
                                method === "phone"
                                    ? " border-orange-500 text-orange-400"
                                    : "border-transparent hover:text-gray-400 text-gray-500"
                            )}
                            onClick={onPhoneClick}
                        >
                            Phone
                        </button>
                    </div>
                </div>
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
                    {method === "phone" ? (
                        <Input
                            register={register("phone")}
                            name="phone"
                            label="Phone number"
                            type="number"
                            kind="phone"
                            required
                        />
                    ) : null}
                    {method === "email" ? (
                        <Button text={loading ? "Loading" : "Get login link"} />
                    ) : null}
                    {method === "phone" ? (
                        <Button text={loading ? "Loading" : "Get one-time password"} />
                    ) : null}
                </form>                
            </div>
        </div>
    );
};
export default Enter;