import { useEffect, useState } from "react";
import useMutation from "../../libs/client/useMutation";
// import book from "../../public/book66.json";

export default function Admin() {
    const [bible, { loading, data, error }] = useMutation("/api/bible");

    async function insertBible() {
        if (loading) return;

        // book.forEach(async (element) => {
            // console.log(element);
            // await bible(element);
        // });

        // bible(book1);
        // setSubmitting(true);
        // fetch("/api/admin/bible", {c
        //     method: "POST",
        //     body: JSON.stringify(data),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // }).then(() => {
        //     setSubmitting(false);
        // });
    }

    useEffect(() => {
        // insertBible();
    }, []);

    return (
        <div>
            admin page
            <div>
                <button style={{ padding: "20px", fontWeight: "bold"}} onClick={ () => insertBible() }>{loading ? "Loading" : "finish"}</button>
            </div>
        </div>
    );
}
