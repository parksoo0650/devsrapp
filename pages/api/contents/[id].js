import withHandler, { ResponseType } from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";
import { withApiSession } from "../../../libs/server/withSession";

async function handler(req, res) {
    const { id } = req.query;
    const contents = await client.contents.findUnique({
        where: {
            id: +id.toString(),
        }
    });
    // console.log(contents);
    res.json({ ok: true, contents });
}

export default withApiSession(
    withHandler({
        methods: ["GET"],
        handler,
    })
);