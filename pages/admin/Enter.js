import { useState } from "react";
import Button from "../../src/components/button";
import Input from "../../src/components/input";
import { cls } from "../../libs/utils";

const Enter = () => {
    const [method, setMethod] = useState("email");
    const onEmailClick = () => setMethod("email");
    const onPhoneClick = () => setMethod("phone");
    return (
        <div className="mt-16 px-4">
            <h3 className="text-3xl font-bold text-center">Enter to Admin</h3>
            <div className="mt-12">
                <div className="flex flex-col items-center">
                    <h5 className="text-sm text-gray-500 font-medium">Enter using:</h5>
                    <div className="grid  border-b  w-full mt-8 grid-cols-2 ">
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
                <form className="flex flex-col mt-8 space-y-4">
                    {method === "email" ? (
                        <Input name="email" label="Email address" type="email" required />
                    ) : null}
                    {method === "phone" ? (
                        <Input
                            name="phone"
                            label="Phone number"
                            type="number"
                            kind="phone"
                            required
                        />
                    ) : null}
                    {method === "email" ? <Button text={"Get login link"} /> : null}
                    {method === "phone" ? (
                        <Button text={"Get one-time password"} />
                    ) : null}
                </form>
            </div>
        </div>
    );
};
export default Enter;