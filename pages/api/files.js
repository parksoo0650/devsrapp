import withHandler from "../../libs/server/withHandler";
import client from "../../libs/server/client";
import { withApiSession } from "../../libs/server/withSession";

async function handler( req, res ) {
    const response = await (
        await fetch(
            `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ACCOUNT_ID}/images/v1/direct_upload`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.IMAGES_TOKEN}`,
                },
            }
        )
    ).json();
    console.log(response);
    res.json({
        ok: true,
        ...response.result,
    });
}

export default withApiSession(
    withHandler({
        methods: ["GET"],
        handler,
    })
);