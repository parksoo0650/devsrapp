import { UseFormRegisterReturn } from "react-hook-form";

export default function TextArea({
    label,
    name,
    register,
    ...rest
}) {
    return (
        <div>
            {label ? (
                <label
                    htmlFor={name}
                    className="mb-1 block text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            ) : null}
            <textarea
                id={name}
                {...register}
                className="mt-1 shadow-sm w-full border-none focus:ring-white border-white focus:border-white outline-none resize-none shadow-none"
                rows={4}
                {...rest}
            />
        </div>
    );
}