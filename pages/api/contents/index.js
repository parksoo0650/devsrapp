import withHandler, { ResponseType } from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";
import { withApiSession } from "../../../libs/server/withSession";

async function handler(req, res) {
    const {
        body: { name, kind, description }
    } = req;

    if (req.method === "GET") {
        const contents = await client.Contents.findMany({});
        res.json({
            ok: true,
            contents,
        });
    }
    if (req.method === "POST") {
        const contents = await client.Contents.create({
            data: {
                name,
                kind,
                description,
                image: "xx",
            },
        });
        res.json({
            ok: true,
            contents,
        });
    }
}

export default withApiSession(
    withHandler({
        methods: ["GET", "POST"],
        handler,
    })
);