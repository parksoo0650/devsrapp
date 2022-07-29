import { cls } from "../../libs/utils";

export default function Button({
    large = false,
    onClick,
    text,
    ...rest
}) {
    return (
        <button
            {...rest}
            className={cls(
                "w-full bg-gray-800 hover:bg-gray-800 text-white px-4 py-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:outline-none",
                large ? "py-3 text-base" : "py-2 text-sm "
            )}
        >
            {text}
        </button>
    );
}