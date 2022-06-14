import withHandler, { ResponseType } from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";
import { withApiSession } from "../../../libs/server/withSession";

async function handler(req, res) {
    const { id } = req.query;
    const weekly = await client.weekly.findUnique({
        where: {
            id: +id.toString(),
        }
    });
    // console.log(contents);
    res.json({ ok: true, weekly });
}

export default withApiSession(
    withHandler({
        methods: ["GET"],
        handler,
        isPrivate: false,
    })
);